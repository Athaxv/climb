import { getRising } from "@climb/db";
import { BoardPagination } from "@/components/leaderboard/board-pagination";
import { PersonCard } from "@/components/people/person-card";
import { pageHref, parsePage } from "@/lib/climb-url";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rising",
  description: "Biggest movers on the Climb leaderboard.",
};

export const revalidate = 20;

const PAGE_SIZE = 12;

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function RisingPage({ searchParams }: Props) {
  const page = parsePage((await searchParams).page);
  const ranked = await getRising(50);
  const pageCount = Math.max(1, Math.ceil(ranked.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const people = ranked.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-4 pb-8 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Biggest movers</h1>
      <p className="mt-2 text-muted-foreground">Largest rank climbs over the last 7 days.</p>
      <div className="mt-8 flex flex-col gap-4 pt-2">
        {people.length === 0 ? (
          <p className="py-16 text-center text-muted-foreground">No one on this board yet. Claim a spot.</p>
        ) : (
          people.map((person) => <PersonCard key={person.id} person={person} />)
        )}
      </div>
      <BoardPagination page={safePage} pageCount={pageCount} hrefForPage={(next) => pageHref("/rising", next)} />
    </main>
  );
}
