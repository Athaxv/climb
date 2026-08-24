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
  imageUrl?: string;
  location?: string;
  topics: string[];
};

export type InferredProfile = {
  fullName: string;
  headline: string;
  categorySlug: string;
  skills: string[];
  imageUrl?: string;
  bio?: string;
  location?: string;
  source: "groq" | "heuristic";
};

export const CATEGORY_SLUGS = CATEGORIES.map((category) => category.slug);

export function heuristicCategory(platform: ProfilePlatform): string {
  if (platform === "GITHUB") return "engineering";
  if (platform === "TWITTER") return "creators";
  return "other";
}

export function sanitizeHttpUrl(raw: string | undefined, base?: string): string | undefined {
  if (!raw?.trim()) return undefined;
  let value = decodeEntities(raw.trim());
  if (value.startsWith("//")) value = `https:${value}`;
  try {
    const url = base ? new URL(value, base) : new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") return undefined;
    if (url.href.length > 2048) return undefined;
    return url.href;
  } catch {
    return undefined;
  }
}

function clip(value: string | undefined, max: number): string | undefined {
  const trimmed = value?.trim();
  if (!trimmed) return undefined;
  return trimmed.slice(0, max);
}

export function listingMedia(signals?: Pick<ProfileSignals, "imageUrl" | "bio" | "location" | "canonicalUrl">) {
  return {
    imageUrl: sanitizeHttpUrl(signals?.imageUrl, signals?.canonicalUrl),
    bio: clip(signals?.bio, 500),
    location: clip(signals?.location, 80),
  };
}

export function heuristicInfer(parsed: ParsedProfileUrl, signals?: ProfileSignals): InferredProfile {
  const fullName = signals?.name?.trim() || parsed.fullName;
  const fromBio = signals?.headline?.trim() || signals?.bio?.trim() || "";
  const media = listingMedia(signals);
  return {
    fullName,
    headline: (fromBio || `${fullName} on Climb`).slice(0, 160),
    categorySlug: heuristicCategory(parsed.type),
    skills: parseSkillList(signals?.topics ?? [])
      .slice(0, 8)
      .map((skill) => skill.name),
    ...media,
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
    imageUrl: fallback.imageUrl,
    bio: fallback.bio,
    location: fallback.location,
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

function imageFromUnknown(value: unknown): string | undefined {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return imageFromUnknown(value[0]);
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    if (typeof record.url === "string") return record.url;
    if (typeof record.contentUrl === "string") return record.contentUrl;
  }
  return undefined;
}

function locationFromUnknown(value: unknown): string | undefined {
  if (typeof value === "string") return value;
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    if (typeof record.addressLocality === "string") return record.addressLocality;
    if (typeof record.name === "string") return record.name;
  }
  return undefined;
}

function topicsFromJsonLd(html: string): {
  name?: string;
  headline?: string;
  imageUrl?: string;
  location?: string;
  topics: string[];
} {
  const topics: string[] = [];
  let name: string | undefined;
  let headline: string | undefined;
  let imageUrl: string | undefined;
  let location: string | undefined;
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
        if (!imageUrl) imageUrl = imageFromUnknown(node.image);
        if (!location) location = locationFromUnknown(node.address) || locationFromUnknown(node.homeLocation);
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
  return { name, headline, imageUrl, location, topics };
}

export function extractHtmlSignals(
  html: string,
  baseUrl?: string,
): Pick<ProfileSignals, "name" | "bio" | "headline" | "imageUrl" | "location" | "topics"> {
  const jsonLd = topicsFromJsonLd(html);
  const title = decodeEntities(attr(html, "og:title") || attr(html, "twitter:title"));
  const description = decodeEntities(attr(html, "og:description") || attr(html, "twitter:description"));
  const rawImage =
    attr(html, "og:image") ||
    attr(html, "og:image:url") ||
    attr(html, "twitter:image") ||
    attr(html, "twitter:image:src") ||
    jsonLd.imageUrl;
  return {
    name: jsonLd.name || (title.includes("|") ? title.split("|")[0]?.trim() : title) || undefined,
    bio: clip(description, 500),
    headline: jsonLd.headline || clip(description, 160),
    imageUrl: sanitizeHttpUrl(rawImage, baseUrl),
    location: clip(jsonLd.location, 80),
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
