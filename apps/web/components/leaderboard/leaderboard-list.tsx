import type { LeaderboardPerson } from "@climb/db";
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
  if (people.length === 0) {
    return (
      <p className="px-4 py-16 text-center text-muted-foreground">
        {searching ? "No matching people." : "No one on this board yet. Claim a spot."}
      </p>
    );
  }

  const top = !searching && page === 1 ? people.slice(0, 3) : [];
  const rest = !searching && page === 1 ? people.slice(3) : people;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 pt-2 sm:px-6">
      {searching ? (
        <p className="text-sm text-muted-foreground">
          Showing {total} matching {total === 1 ? "person" : "people"}
        </p>
      ) : null}
      {top.length > 0 ? (
        <div className="flex flex-col gap-3">
          {top.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      ) : null}
      {rest.length > 0 ? (
        <div className="flex flex-col gap-0.5">
          {rest.map((person) => (
            <div key={person.id}>
              {!searching && person.rank === 11 ? (
                <p className="mt-2 mb-1 text-xs font-medium text-muted-foreground">Top 10</p>
              ) : null}
              {!searching && person.rank === 21 ? (
                <p className="mt-2 mb-1 text-xs font-medium text-muted-foreground">Top 20</p>
              ) : null}
              <PersonCard person={person} emphasizeRank={!searching} />
            </div>
          ))}
        </div>
      ) : null}
      {pageCount > 1 ? (
        <nav className="flex items-center justify-between pt-2 text-sm" aria-label="Pagination">
          {page > 1 ? (
            <Link
              href={climbPath({ categorySlug, q, page: page - 1 })}
              scroll={false}
              className="min-h-11 rounded-full px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              Previous
            </Link>
          ) : (
            <span />
          )}
          <span className="tabular-nums text-muted-foreground">
            Page {page} of {pageCount}
          </span>
          {page < pageCount ? (
            <Link
              href={climbPath({ categorySlug, q, page: page + 1 })}
              scroll={false}
              className="min-h-11 rounded-full px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              Next
            </Link>
          ) : (
            <span />
          )}
        </nav>
      ) : null}
    </div>
  );
}
