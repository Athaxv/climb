import { describe, expect, it } from "vitest";
import { claimThenFulfill, runInMemoryTransaction } from "./idempotency";

class UniqueError extends Error {
  constructor() {
    super("unique");
    this.name = "UniqueError";
  }
}

describe("webhook claim idempotency", () => {
  it("returns duplicate when the webhook-id was already inserted", async () => {
    const eventIds = new Set(["evt_1"]);
    const result = await claimThenFulfill({
      insertClaim: async () => {
        if (eventIds.has("evt_1")) throw new UniqueError();
        eventIds.add("evt_1");
      },
      isDuplicate: (error) => error instanceof UniqueError,
      fulfill: async () => "applied",
    });
    expect(result).toEqual({ duplicate: true });
  });

  it("does not leave a claim behind when fulfillment throws inside a transaction", async () => {
    const state = { eventIds: new Set<string>() };
    await expect(
      runInMemoryTransaction(state, async () =>
        claimThenFulfill({
          insertClaim: async () => {
            state.eventIds.add("evt_crash");
          },
          isDuplicate: () => false,
          fulfill: async () => {
            throw new Error("fulfillment failed");
          },
        }),
      ),
    ).rejects.toThrow("fulfillment failed");
    expect(state.eventIds.size).toBe(0);
  });

  it("keeps the claim after a successful fulfill", async () => {
    const state = { eventIds: new Set<string>() };
    const result = await runInMemoryTransaction(state, async () =>
      claimThenFulfill({
        insertClaim: async () => {
          state.eventIds.add("evt_ok");
        },
        isDuplicate: () => false,
        fulfill: async () => "ok",
      }),
    );
    expect(result).toEqual({ duplicate: false, result: "ok" });
    expect(state.eventIds.has("evt_ok")).toBe(true);
  });
});
