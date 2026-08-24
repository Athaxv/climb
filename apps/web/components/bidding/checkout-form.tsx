"use client";

import { formatUsdFromCents, MIN_NEW_SPOT_CENTS } from "@climb/ranking";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { BidStepper } from "@/components/bidding/bid-stepper";
import { InferConfirm } from "@/components/bidding/infer-confirm";
import { startCheckout } from "@/lib/start-checkout";
import { useProfileInfer } from "@/lib/use-profile-infer";

export function CheckoutForm({
  name,
  category,
  bid,
  canceled,
}: {
  name: string;
  category: string;
  bid: string;
  categories: { slug: string; name: string }[];
  canceled?: boolean;
}) {
  const router = useRouter();
  const submitRef = useRef<HTMLButtonElement>(null);
  const submitWasReady = useRef(false);
  const initialBid = Number.parseInt(bid, 10);
  const floor = MIN_NEW_SPOT_CENTS / 100;
  const [identity, setIdentity] = useState(name);
  const [targetBid, setTargetBid] = useState(
    Number.isFinite(initialBid) && initialBid > 0 ? initialBid : floor,
  );
  const [error, setError] = useState<string | null>(canceled ? "Checkout was canceled. You can try again." : null);
  const [pending, setPending] = useState(false);
  const { status, preview, setCategorySlug } = useProfileInfer(identity);
  const appliedHint = useRef(false);

  useEffect(() => {
    appliedHint.current = false;
  }, [identity]);

  useEffect(() => {
    if (!category || !preview || appliedHint.current) return;
    appliedHint.current = true;
    setCategorySlug(category);
  }, [category, preview, setCategorySlug]);

  const inferReady = status === "ready" || status === "error";
  const canSubmit = identity.trim().length >= 8 && inferReady && Boolean(preview?.categorySlug);
  const previewCents = useMemo(() => Math.max(MIN_NEW_SPOT_CENTS, targetBid * 100), [targetBid]);

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
      targetBid,
    });
    if (!result.ok) {
      setError(result.message);
      setPending(false);
      return;
    }
    router.push(result.url);
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 text-left">
      {error ? (
        <p className="mb-4 rounded-[var(--radius)] border border-border bg-card px-4 py-3 text-sm" role="alert">
          {error}
        </p>
      ) : null}
      <label className="block text-sm text-muted-foreground" htmlFor="create-identity">
        LinkedIn, GitHub, X, or website URL
      </label>
      <input
        id="create-identity"
        required
        type="text"
        inputMode="url"
        autoComplete="url"
        minLength={8}
        maxLength={500}
        value={identity}
        onChange={(event) => setIdentity(event.target.value)}
        placeholder="Paste LinkedIn, GitHub, X, or website URL"
        className="mt-1 h-11 w-full rounded-[var(--radius)] border border-input bg-card px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
      <div className="mt-2 min-h-5">
        <InferConfirm status={status} />
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground" id="create-bid-label">
        Target bid
      </p>
      <div className="mt-2">
        <BidStepper id="create-bid" value={targetBid} min={floor} onChange={setTargetBid} labelledBy="create-bid-label" />
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        The server sets the charge. Requested listing amount:{" "}
        <span className="font-semibold text-primary">{formatUsdFromCents(previewCents)}</span>
      </p>
      <button
        ref={submitRef}
        type="submit"
        disabled={!canSubmit || pending}
        className="mt-6 inline-flex h-11 w-full cursor-pointer items-center justify-center rounded-[var(--radius)] bg-primary px-5 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40"
      >
        {pending ? "Starting checkout…" : "Pay to claim"}
      </button>
    </form>
  );
}
