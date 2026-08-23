export type ParsedIdentity = {
  username: string;
  fullName: string;
  profileUrl: string | null;
};

const HANDLE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/https?:\/\//g, "")
    .replace(/^www\./, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 30);
}

function titleFromUsername(username: string) {
  return username
    .split("-")
    .filter(Boolean)
    .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
    .join(" ");
}

function normalizeUrl(raw: string): string | null {
  try {
    const url = new URL(raw.includes("://") ? raw : `https://${raw}`);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    url.search = "";
    url.hash = "";
    return url.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}

export function parseIdentity(raw: string): ParsedIdentity | null {
  const trimmed = raw.trim();
  if (trimmed.length < 3) return null;

  if (trimmed.startsWith("@")) {
    const username = slugify(trimmed.slice(1));
    if (username.length < 3 || !HANDLE.test(username)) return null;
    return { username, fullName: titleFromUsername(username), profileUrl: null };
  }

  const looksLikeUrl =
    /^https?:\/\//i.test(trimmed) ||
    /^[a-z0-9.-]+\.[a-z]{2,}([/:].*)?$/i.test(trimmed) ||
    /^(x\.com|twitter\.com|github\.com|linkedin\.com)\//i.test(trimmed);

  if (looksLikeUrl) {
    const profileUrl = normalizeUrl(trimmed);
    if (!profileUrl) return null;
    const url = new URL(profileUrl);
    const host = url.hostname.replace(/^www\./, "");
    const parts = url.pathname.split("/").filter(Boolean);
    let username = "";
    if (
      (host === "x.com" || host === "twitter.com" || host === "github.com") &&
      parts[0]
    ) {
      username = slugify(parts[0]);
    } else {
      username = slugify(host.replace(/\./g, "-"));
    }
    if (username.length < 3 || !HANDLE.test(username)) return null;
    return { username, fullName: titleFromUsername(username), profileUrl };
  }

  const username = slugify(trimmed);
  if (username.length < 3 || !HANDLE.test(username)) return null;
  const fullName = /[ A-Z]/.test(trimmed) ? trimmed.slice(0, 80) : titleFromUsername(username);
  return { username, fullName, profileUrl: null };
}
