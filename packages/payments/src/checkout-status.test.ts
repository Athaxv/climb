import { describe, expect, it } from "vitest";
import { checkoutLooksFailed, checkoutLooksPaid } from "./checkout-status";

describe("checkoutLooksFailed", () => {
  it("treats cancelled and unpaid sessions as failed", () => {
    expect(checkoutLooksFailed("cancelled")).toBe(true);
    expect(checkoutLooksFailed("unpaid")).toBe(true);
    expect(checkoutLooksFailed("succeeded")).toBe(false);
  });
});

describe("checkoutLooksPaid", () => {
  it("treats succeeded and unknown return statuses as paid", () => {
    expect(checkoutLooksPaid("succeeded")).toBe(true);
    expect(checkoutLooksPaid("paid")).toBe(true);
    expect(checkoutLooksPaid("unknown")).toBe(true);
    expect(checkoutLooksPaid("")).toBe(true);
  });

  it("does not treat pending or failed as paid", () => {
    expect(checkoutLooksPaid("pending")).toBe(false);
    expect(checkoutLooksPaid("processing")).toBe(false);
    expect(checkoutLooksPaid("requires_payment_method")).toBe(false);
    expect(checkoutLooksPaid("failed")).toBe(false);
  });
});
