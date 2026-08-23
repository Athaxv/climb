"use client";

import { formatUsdFromCents, MIN_NEW_SPOT_CENTS } from "@climb/ranking";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export function CheckoutForm({
  name,
  category,
  bid,
  categories,
  canceled,
  sessionEmail,
}: {
  name: string;
  category: string;
  bid: string;
  categories: { slug: string; name: string }[];
  canceled?: boolean;
  sessionEmail?: string;
}) {
  const router = useRouter();
  const initialBid = Number.parseInt(bid, 10);
  const [identity, setIdentity] = useState(name);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [email, setEmail] = useState(sessionEmail ?? "");
  const [targetBid, setTargetBid] = useState(
    Number.isFinite(initialBid) && initialBid > 0 ? initialBid : MIN_NEW_SPOT_CENTS / 100,
  );
  const [error, setError] = useState<string | null>(canceled ? "Checkout was canceled. You can try again." : null);
  const [pending, setPending] = useState(false);

  const hasSessionEmail = Boolean(sessionEmail);
  const emailOk = hasSessionEmail || /.+@.+\..+/.test(email.trim());
  const canSubmit = identity.trim().length >= 3 && selectedCategory.length > 0 && emailOk;
  const previewCents = useMemo(() => Math.max(MIN_NEW_SPOT_CENTS, targetBid * 100), [targetBid]);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!canSubmit || pending) return;
    setPending(true);
    setError(null);
    try {
      const response = await fetch("/api/bids/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          identity: identity.trim(),
          category: selectedCategory,
          name: identity.trim(),
          targetBid,
          email: email.trim() || undefined,
        }),
      });
      const data = (await response.json()) as { url?: string; message?: string; error?: string };
      if (!response.ok || !data.url) {
        setError(
          data.error === "listing_taken"
            ? data.message || "This listing is already claimed. Use your own name or handle."
            : data.message || "Could not start checkout.",
        );
        setPending(false);
        return;
      }
      router.push(data.url);
    } catch {
      setError("Could not start checkout.");
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 text-left">
      {error ? (
        <p className="mb-4 rounded-[var(--radius)] border border-border bg-card px-4 py-3 text-sm">{error}</p>
      ) : null}
      <label className="block text-sm text-muted-foreground" htmlFor="create-identity">
        Your name or @handle
      </label>
      <input
        id="create-identity"
        required
        minLength={3}
        value={identity}
        onChange={(event) => setIdentity(event.target.value)}
        placeholder="Your name or @username"
        className="mt-1 h-11 w-full rounded-[var(--radius)] border border-input bg-card px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
      {hasSessionEmail ? null : (
        <>
          <label className="mt-4 block text-sm text-muted-foreground" htmlFor="create-email">
            Email
          </label>
          <input
            id="create-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="mt-1 h-11 w-full rounded-[var(--radius)] border border-input bg-card px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </>
      )}
      <label className="mt-4 block text-sm text-muted-foreground" htmlFor="create-category">
        Category
      </label>
      <select
        id="create-category"
        required
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
        className="mt-1 h-11 w-full cursor-pointer rounded-[var(--radius)] border border-input bg-card px-3 text-sm focus-visible:ring-2 focus-visible:ring-ring"
      >
        <option value="">Category</option>
        {categories.map((item) => (
          <option key={item.slug} value={item.slug}>
            {item.name}
          </option>
        ))}
      </select>
      <label className="mt-4 block text-sm text-muted-foreground" htmlFor="create-bid">
        Target bid
      </label>
      <div className="mt-1 flex h-11 items-center rounded-[var(--radius)] border border-input bg-card px-3">
        <span className="text-sm text-muted-foreground" aria-hidden>
          $
        </span>
        <input
          id="create-bid"
          inputMode="numeric"
          value={targetBid}
          onChange={(event) => {
            const next = Number.parseInt(event.target.value.replace(/\D/g, ""), 10);
            setTargetBid(Number.isNaN(next) ? MIN_NEW_SPOT_CENTS / 100 : next);
          }}
          className="h-full w-full bg-transparent pl-1 text-sm tabular-nums outline-none"
        />
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        The server sets the charge. Requested listing amount:{" "}
        <span className="font-semibold text-primary">{formatUsdFromCents(previewCents)}</span>
      </p>
      <button
        type="submit"
        disabled={!canSubmit || pending}
        className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-[var(--radius)] bg-primary px-5 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40"
      >
        {pending ? "Starting checkout…" : "Pay to claim"}
      </button>
    </form>
  );
}
