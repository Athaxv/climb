import { MIN_NEW_SPOT_CENTS, centsToMoney } from "@climb/ranking";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rules",
  description: "How ranking and bidding work on Climb.",
};

export default function RulesPage() {
  const floor = centsToMoney(MIN_NEW_SPOT_CENTS);

  return (
    <main id="main" className="mx-auto w-full max-w-2xl px-4 pb-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Rules</h1>
      <div className="mt-6 space-y-4 text-[17px] leading-7 text-muted-foreground">
        <p className="text-foreground">Rank is the bid. Nothing else.</p>
        <p>
          People are ranked by <span className="text-foreground">current bid</span>, highest first. If two people
          hold the same bid, the earlier successful bid keeps the higher seat.
        </p>
        <p>
          To take a seat you must reach <span className="text-foreground">$1 more</span> than the person currently
          in that seat. New listings start at ${Number.parseInt(floor, 10)}. Paying less than #1 still places you
          wherever that amount can reach.
        </p>
        <p>
          You pay the difference between your current bid and the new bid. There are no extra platform fees on top
          of that amount. Payments are confirmed on the server — a browser saying “paid” does not move the board.
        </p>
        <p>
          Anyone can browse. Paste a LinkedIn, GitHub, X, or website URL and pay to join or raise that listing.
          Rank only moves after payment is confirmed.
        </p>
      </div>
    </main>
  );
}
