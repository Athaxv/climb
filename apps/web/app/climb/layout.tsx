import { getCategories, getLeaderboard, getSiteStats } from "@climb/db";
import { ClaimWidget } from "@/components/bidding/claim-widget";
import { WhyClimb } from "@/components/home/why-climb";
import { CategoryChips } from "@/components/leaderboard/category-chips";
import { FindRank } from "@/components/leaderboard/find-rank";

export const dynamic = "force-dynamic";

export default async function ClimbLayout({ children }: LayoutProps<"/climb">) {
  const [categories, topBoard, stats] = await Promise.all([
    getCategories(),
    getLeaderboard({ page: 1, pageSize: 1 }),
    getSiteStats(),
  ]);
  const claimTop = topBoard.people[0];

  return (
    <main id="main" className="pt-8 pb-10 sm:pt-10">
      <ClaimWidget
        topBid={claimTop?.currentBid ?? null}
        topName={claimTop?.fullName ?? null}
        peopleCount={stats.people}
        visitors={stats.visitors}
        categories={categories.map((category) => ({ slug: category.slug, name: category.name }))}
      />
      <WhyClimb />
      <div className="mt-8 min-w-0">
        <CategoryChips categories={categories} />
      </div>
      <div className="mt-4">
        <FindRank />
      </div>
      {children}
    </main>
  );
}
