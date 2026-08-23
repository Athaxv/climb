/**
 * Claim a webhook delivery, then fulfill. Call this *inside* the same database
 * transaction as the bid/payment/person writes so a crash rolls the claim back.
 */
export async function claimThenFulfill<T>(opts: {
  insertClaim: () => Promise<void>;
  isDuplicate: (error: unknown) => boolean;
  fulfill: () => Promise<T>;
}): Promise<{ duplicate: true } | { duplicate: false; result: T }> {
  try {
    await opts.insertClaim();
  } catch (error) {
    if (opts.isDuplicate(error)) return { duplicate: true };
    throw error;
  }
  const result = await opts.fulfill();
  return { duplicate: false, result };
}

export async function runInMemoryTransaction<T>(
  state: { eventIds: Set<string> },
  fn: () => Promise<T>,
): Promise<T> {
  const snapshot = new Set(state.eventIds);
  try {
    return await fn();
  } catch (error) {
    state.eventIds = snapshot;
    throw error;
  }
}
