import { getCategories, getLeaderboard } from "@climb/db";
import { CategoryChips } from "@/components/leaderboard/category-chips";
import { FindRank } from "@/components/leaderboard/find-rank";
import { LeaderboardList } from "@/components/leaderboard/leaderboard-list";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categories = await getCategories();
  const category = categories.find((item) => item.slug === slug);
  if (!category) return { title: "Category" };
  return {
    title: `${category.name} leaderboard`,
    description: `Who deserves the top spot in ${category.name}?`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categories = await getCategories();
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();

  const people = await getLeaderboard({ categorySlug: slug });

  return (
    <main id="main" className="pb-10">
      <div className="mx-auto max-w-5xl px-4 pb-6 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight">{category.name}</h1>
        <p className="mt-2 text-muted-foreground">Ranked by current bid. Higher bid, higher seat.</p>
      </div>
      <CategoryChips categories={categories} activeSlug={slug} />
      <div className="mt-4">
        <FindRank />
      </div>
      <div className="mt-4">
        <LeaderboardList people={people} />
      </div>
    </main>
  );
}
