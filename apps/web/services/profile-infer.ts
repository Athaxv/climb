import { parseProfileUrl, type ParsedProfileUrl } from "@climb/ranking";
import { AppError } from "@/lib/http";
import { cacheGetJson, cacheSetJson } from "@/lib/redis";
import {
  extractHtmlSignals,
  groqSystemPrompt,
  heuristicInfer,
  listingMedia,
  mergeClassification,
  parseGroqClassification,
  type InferredProfile,
  type ProfileSignals,
} from "./profile-infer-core";

export {
  extractHtmlSignals,
  heuristicCategory,
  heuristicInfer,
  listingMedia,
  mergeClassification,
  parseGroqClassification,
  sanitizeHttpUrl,
  groqSystemPrompt,
} from "./profile-infer-core";
export type { InferredProfile, ProfileSignals } from "./profile-infer-core";

const FETCH_TIMEOUT_MS = 3000;
const HTML_LIMIT = 200_000;
const GROQ_MODEL = "llama-3.3-70b-versatile";
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const INFER_CACHE_TTL_SECONDS = 3600;

function groqKey() {
  const key = process.env.GROQ_API_KEY?.trim();
  if (!key || key.includes("...")) return "";
  return key;
}

async function fetchText(url: string, headers?: HeadersInit): Promise<string | null> {
  try {
    const response = await fetch(url, {
      headers: {
        "user-agent": "ClimbBot/1.0 (profile inference)",
        ...headers,
      },
      redirect: "follow",
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!response.ok) return null;
    const buffer = await response.arrayBuffer();
    const slice = buffer.byteLength > HTML_LIMIT ? buffer.slice(0, HTML_LIMIT) : buffer;
    return new TextDecoder("utf-8", { fatal: false }).decode(slice);
  } catch {
    return null;
  }
}

function githubHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN?.trim();
  return {
    accept: "application/vnd.github+json",
    ...(token ? { authorization: `Bearer ${token}` } : {}),
  };
}

async function fetchGitHubSignals(handle: string): Promise<Partial<ProfileSignals>> {
  const headers = githubHeaders();
  const [userRaw, reposRaw] = await Promise.all([
    fetchText(`https://api.github.com/users/${encodeURIComponent(handle)}`, headers),
    fetchText(
      `https://api.github.com/users/${encodeURIComponent(handle)}/repos?sort=updated&per_page=8`,
      headers,
    ),
  ]);
  if (!userRaw) return {};
  let user: {
    name?: string | null;
    bio?: string | null;
    company?: string | null;
    login?: string;
    avatar_url?: string | null;
    location?: string | null;
  };
  try {
    user = JSON.parse(userRaw) as typeof user;
  } catch {
    return {};
  }
  const topics: string[] = [];
  if (reposRaw) {
    try {
      const repos = JSON.parse(reposRaw) as { language?: string | null }[];
      for (const repo of repos) {
        if (repo.language) topics.push(repo.language);
      }
    } catch {
      /* ignore */
    }
  }
  return {
    name: user.name || user.login || undefined,
    bio: user.bio || undefined,
    headline: user.bio || user.company || undefined,
    imageUrl: user.avatar_url || undefined,
    location: user.location || undefined,
    topics,
  };
}

async function fetchPageSignals(url: string): Promise<Partial<ProfileSignals>> {
  const html = await fetchText(url, { accept: "text/html" });
  if (!html) return {};
  return extractHtmlSignals(html, url);
}

export async function collectSignals(parsed: ParsedProfileUrl): Promise<ProfileSignals> {
  const extra =
    parsed.type === "GITHUB"
      ? await fetchGitHubSignals(parsed.handle)
      : await fetchPageSignals(parsed.canonicalUrl);
  return {
    platform: parsed.type,
    handle: parsed.handle,
    canonicalUrl: parsed.canonicalUrl,
    name: extra.name,
    bio: extra.bio,
    headline: extra.headline,
    imageUrl: extra.imageUrl,
    location: extra.location,
    topics: extra.topics ?? [],
  };
}

async function classifyWithGroq(signals: ProfileSignals): Promise<Partial<InferredProfile> | null> {
  const apiKey = groqKey();
  if (!apiKey) return null;

  try {
    const response = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        temperature: 0.2,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: groqSystemPrompt() },
          { role: "user", content: JSON.stringify(signals) },
        ],
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return null;
    const body = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const content = body.choices?.[0]?.message?.content;
    if (!content) return null;
    return parseGroqClassification(content);
  } catch {
    return null;
  }
}

export async function inferProfile(identity: string): Promise<InferredProfile> {
  const parsed = parseProfileUrl(identity);
  if (!parsed) {
    throw new AppError("invalid_identity", "Paste a LinkedIn, GitHub, X, or website URL.");
  }
  const cacheKey = `infer:${parsed.canonicalUrl}`;
  const cached = await cacheGetJson<InferredProfile>(cacheKey);
  if (cached) return cached;
  const signals = await collectSignals(parsed);
  const groq = await classifyWithGroq(signals);
  const result = mergeClassification(parsed, signals, groq);
  await cacheSetJson(cacheKey, result, INFER_CACHE_TTL_SECONDS);
  return result;
}

export async function inferListingMedia(identity: string): Promise<{
  imageUrl?: string;
  bio?: string;
  location?: string;
}> {
  const parsed = parseProfileUrl(identity);
  if (!parsed) return {};
  return listingMedia(await collectSignals(parsed));
}

export function fallbackWhenKeyUnset(identity: string) {
  const parsed = parseProfileUrl(identity);
  if (!parsed) return null;
  return heuristicInfer(parsed);
}
