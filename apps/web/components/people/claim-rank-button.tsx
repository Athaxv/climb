"use client";

import { useFocusClaim } from "@/components/bidding/claim-intent";

export function ClaimRankButton({
  category,
  bidDollars,
  label,
}: {
  category: string;
  bidDollars: number;
  label: string;
}) {
  const focusClaim = useFocusClaim();
  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        focusClaim({ category, bid: bidDollars });
      }}
      className="pointer-events-none absolute top-0 left-1/2 z-10 min-h-9 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-primary px-3 py-1.5 text-xs font-bold whitespace-nowrap text-primary-foreground opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring"
    >
      {label}
    </button>
  );
}
