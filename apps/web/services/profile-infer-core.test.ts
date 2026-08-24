import { parseProfileUrl } from "@climb/ranking";
import { describe, expect, it } from "vitest";
import {
  extractHtmlSignals,
  heuristicCategory,
  heuristicInfer,
  mergeClassification,
  parseGroqClassification,
  sanitizeHttpUrl,
} from "./profile-infer-core";

describe("profile inference", () => {
  it("maps GitHub to engineering and X to creators", () => {
    expect(heuristicCategory("GITHUB")).toBe("engineering");
    expect(heuristicCategory("TWITTER")).toBe("creators");
    expect(heuristicCategory("LINKEDIN")).toBe("other");
    expect(heuristicCategory("WEBSITE")).toBe("other");
  });

  it("uses handle name when GitHub signals are empty (key unset fallback)", () => {
    const parsed = parseProfileUrl("https://github.com/octocat");
    expect(parsed).not.toBeNull();
    const inferred = heuristicInfer(parsed!);
    expect(inferred.categorySlug).toBe("engineering");
    expect(inferred.source).toBe("heuristic");
    expect(inferred.fullName).toBe("Octocat");
    expect(inferred.skills).toEqual([]);
  });

  it("parses Groq JSON and rejects invalid payloads", () => {
    const groq = parseGroqClassification(
      JSON.stringify({
        fullName: "Maya Chen",
        headline: "Staff engineer",
        categorySlug: "engineering",
        skills: ["TypeScript", "React", 12],
      }),
    );
    expect(groq).toMatchObject({
      fullName: "Maya Chen",
      categorySlug: "engineering",
      skills: ["TypeScript", "React"],
    });
    expect(parseGroqClassification("not-json")).toBeNull();
  });

  it("falls back off an unknown Groq category slug", () => {
    const parsed = parseProfileUrl("https://github.com/octocat")!;
    const merged = mergeClassification(
      parsed,
      {
        platform: "GITHUB",
        handle: "octocat",
        canonicalUrl: parsed.canonicalUrl,
        topics: ["TypeScript"],
        imageUrl: "https://avatars.githubusercontent.com/u/1?v=4",
        bio: "Builds ranking systems",
        location: "San Francisco",
      },
      { categorySlug: "not-a-board", fullName: "Octo Cat", skills: ["Go"] },
    );
    expect(merged.categorySlug).toBe("engineering");
    expect(merged.fullName).toBe("Octo Cat");
    expect(merged.skills).toContain("Go");
    expect(merged.imageUrl).toBe("https://avatars.githubusercontent.com/u/1?v=4");
    expect(merged.bio).toBe("Builds ranking systems");
    expect(merged.location).toBe("San Francisco");
    expect(merged.source).toBe("groq");
  });

  it("keeps only http(s) image URLs", () => {
    expect(sanitizeHttpUrl("https://avatars.githubusercontent.com/u/1?v=4")).toBe(
      "https://avatars.githubusercontent.com/u/1?v=4",
    );
    expect(sanitizeHttpUrl("//cdn.example.com/me.png")).toBe("https://cdn.example.com/me.png");
    expect(sanitizeHttpUrl("/me.png", "https://example.com/p/maya")).toBe("https://example.com/me.png");
    expect(sanitizeHttpUrl("javascript:alert(1)")).toBeUndefined();
    expect(sanitizeHttpUrl("data:image/png;base64,abc")).toBeUndefined();
  });

  it("reads Open Graph tags from a public HTML fixture", () => {
    const html = `
      <meta property="og:title" content="Maya Chen | Engineer" />
      <meta name="og:description" content="Building ranking systems in TypeScript" />
      <meta property="og:image" content="https://cdn.example.com/maya.jpg" />
      <script type="application/ld+json">{"name":"Maya Chen","jobTitle":"Staff Engineer","image":{"url":"https://cdn.example.com/maya-ld.jpg"},"knowsAbout":["TypeScript","Postgres"]}</script>
    `;
    const signals = extractHtmlSignals(html, "https://example.com");
    expect(signals.name).toBe("Maya Chen");
    expect(signals.headline).toBe("Staff Engineer");
    expect(signals.imageUrl).toBe("https://cdn.example.com/maya.jpg");
    expect(signals.topics).toEqual(["TypeScript", "Postgres"]);
  });
});
