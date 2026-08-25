export type MoneyInput = string | number;

/** Whole-dollar increment to beat a seat. */
export const MIN_INCREMENT_CENTS = 100;

/** Floor for a brand-new listing. */
export const MIN_NEW_SPOT_CENTS = 100;

export const LEADERBOARD_CACHE_TTL_SECONDS = 20;

export const LEADERBOARD_PAGE_SIZE = 25;

/** Public board membership. A SocialLink alone does not list a Person. */
export function isLiveOnLeaderboard(currentBidCents: number): boolean {
  return currentBidCents > 0;
}

/**
 * A successfully completed listing payment must leave the Person on the public
 * board at the paid target (or higher, if merged onto an already-listed owner).
 */
export function completedPaymentActivatesListing(input: {
  bidStatus: "PENDING" | "COMPLETED" | "FAILED" | "EXPIRED" | "REFUNDED";
  currentBidCents: number;
  targetBidCents: number;
}): boolean {
  if (input.bidStatus !== "COMPLETED") return true;
  return input.currentBidCents > 0 && input.currentBidCents >= input.targetBidCents;
}

export function moneyToCents(value: MoneyInput): number {
  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      throw new Error("Invalid money value");
    }
    return Math.round(value * 100);
  }

  const trimmed = value.trim();
  if (!/^-?\d+(\.\d{1,2})?$/.test(trimmed)) {
    throw new Error(`Invalid money string: ${value}`);
  }

  const negative = trimmed.startsWith("-");
  const [wholeRaw, fractionRaw = ""] = trimmed.replace("-", "").split(".");
  const whole = Number.parseInt(wholeRaw, 10);
  const fraction = Number.parseInt(fractionRaw.padEnd(2, "0").slice(0, 2) || "0", 10);
  const cents = whole * 100 + fraction;
  return negative ? -cents : cents;
}

export function centsToMoney(cents: number): string {
  const negative = cents < 0;
  const abs = Math.abs(cents);
  const whole = Math.floor(abs / 100);
  const fraction = String(abs % 100).padStart(2, "0");
  return `${negative ? "-" : ""}${whole}.${fraction}`;
}

export function formatUsd(value: MoneyInput): string {
  const cents = moneyToCents(value);
  return formatUsdFromCents(cents);
}

export function formatUsdFromCents(cents: number): string {
  const amount = cents / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateMinimumBidCents(occupantBidCents: number): number {
  return occupantBidCents + MIN_INCREMENT_CENTS;
}

export function calculateMinimumBid(targetBid: MoneyInput): string {
  return centsToMoney(calculateMinimumBidCents(moneyToCents(targetBid)));
}

export function isValidBid(requested: MoneyInput, minimum: MoneyInput): boolean {
  return moneyToCents(requested) >= moneyToCents(minimum);
}

export function minimumTargetCents(currentBidCents: number): number {
  if (currentBidCents <= 0) return MIN_NEW_SPOT_CENTS;
  return currentBidCents + MIN_INCREMENT_CENTS;
}

export type CheckoutQuote =
  | { ok: true; targetBidCents: number; chargeAmountCents: number }
  | { ok: false; error: "bid_too_low" };

export function quoteCheckout(input: {
  currentBidCents: number;
  requestedTargetCents?: number;
}): CheckoutQuote {
  const minTarget = minimumTargetCents(input.currentBidCents);
  const target = input.requestedTargetCents ?? minTarget;
  if (!Number.isInteger(target) || target < minTarget) {
    return { ok: false, error: "bid_too_low" };
  }
  return {
    ok: true,
    targetBidCents: target,
    chargeAmountCents: target - Math.max(0, input.currentBidCents),
  };
}

export type ApplyBidDecision =
  | { ok: true; newBidCents: number; kind: "joined" | "raised" }
  | { ok: false; reason: "stale" };

export function decideSuccessfulBid(input: {
  currentBidCents: number;
  targetBidCents: number;
}): ApplyBidDecision {
  if (input.currentBidCents >= input.targetBidCents) {
    return { ok: false, reason: "stale" };
  }
  return {
    ok: true,
    newBidCents: input.targetBidCents,
    kind: input.currentBidCents <= 0 ? "joined" : "raised",
  };
}

export type Rankable = {
  id: string;
  currentBidCents: number;
  currentBidAt: Date;
};

export type Ranked<T extends Rankable> = T & { rank: number };

/** Sort comparator: higher rank first (lower rank number). */
export function compareRank(a: Rankable, b: Rankable): number {
  const bidDelta = b.currentBidCents - a.currentBidCents;
  if (bidDelta !== 0) return bidDelta;
  const timeDelta = a.currentBidAt.getTime() - b.currentBidAt.getTime();
  if (timeDelta !== 0) return timeDelta;
  if (a.id === b.id) return 0;
  return a.id < b.id ? -1 : 1;
}

/**
 * Rank is derived: currentBid DESC, then earlier currentBidAt, then id ASC.
 */
export function assignRanks<T extends Rankable>(people: T[]): Ranked<T>[] {
  const sorted = [...people].sort(compareRank);
  return sorted.map((person, index) => ({ ...person, rank: index + 1 }));
}

export function minBidToTakeRank(occupantBid: MoneyInput): string {
  return calculateMinimumBid(occupantBid);
}

export const BOARD_HERO_CACHE_KEY = "leaderboard:hero";

export function leaderboardCacheKey(
  categorySlug?: string | null,
  page = 1,
  pageSize = LEADERBOARD_PAGE_SIZE,
) {
  const base = categorySlug ? `leaderboard:category:${categorySlug}` : "leaderboard:global";
  return `${base}:p${page}:s${pageSize}`;
}

export function profileCacheKey(username: string) {
  return `profile:${username}`;
}

export function cacheKeysForBid(username: string, categorySlug?: string | null) {
  const keys = [
    leaderboardCacheKey(null),
    BOARD_HERO_CACHE_KEY,
    profileCacheKey(username),
  ];
  if (categorySlug) keys.splice(1, 0, leaderboardCacheKey(categorySlug));
  return keys;
}

export type TrendingInputs = {
  recentViews: number;
  bidGrowth: number;
  rankImprovement: number;
};

function minMaxNormalize(values: number[]): number[] {
  if (values.length === 0) return [];
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (max === min) {
    return values.map(() => (max === 0 ? 0 : 1));
  }
  return values.map((value) => (value - min) / (max - min));
}

/**
 * Momentum score. Weights are isolated here so they can change later.
 * A huge bid does not dominate: bidGrowth is normalized across the cohort.
 */
export function calculateTrendingScores(inputs: TrendingInputs[]): number[] {
  const views = minMaxNormalize(inputs.map((item) => Math.log1p(Math.max(0, item.recentViews))));
  const growth = minMaxNormalize(inputs.map((item) => Math.log1p(Math.max(0, item.bidGrowth))));
  const ranks = minMaxNormalize(inputs.map((item) => Math.max(0, item.rankImprovement)));

  return inputs.map((_, index) => {
    return views[index] * 0.4 + growth[index] * 0.4 + ranks[index] * 0.2;
  });
}

export function calculateTrendingScore(
  input: TrendingInputs,
  cohort: TrendingInputs[],
): number {
  const index = cohort.indexOf(input);
  const scores = calculateTrendingScores(cohort);
  if (index === -1) {
    return calculateTrendingScores([...cohort, input]).at(-1) ?? 0;
  }
  return scores[index] ?? 0;
}

export { parseIdentity, parseProfileUrl } from "./identity";
export type { ParsedIdentity, ParsedProfileUrl, ProfilePlatform } from "./identity";
