import { getLeaderboard } from "@climb/db";
import { LeaderboardList } from "@/components/leaderboard/leaderboard-list";
import { PaidRankBanner } from "@/components/people/paid-rank-banner";
import { parseBoardSearch } from "@/lib/climb-url";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{ q?: string; page?: string; paid?: string }>;
};

export const metadata: Metadata = {
  title: "Climb — the public leaderboard for ambitious people",
  description: "Discover people climbing public leaderboards for Engineering, Founders, Design, and more.",
  alternates: { canonical: "/climb" },
};

export default async function ClimbPage({ searchParams }: Props) {
  const params = await searchParams;
  const { q, page } = parseBoardSearch(params);
  const paid = params.paid === "1";
  const board = await getLeaderboard({ q: q || undefined, page });

  return (
    <div className="mt-6">
      {paid ? (
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <PaidRankBanner rank={0} />
        </div>
      ) : null}
      <LeaderboardList
        people={board.people}
        total={board.total}
        page={board.page}
        pageSize={board.pageSize}
        q={q}
      />
    </div>
  );
}
