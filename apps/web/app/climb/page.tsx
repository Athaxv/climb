import { LeaderboardList } from "@/components/leaderboard/leaderboard-list";
import { PaidSuccessConfetti } from "@/components/people/paid-success-confetti";
import { parseBoardSearch } from "@/lib/climb-url";
import { listLeaderboard } from "@/services/leaderboard.service";
import type { Metadata } from "next";
import { Suspense } from "react";
import ClimbListLoading from "./loading";

export const revalidate = 20;

type Props = {
  searchParams: Promise<{ q?: string; page?: string; paid?: string }>;
};

export const metadata: Metadata = {
  title: "Climb — the public leaderboard for ambitious people",
  description: "Discover people climbing public leaderboards for Engineering, Founders, Design, and more.",
  alternates: { canonical: "/climb" },
};

async function PaidIsland({ searchParams }: Props) {
  const params = await searchParams;
  if (params.paid !== "1") return null;
  return <PaidSuccessConfetti />;
}

async function ClimbBoard({ searchParams }: Props) {
  const params = await searchParams;
  const { q, page } = parseBoardSearch(params);
  const board = await listLeaderboard({ q: q || undefined, page });

  return (
    <LeaderboardList
      people={board.people}
      total={board.total}
      page={board.page}
      pageSize={board.pageSize}
      q={q}
    />
  );
}

export default function ClimbPage({ searchParams }: Props) {
  return (
    <div className="mt-6">
      <Suspense fallback={null}>
        <PaidIsland searchParams={searchParams} />
      </Suspense>
      <Suspense fallback={<ClimbListLoading />}>
        <ClimbBoard searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
