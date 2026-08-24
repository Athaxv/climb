import { CATEGORIES, isCategorySlug } from "@climb/db/categories";
import { parseSkillList } from "@climb/db/skills";
import type { ParsedProfileUrl, ProfilePlatform } from "@climb/ranking";

export type ProfileSignals = {
  platform: ProfilePlatform;
  handle: string;
  canonicalUrl: string;
  name?: string;
  bio?: string;
  headline?: string;
  topics: string[];
};

export type InferredProfile = {
  fullName: string;
  headline: string;
  categorySlug: string;
  skills: string[];
  source: "groq" | "heuristic";
};

export const CATEGORY_SLUGS = CATEGORIES.map((category) => category.slug);

export function heuristicCategory(platform: ProfilePlatform): string {
  if (platform === "GITHUB") return "engineering";
  if (platform === "TWITTER") return "creators";
  return "other";
}

export function heuristicInfer(parsed: ParsedProfileUrl, signals?: ProfileSignals): InferredProfile {
  const fullName = signals?.name?.trim() || parsed.fullName;
  const fromBio = signals?.headline?.trim() || signals?.bio?.trim() || "";
  return {
    fullName,
    headline: (fromBio || `${fullName} on Climb`).slice(0, 160),
    categorySlug: heuristicCategory(parsed.type),
    skills: parseSkillList(signals?.topics ?? [])
      .slice(0, 8)
      .map((skill) => skill.name),
    source: "heuristic",
  };
}

export function parseGroqClassification(raw: string): Partial<InferredProfile> | null {
  try {
    const parsed = JSON.parse(raw) as {
      fullName?: unknown;
      headline?: unknown;
      categorySlug?: unknown;
      skills?: unknown;
    };
    const skills = Array.isArray(parsed.skills)
      ? parsed.skills.filter((item): item is string => typeof item === "string")
      : [];
    return {
      fullName: typeof parsed.fullName === "string" ? parsed.fullName : undefined,
      headline: typeof parsed.headline === "string" ? parsed.headline : undefined,
      categorySlug: typeof parsed.categorySlug === "string" ? parsed.categorySlug : undefined,
      skills,
    };
  } catch {
    return null;
  }
}

export function mergeClassification(
  parsed: ParsedProfileUrl,
  signals: ProfileSignals,
  groq: Partial<InferredProfile> | null,
): InferredProfile {
  const fallback = heuristicInfer(parsed, signals);
  const categorySlug =
    groq?.categorySlug && isCategorySlug(groq.categorySlug) ? groq.categorySlug : fallback.categorySlug;
  const skills = parseSkillList(groq?.skills?.length ? groq.skills : fallback.skills)
    .slice(0, 8)
    .map((skill) => skill.name);
  return {
    fullName: groq?.fullName?.trim() || fallback.fullName,
    headline: (groq?.headline?.trim() || fallback.headline).slice(0, 160),
    categorySlug,
    skills,
    source: groq ? "groq" : "heuristic",
  };
}

function decodeEntities(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function attr(html: string, key: string) {
  const property = new RegExp(
    `<meta[^>]+(?:property|name)=["']${key}["'][^>]+content=["']([^"']+)["']`,
    "i",
  );
  const contentFirst = new RegExp(
    `<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${key}["']`,
    "i",
  );
  return property.exec(html)?.[1] || contentFirst.exec(html)?.[1] || "";
}

function topicsFromJsonLd(html: string): { name?: string; headline?: string; topics: string[] } {
  const topics: string[] = [];
  let name: string | undefined;
  let headline: string | undefined;
  const blocks = html.match(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) ?? [];
  for (const block of blocks) {
    const json = /<script[^>]*>([\s\S]*?)<\/script>/i.exec(block)?.[1];
    if (!json) continue;
    try {
      const data = JSON.parse(json) as Record<string, unknown> | Record<string, unknown>[];
      const nodes = Array.isArray(data) ? data : [data];
      for (const node of nodes) {
        if (typeof node.name === "string" && !name) name = node.name;
        if (typeof node.jobTitle === "string" && !headline) headline = node.jobTitle;
        if (Array.isArray(node.knowsAbout)) {
          for (const item of node.knowsAbout) {
            if (typeof item === "string") topics.push(item);
          }
        }
      }
    } catch {
      /* ignore malformed json-ld */
    }
  }
  return { name, headline, topics };
}

export function extractHtmlSignals(html: string): Pick<ProfileSignals, "name" | "bio" | "headline" | "topics"> {
  const jsonLd = topicsFromJsonLd(html);
  const title = decodeEntities(attr(html, "og:title") || attr(html, "twitter:title"));
  const description = decodeEntities(attr(html, "og:description") || attr(html, "twitter:description"));
  return {
    name: jsonLd.name || (title.includes("|") ? title.split("|")[0]?.trim() : title) || undefined,
    bio: description || undefined,
    headline: jsonLd.headline || description.slice(0, 160) || undefined,
    topics: jsonLd.topics,
  };
}

export function groqSystemPrompt() {
  return [
    "You classify public professional profiles for Climb, a pay-to-rank people leaderboard.",
    `Pick exactly one categorySlug from: ${CATEGORY_SLUGS.join(", ")}.`,
    "Return JSON: {\"fullName\":\"\",\"headline\":\"\",\"categorySlug\":\"\",\"skills\":[\"\"]}.",
    "headline max 160 chars. skills: up to 8 short skill names. No commentary.",
  ].join(" ");
}
