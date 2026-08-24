import { describe, expect, it } from "vitest";
import { isUsableDodoApiKey, isUsableDodoProductId, isUsableDodoWebhookKey } from "./client";

describe("Dodo env guards", () => {
  it("rejects example placeholders", () => {
    expect(isUsableDodoApiKey("dodo_test_...")).toBe(false);
    expect(isUsableDodoWebhookKey("whsec_...")).toBe(false);
    expect(isUsableDodoWebhookKey(undefined)).toBe(false);
    expect(isUsableDodoApiKey("short")).toBe(false);
    expect(isUsableDodoApiKey("not-a-dodo-prefix.with-dots_and-hyphens")).toBe(true);
    expect(isUsableDodoProductId("pdt_...")).toBe(false);
    expect(isUsableDodoApiKey(undefined)).toBe(false);
  });

  it("accepts real-looking test credentials", () => {
    expect(isUsableDodoApiKey("dodo_test_abc123XYZ00")).toBe(true);
    expect(isUsableDodoProductId("pdt_abc123")).toBe(true);
    expect(isUsableDodoWebhookKey("whsec_abcdefghijklmnopqrstuvwxyz")).toBe(true);
  });
});
