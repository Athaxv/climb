"use client";

import { useState } from "react";

export function ShareRankButton({ username, rank }: { username: string; rank: number }) {
  const [copied, setCopied] = useState(false);
  const shareUrl =
    typeof window === "undefined"
      ? `/p/${username}`
      : `${window.location.origin}/p/${username}`;
  const text = rank > 0 ? `I am #${rank} on Climb` : `Find me on Climb`;

  async function onShare() {
    try {
      if (navigator.share) {
        await navigator.share({ title: "Climb", text, url: shareUrl });
        return;
      }
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    }
    await fetch("/api/analytics/share", { method: "POST" }).catch(() => undefined);
  }

  return (
    <button
      type="button"
      onClick={onShare}
      className="mt-4 inline-flex h-11 items-center rounded-full border border-border px-5 text-sm font-semibold hover:border-primary/40"
    >
      {copied ? "Link copied" : "Share your rank"}
    </button>
  );
}
