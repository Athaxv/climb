import { getTrending } from "@climb/db";
import { BoardPagination } from "@/components/leaderboard/board-pagination";
import { PersonCard } from "@/components/people/person-card";
import { pageHref, parsePage } from "@/lib/climb-url";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trending",
  description: "People gaining momentum on Climb — views, bid growth, and rank movement.",
};

export const revalidate = 20;

const PAGE_SIZE = 12;

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function TrendingPage({ searchParams }: Props) {
  const page = parsePage((await searchParams).page);
  const ranked = await getTrending(50);
  const pageCount = Math.max(1, Math.ceil(ranked.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const people = ranked.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  return (
    <main id="main" className="climb-enter mx-auto w-full max-w-5xl px-4 pb-8 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Trending</h1>
      <p className="mt-2 text-muted-foreground">
        Momentum, not just the highest bid. Recent views, bid growth, and rank improvement.
      </p>
      <div className="mt-8 flex flex-col gap-4 pt-2">
        {people.length === 0 ? (
          <p className="py-16 text-center text-muted-foreground">No one on this board yet. Claim a spot.</p>
        ) : (
          people.map((person, index) => (
            <PersonCard key={person.id} person={person} enterIndex={index} />
          ))
        )}
      </div>
      <BoardPagination page={safePage} pageCount={pageCount} hrefForPage={(next) => pageHref("/trending", next)} />
    </main>
  );
}
