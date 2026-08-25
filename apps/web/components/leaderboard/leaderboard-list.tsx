import type { LeaderboardPerson } from "@climb/db";
import { BoardPagination } from "@/components/leaderboard/board-pagination";
import { PersonCard } from "@/components/people/person-card";
import { climbPath } from "@/lib/climb-url";
import Link from "next/link";

export function LeaderboardList({
  people,
  total,
  page,
  pageSize,
  q,
  categorySlug,
}: {
  people: LeaderboardPerson[];
  total: number;
  page: number;
  pageSize: number;
  q?: string;
  categorySlug?: string;
}) {
  const searching = Boolean(q);
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const hrefForPage = (nextPage: number) => climbPath({ categorySlug, q, page: nextPage });

  if (people.length === 0 && page <= 1) {
    return (
      <p className="mx-4 px-4 py-16 text-center text-muted-foreground sm:mx-6">
        {searching ? "No matching people." : "No one on this board yet. Claim a spot."}
      </p>
    );
  }

  const top = !searching && page === 1 ? people.slice(0, 3) : [];
  const rest = !searching && page === 1 ? people.slice(3) : people;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 pt-2 sm:px-6">
      {searching ? (
        <p className="text-sm text-muted-foreground">
          Showing {total} matching {total === 1 ? "person" : "people"}
        </p>
      ) : null}
      {people.length === 0 ? (
        <p className="py-16 text-center text-muted-foreground">
          No one on this page.{" "}
          <Link href={hrefForPage(1)} className="font-medium text-primary hover:underline">
            Back to page 1
          </Link>
        </p>
      ) : null}
      {top.length > 0 ? (
        <div className="flex flex-col gap-3">
          {top.map((person, index) => (
            <PersonCard key={person.id} person={person} priority={index < 3} enterIndex={index} />
          ))}
        </div>
      ) : null}
      {rest.length > 0 ? (
        <div className={`flex flex-col gap-2 ${top.length > 0 ? "mt-5" : ""}`}>
          {rest.map((person, index) => (
            <div key={person.id}>
              {!searching && person.rank === 11 ? (
                <p className="mt-2 mb-1 text-xs font-medium text-muted-foreground">Top 10</p>
              ) : null}
              {!searching && person.rank === 21 ? (
                <p className="mt-2 mb-1 text-xs font-medium text-muted-foreground">Top 20</p>
              ) : null}
              <PersonCard
                person={person}
                emphasizeRank={!searching}
                enterIndex={top.length + index}
              />
            </div>
          ))}
        </div>
      ) : null}
      <BoardPagination page={page} pageCount={pageCount} hrefForPage={hrefForPage} />
    </div>
  );
}
