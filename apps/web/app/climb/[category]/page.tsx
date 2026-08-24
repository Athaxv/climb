import { getLeaderboard, getClimbCategory, isCategorySlug } from "@climb/db";
import { LeaderboardList } from "@/components/leaderboard/leaderboard-list";
import { parseBoardSearch } from "@/lib/climb-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ q?: string; page?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getClimbCategory(slug);
  if (!category) return { title: "Category" };
  return {
    title: category.headline,
    description: category.description,
    alternates: { canonical: `/climb/${category.slug}` },
    openGraph: {
      title: `${category.headline} | Climb`,
      description: category.description,
    },
  };
}

export default async function ClimbCategoryPage({ params, searchParams }: Props) {
  const { category: slug } = await params;
  if (!isCategorySlug(slug)) notFound();
  const category = getClimbCategory(slug);
  if (!category) notFound();

  const { q, page } = parseBoardSearch(await searchParams);
  const board = await getLeaderboard({ categorySlug: slug, q: q || undefined, page });

  return (
    <div className="mt-6">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-sm font-medium text-muted-foreground">{category.headline}</h2>
      </div>
      <LeaderboardList
        people={board.people}
        total={board.total}
        page={board.page}
        pageSize={board.pageSize}
        q={q}
        categorySlug={slug}
      />
    </div>
  );
}
