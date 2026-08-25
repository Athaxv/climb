import { CATEGORIES } from "@climb/db";
import { Suspense } from "react";
import { ClaimWidget } from "@/components/bidding/claim-widget";
import { ClimbAtmosphere } from "@/components/home/climb-atmosphere";
import { WhyClimb } from "@/components/home/why-climb";
import { CategoryChips } from "@/components/leaderboard/category-chips";
import { FindRank } from "@/components/leaderboard/find-rank";
import { getCachedBoardHero } from "@/services/leaderboard.service";

export const revalidate = 20;

const chipCategories = CATEGORIES.map((category) => ({ slug: category.slug, name: category.name }));

function ClimbHeroFallback() {
  return (
    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6" aria-hidden>
      <div className="mx-auto h-6 w-56 animate-pulse rounded-full bg-muted" />
      <div className="mx-auto mt-4 h-10 w-72 max-w-full animate-pulse rounded-md bg-muted" />
      <div className="mx-auto mt-3 h-5 w-64 max-w-full animate-pulse rounded-md bg-muted" />
      <div className="mx-auto mt-6 h-11 w-full max-w-xl animate-pulse rounded-[var(--radius)] bg-muted" />
    </div>
  );
}

async function ClimbHero() {
  const hero = await getCachedBoardHero();
  return (
    <ClaimWidget
      topBid={hero.topBid}
      topName={hero.topName}
      peopleCount={hero.people}
      visitors={hero.visitors}
      categories={chipCategories}
    />
  );
}

export default function ClimbLayout({ children }: LayoutProps<"/climb">) {
  return (
    <main id="main" className="relative isolate pt-8 pb-20 sm:pt-10 sm:pb-28">
      <ClimbAtmosphere />
      <Suspense fallback={<ClimbHeroFallback />}>
        <ClimbHero />
      </Suspense>
      <WhyClimb />
      <div className="mt-8 min-w-0">
        <CategoryChips categories={chipCategories} />
      </div>
      <div className="mt-4">
        <FindRank />
      </div>
      {children}
    </main>
  );
}
