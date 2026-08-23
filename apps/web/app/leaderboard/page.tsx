import { getCategories, getLatestActivity, getLeaderboard } from "@climb/db";
import { ClaimWidget } from "@/components/bidding/claim-widget";
import { WhyClimb } from "@/components/home/why-climb";
import { CategoryChips } from "@/components/leaderboard/category-chips";
import { FindRank } from "@/components/leaderboard/find-rank";
import { LeaderboardList } from "@/components/leaderboard/leaderboard-list";

export const dynamic = "force-dynamic";

export default async function LeaderboardPage() {
  const [people, categories, activity] = await Promise.all([
    getLeaderboard(),
    getCategories(),
    getLatestActivity(),
  ]);

  const categoryOptions = categories.map((category) => ({
    slug: category.slug,
    name: category.name,
  }));

  return (
    <main id="main" className="pb-10">
      <ClaimWidget
        topBid={people[0]?.currentBid ?? null}
        topName={people[0]?.fullName ?? null}
        categories={categoryOptions}
      />
      <WhyClimb />
      <div className="mt-4">
        <CategoryChips categories={categories} />
      </div>
      <div className="mt-4">
        <FindRank />
      </div>
      <div className="mt-4">
        <LeaderboardList people={people} activity={activity} />
      </div>
    </main>
  );
}
