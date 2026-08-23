"use client";

import { calculateMinimumBidCents, formatUsdFromCents, MIN_NEW_SPOT_CENTS } from "@climb/ranking";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type CategoryOption = { slug: string; name: string };

export function ClaimWidget({
  topBid,
  topName,
  categories,
}: {
  topBid: number | null;
  topName?: string | null;
  categories: CategoryOption[];
}) {
  const router = useRouter();
  const takePrice = useMemo(() => {
    if (!topBid) return MIN_NEW_SPOT_CENTS / 100;
    return calculateMinimumBidCents(topBid) / 100;
  }, [topBid]);

  const [identity, setIdentity] = useState("");
  const [category, setCategory] = useState("");
  const [bid, setBid] = useState(takePrice);

  const canSubmit = identity.trim().length >= 3 && category.length > 0;

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!canSubmit) return;
    const params = new URLSearchParams({
      name: identity.trim(),
      category,
      bid: String(Math.max(MIN_NEW_SPOT_CENTS / 100, bid)),
    });
    router.push(`/create?${params.toString()}`);
  }

  return (
    <section className="mx-auto max-w-3xl px-4 text-center sm:px-6">
      <h1 className="text-[28px] leading-8 font-bold tracking-[-0.6px] text-foreground sm:text-[32px] sm:leading-10">
        Climb the leaderboard
      </h1>
      <p className="mt-2 text-sm tabular-nums text-muted-foreground sm:text-[15px]">
        {topBid ? (
          <>
            #1{topName ? ` ${topName}` : ""} is{" "}
            <span className="font-semibold text-primary">{formatUsdFromCents(topBid)}</span>
            {" · "}
            Take it for{" "}
            <span className="font-semibold text-primary">{formatUsdFromCents(takePrice * 100)}</span>
          </>
        ) : (
          <>
            The board is empty. New spots start at{" "}
            <span className="font-semibold text-primary">{formatUsdFromCents(MIN_NEW_SPOT_CENTS)}</span>
          </>
        )}
      </p>
      <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <label className="sr-only" htmlFor="identity">
          Your name or username
        </label>
        <input
          id="identity"
          required
          minLength={3}
          value={identity}
          onChange={(event) => setIdentity(event.target.value)}
          placeholder="Your name or @username"
          className="h-10 min-h-10 flex-1 rounded-[var(--radius)] border border-input bg-card px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
        />
        <label className="sr-only" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="h-10 min-h-10 min-w-40 cursor-pointer rounded-[var(--radius)] border border-input bg-card px-3 text-sm text-foreground focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Category</option>
          {categories.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
        <label className="sr-only" htmlFor="your-bid">
          Your bid in dollars
        </label>
        <div className="flex h-10 min-h-10 items-center rounded-[var(--radius)] border border-input bg-card px-3 sm:w-28">
          <span className="text-sm text-muted-foreground" aria-hidden>
            $
          </span>
          <input
            id="your-bid"
            inputMode="numeric"
            value={bid}
            onChange={(event) => {
              const next = Number.parseInt(event.target.value.replace(/\D/g, ""), 10);
              setBid(Number.isNaN(next) ? MIN_NEW_SPOT_CENTS / 100 : next);
            }}
            className="h-full w-full bg-transparent pl-1 text-sm tabular-nums outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={!canSubmit}
          className="h-10 min-h-10 cursor-pointer rounded-[var(--radius)] bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity duration-150 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Climb
        </button>
      </form>
      <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
        New spots from {formatUsdFromCents(MIN_NEW_SPOT_CENTS)}. A lower bid still lands at the rank it can
        buy.
      </p>
    </section>
  );
}
