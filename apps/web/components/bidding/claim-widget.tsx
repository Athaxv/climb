"use client";

import { calculateMinimumBidCents, formatUsdFromCents, MIN_NEW_SPOT_CENTS } from "@climb/ranking";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BidStepper } from "@/components/bidding/bid-stepper";
import {
  CLIMB_CLAIM_ID,
  type ClaimIntent,
  useSubscribeClaimIntent,
} from "@/components/bidding/claim-intent";
import { InferConfirm } from "@/components/bidding/infer-confirm";
import { cn } from "@/lib/utils";
import { prefersReducedMotion, scrollToClaim } from "@/lib/claim-scroll";
import { startCheckout } from "@/lib/start-checkout";
import { useProfileInfer } from "@/lib/use-profile-infer";

type CategoryOption = { slug: string; name: string };

type ClaimWidgetProps = {
  topBid: number | null;
  topName?: string | null;
  peopleCount?: number;
  visitors?: number;
  categories: CategoryOption[];
};

export function ClaimWidget(props: ClaimWidgetProps) {
  return (
    <Suspense fallback={<ClaimBar {...props} urlIntent={null} />}>
      <ClaimWidgetFromUrl {...props} />
    </Suspense>
  );
}

function ClaimWidgetFromUrl(props: ClaimWidgetProps) {
  const params = useSearchParams();
  const category = params.get("category") ?? "";
  const bidParam = params.get("bid") ?? "";
  const urlIntent = useMemo<ClaimIntent | null>(() => {
    const bidRaw = Number.parseInt(bidParam, 10);
    if (!category && !(Number.isFinite(bidRaw) && bidRaw > 0)) return null;
    return {
      category,
      bid: Number.isFinite(bidRaw) && bidRaw > 0 ? bidRaw : MIN_NEW_SPOT_CENTS / 100,
    };
  }, [category, bidParam]);
  return <ClaimBar {...props} urlIntent={urlIntent} />;
}

function ClaimBar({
  topBid,
  topName,
  peopleCount = 0,
  visitors = 0,
  urlIntent,
}: ClaimWidgetProps & { urlIntent: ClaimIntent | null }) {
  const router = useRouter();
  const subscribe = useSubscribeClaimIntent();
  const sectionRef = useRef<HTMLElement>(null);
  const identityRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const submitWasReady = useRef(false);
  const takePrice = useMemo(() => {
    if (!topBid) return MIN_NEW_SPOT_CENTS / 100;
    return calculateMinimumBidCents(topBid) / 100;
  }, [topBid]);
  const floor = MIN_NEW_SPOT_CENTS / 100;

  const [identity, setIdentity] = useState("");
  const [bid, setBid] = useState(urlIntent?.bid && urlIntent.bid > 0 ? urlIntent.bid : floor);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [highlighted, setHighlighted] = useState(Boolean(urlIntent));
  const { status, preview } = useProfileInfer(identity);

  const inferReady = status === "ready" || status === "error";
  const canSubmit = identity.trim().length >= 8 && inferReady && Boolean(preview?.categorySlug);

  const appliedUrlRef = useRef(false);

  const applyIntent = useCallback((intent: ClaimIntent) => {
    const nextBid = intent.bid > 0 ? Math.max(floor, intent.bid) : floor;
    setBid(nextBid);
    setError(null);
    setHighlighted(true);
    const node = sectionRef.current;
    if (node) scrollToClaim(node);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("bid", String(nextBid));
      url.hash = CLIMB_CLAIM_ID;
      window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    }
    window.setTimeout(() => identityRef.current?.focus(), prefersReducedMotion() ? 0 : 200);
  }, [floor]);

  useEffect(() => {
    return subscribe(applyIntent);
  }, [subscribe, applyIntent]);

  useEffect(() => {
    if (!urlIntent || appliedUrlRef.current) return;
    appliedUrlRef.current = true;
    applyIntent(urlIntent);
  }, [urlIntent, applyIntent]);

  useEffect(() => {
    if (!highlighted) return;
    const timeout = window.setTimeout(() => setHighlighted(false), 200);
    return () => window.clearTimeout(timeout);
  }, [highlighted]);

  useEffect(() => {
    if (canSubmit && !submitWasReady.current) {
      submitRef.current?.focus();
    }
    submitWasReady.current = canSubmit;
  }, [canSubmit]);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!canSubmit || pending || !preview) return;
    setPending(true);
    setError(null);
    const result = await startCheckout({
      identity: identity.trim(),
      category: preview.categorySlug,
      name: preview.fullName || undefined,
      headline: preview.headline || undefined,
      skills: preview.skills.join(", ") || undefined,
      imageUrl: preview.imageUrl,
      bio: preview.bio,
      location: preview.location,
      targetBid: Math.max(MIN_NEW_SPOT_CENTS / 100, bid),
    });
    if (!result.ok) {
      setError(result.message);
      setPending(false);
      return;
    }
    router.push(result.url);
  }

  return (
    <section
      ref={sectionRef}
      id={CLIMB_CLAIM_ID}
      className={cn(
        "mx-auto max-w-4xl scroll-mt-4 px-4 text-center sm:px-6",
        "rounded-[var(--radius)] transition-[box-shadow] duration-200",
        highlighted && "ring-2 ring-ring",
      )}
    >
      <p className="mx-auto inline-flex max-w-full flex-wrap items-center justify-center gap-x-1.5 rounded-full bg-muted/80 px-3 py-1 text-xs tabular-nums text-muted-foreground">
        <span className="relative inline-flex size-1.5 shrink-0" aria-hidden>
          <span className="live-pulse-ring absolute inset-0 rounded-full bg-live" />
          <span className="relative size-1.5 rounded-full bg-live" />
        </span>
        {peopleCount > 0 ? (
          <span className="text-live">
            {peopleCount.toLocaleString()} on the board
          </span>
        ) : (
          <span>Board is open</span>
        )}
        <span aria-hidden>·</span>
        <span>
          {visitors.toLocaleString()} {visitors === 1 ? "visitor" : "visitors"} since launch
        </span>
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Climb the leaderboard
      </h1>
      <p className="mt-3 text-sm tabular-nums text-muted-foreground">
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
      {error ? (
        <p className="mt-3 rounded-[var(--radius)] border border-border bg-card px-4 py-3 text-left text-sm" role="alert">
          {error}
        </p>
      ) : null}
      <form onSubmit={onSubmit} className="mt-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <label className="sr-only" htmlFor="identity">
            LinkedIn, GitHub, X, or website URL
          </label>
          <input
            ref={identityRef}
            id="identity"
            required
            type="text"
            inputMode="url"
            autoComplete="url"
            minLength={8}
            maxLength={500}
            value={identity}
            onChange={(event) => setIdentity(event.target.value)}
            placeholder="Paste LinkedIn, GitHub, X, or website URL"
            className="h-11 min-h-11 min-w-0 flex-1 rounded-[var(--radius)] border border-input bg-card px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
          />
          <BidStepper id="your-bid" value={bid} min={floor} onChange={setBid} />
          <button
            ref={submitRef}
            type="submit"
            disabled={!canSubmit || pending}
            className="h-11 min-h-11 shrink-0 cursor-pointer rounded-[var(--radius)] bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity duration-150 disabled:cursor-not-allowed disabled:opacity-40 sm:px-6"
          >
            {pending ? "Starting…" : "Climb"}
          </button>
        </div>
        <div className="mt-2">
          <InferConfirm status={status} />
        </div>
      </form>
      <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
        New spots from {formatUsdFromCents(MIN_NEW_SPOT_CENTS)}. A lower bid still lands at the rank it can
        buy.
      </p>
    </section>
  );
}
