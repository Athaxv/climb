export type ProfilePlatform = "GITHUB" | "LINKEDIN" | "TWITTER" | "WEBSITE";

export type ParsedProfileUrl = {
  type: ProfilePlatform;
  handle: string;
  canonicalUrl: string;
  username: string;
  fullName: string;
};

export type ParsedIdentity = {
  username: string;
  fullName: string;
  profileUrl: string | null;
};

const HANDLE_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const GITHUB_RESERVED = new Set([
  "about",
  "blog",
  "codespaces",
  "collections",
  "customer-stories",
  "enterprise",
  "events",
  "explore",
  "features",
  "gist",
  "issues",
  "login",
  "logout",
  "marketplace",
  "new",
  "notifications",
  "organizations",
  "orgs",
  "pricing",
  "pulls",
  "search",
  "security",
  "settings",
  "signup",
  "sponsors",
  "topics",
  "trending",
  "users",
]);

const X_RESERVED = new Set([
  "compose",
  "explore",
  "home",
  "i",
  "intent",
  "login",
  "logout",
  "messages",
  "notifications",
  "search",
  "settings",
  "share",
  "signup",
  "tos",
]);

function slugifyHandle(handle: string) {
  return handle
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleFromHandle(handle: string) {
  return handle
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function parseUrl(raw: string): URL | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  try {
    const url = new URL(trimmed.includes("://") ? trimmed : `https://${trimmed}`);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    url.search = "";
    url.hash = "";
    url.pathname = url.pathname.replace(/\/+$/, "") || "/";
    return url;
  } catch {
    return null;
  }
}

function hostOf(url: URL) {
  return url.hostname.replace(/^www\./i, "").toLowerCase();
}

function pathParts(url: URL) {
  return url.pathname.split("/").filter(Boolean);
}

function parsed(
  type: ProfilePlatform,
  handle: string,
  canonicalUrl: string,
): ParsedProfileUrl | null {
  const slug = slugifyHandle(handle);
  if (!slug || !HANDLE_SLUG.test(slug)) return null;
  const prefix =
    type === "GITHUB" ? "github" : type === "LINKEDIN" ? "linkedin" : type === "TWITTER" ? "x" : "web";
  const username = `${prefix}-${slug}`.slice(0, 48);
  if (!HANDLE_SLUG.test(username)) return null;
  return {
    type,
    handle: handle.toLowerCase(),
    canonicalUrl,
    username,
    fullName: titleFromHandle(handle),
  };
}

function parseGitHub(parts: string[]): ParsedProfileUrl | null {
  const handle = parts[0]?.replace(/^@/, "");
  if (!handle || parts.length !== 1) return null;
  if (GITHUB_RESERVED.has(handle.toLowerCase())) return null;
  if (!/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(handle)) return null;
  const lower = handle.toLowerCase();
  return parsed("GITHUB", lower, `https://github.com/${lower}`);
}

function parseLinkedIn(parts: string[]): ParsedProfileUrl | null {
  if (parts[0]?.toLowerCase() !== "in" || !parts[1] || parts.length > 3) return null;
  const handle = parts[1];
  if (!/^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,98}[a-zA-Z0-9])?$/.test(handle)) return null;
  const lower = handle.toLowerCase();
  return parsed("LINKEDIN", lower, `https://www.linkedin.com/in/${lower}`);
}

function parseX(parts: string[]): ParsedProfileUrl | null {
  const handle = parts[0]?.replace(/^@/, "");
  if (!handle || parts.length !== 1) return null;
  if (X_RESERVED.has(handle.toLowerCase())) return null;
  if (!/^[A-Za-z0-9_]{1,15}$/.test(handle)) return null;
  const lower = handle.toLowerCase();
  return parsed("TWITTER", lower, `https://x.com/${lower}`);
}

function parseWebsite(url: URL, host: string): ParsedProfileUrl | null {
  if (!/^[a-z0-9][a-z0-9.-]*\.[a-z]{2,}$/i.test(host)) return null;
  const firstPath = pathParts(url)[0];
  const handle = slugifyHandle(firstPath ? `${host}-${firstPath}` : host.replace(/\./g, "-"));
  if (!handle) return null;
  const path = url.pathname === "/" ? "" : url.pathname;
  return parsed("WEBSITE", handle, `https://${host}${path}`);
}

export function parseProfileUrl(raw: string): ParsedProfileUrl | null {
  const url = parseUrl(raw);
  if (!url) return null;
  const host = hostOf(url);
  const parts = pathParts(url);

  if (host === "github.com") return parseGitHub(parts);
  if (host === "linkedin.com" || host.endsWith(".linkedin.com")) return parseLinkedIn(parts);
  if (host === "x.com" || host === "twitter.com" || host === "mobile.twitter.com") {
    return parseX(parts);
  }
  return parseWebsite(url, host);
}

export function parseIdentity(raw: string): ParsedIdentity | null {
  const profile = parseProfileUrl(raw);
  if (!profile) return null;
  return {
    username: profile.username,
    fullName: profile.fullName,
    profileUrl: profile.canonicalUrl,
  };
}
