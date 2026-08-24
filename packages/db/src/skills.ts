const ALIASES: Record<string, string> = {
  reactjs: "react",
  "react.js": "react",
  nextjs: "next-js",
  "next.js": "next-js",
  nodejs: "node-js",
  "node.js": "node-js",
  golang: "go",
  k8s: "kubernetes",
  postgres: "postgresql",
  tf: "tensorflow",
  pytorch: "pytorch",
  llms: "llms",
  llm: "llms",
};

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => (part === "js" ? "JS" : part.slice(0, 1).toUpperCase() + part.slice(1)))
    .join(" ");
}

export function skillSlug(raw: string) {
  const trimmed = raw.trim().toLowerCase().replace(/\.js$/i, "js");
  const aliased = ALIASES[trimmed] ?? trimmed;
  return aliased
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
}

export function normalizeSkill(raw: string): { name: string; slug: string } | null {
  const slug = skillSlug(raw);
  if (slug.length < 2) return null;
  const display = raw.trim();
  const name =
    display.length >= 2 && display === display.toUpperCase() && display.length <= 5
      ? display
      : titleFromSlug(slug);
  return { name, slug };
}

export function parseSkillList(raw: string | string[] | undefined | null): { name: string; slug: string }[] {
  const parts = Array.isArray(raw)
    ? raw
    : (raw ?? "")
        .split(/[,;]+/)
        .map((part) => part.trim())
        .filter(Boolean);
  const seen = new Set<string>();
  const skills: { name: string; slug: string }[] = [];
  for (const part of parts.slice(0, 12)) {
    const skill = normalizeSkill(part);
    if (!skill || seen.has(skill.slug)) continue;
    seen.add(skill.slug);
    skills.push(skill);
  }
  return skills;
}
