import type { Metadata } from "next";
import Link from "next/link";
import { ClimbLogo } from "@/components/brand/climb-logo";

export const metadata: Metadata = {
  title: "About",
  description: "Climb is a public leaderboard where people compete for visibility.",
};

export default function AboutPage() {
  return (
    <main id="main" className="climb-enter mx-auto w-full max-w-2xl px-4 pb-16 sm:px-6">
      <div className="flex items-center gap-3">
        <ClimbLogo variant="mark" className="size-8 shrink-0" />
        <h1 className="text-3xl font-bold tracking-tight">About Climb</h1>
      </div>
      <div className="mt-6 space-y-4 text-[17px] leading-7 text-muted-foreground">
        <p className="text-foreground">Who deserves the top spot?</p>
        <p>
          Climb is a public leaderboard for people. You create a profile, attach the places you already exist —
          LinkedIn, GitHub, X, a site — pick a category, and bid for rank.
        </p>
        <p>
          Higher valid bid, higher seat. The board is the product. It is not a social network, and it is not a
          professional directory.
        </p>
        <p>
          Read the <Link href="/rules" className="text-primary">rules</Link> or{" "}
          <Link href="/create" className="text-primary">claim a spot</Link>.
        </p>
      </div>
    </main>
  );
}
