"use client";

import { useFocusClaim } from "@/components/bidding/claim-intent";

export function ChallengePositionButton({
  category,
  bid,
}: {
  category: string;
  bid: number;
}) {
  const focusClaim = useFocusClaim();
  return (
    <button
      type="button"
      onClick={() => focusClaim({ category, bid })}
      className="mt-4 inline-flex h-11 min-h-11 cursor-pointer items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
    >
      Challenge position
    </button>
  );
}
