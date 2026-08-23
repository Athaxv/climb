import { describe, expect, it } from "vitest";
import { isUsableDodoApiKey, isUsableDodoProductId } from "./client";

describe("Dodo env guards", () => {
  it("rejects example placeholders", () => {
    expect(isUsableDodoApiKey("dodo_test_...")).toBe(false);
    expect(isUsableDodoApiKey("short")).toBe(false);
    expect(isUsableDodoApiKey("not-a-dodo-prefix.with-dots_and-hyphens")).toBe(true);
    expect(isUsableDodoProductId("pdt_...")).toBe(false);
    expect(isUsableDodoApiKey(undefined)).toBe(false);
  });

  it("accepts real-looking test credentials", () => {
    expect(isUsableDodoApiKey("dodo_test_abc123XYZ")).toBe(true);
    expect(isUsableDodoProductId("pdt_abc123")).toBe(true);
  });
});
