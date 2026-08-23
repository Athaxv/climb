"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type PersonHit = {
  username: string;
  fullName: string;
  rank: number;
};

export function FindRank({ people }: { people?: PersonHit[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [remoteMatches, setRemoteMatches] = useState<PersonHit[]>([]);
  const needle = query.trim();

  const localMatches = useMemo(() => {
    if (!people || needle.length < 2) return [];
    const lower = needle.toLowerCase();
    return people
      .filter(
        (person) =>
          person.fullName.toLowerCase().includes(lower) || person.username.toLowerCase().includes(lower),
      )
      .slice(0, 6);
  }, [needle, people]);

  useEffect(() => {
    if (people) return;
    if (needle.length < 2) return;
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      try {
        const response = await fetch(`/api/leaderboard?q=${encodeURIComponent(needle)}`, {
          signal: controller.signal,
        });
        if (!response.ok) return;
        const data = (await response.json()) as { people: PersonHit[] };
        setRemoteMatches(data.people.slice(0, 6));
      } catch {
        /* ignore abort */
      }
    }, 150);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [needle, people]);

  const matches = needle.length < 2 ? [] : people ? localMatches : remoteMatches;

  function jump(username: string) {
    const node = document.getElementById(`person-${username}`);
    if (node) {
      setQuery("");
      node.scrollIntoView({ behavior: "smooth", block: "center" });
      node.classList.add("ring-2", "ring-ring");
      window.setTimeout(() => {
        node.classList.remove("ring-2", "ring-ring");
      }, 1200);
      return;
    }
    router.push(`/p/${username}`);
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (matches[0]) jump(matches[0].username);
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <form onSubmit={onSubmit} className="relative">
        <label className="sr-only" htmlFor="find-rank">
          Find a name on the leaderboard
        </label>
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          id="find-rank"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Find a name"
          className="h-10 w-full rounded-[var(--radius)] border border-input bg-card pr-3 pl-9 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
        />
      </form>
      {needle.length >= 2 ? (
        <ul className="mt-1 overflow-hidden rounded-[var(--radius)] border border-border bg-card text-sm">
          {matches.length === 0 ? (
            <li className="px-3 py-2 text-muted-foreground">No one with that name.</li>
          ) : (
            matches.map((person) => (
              <li key={person.username}>
                <button
                  type="button"
                  onClick={() => jump(person.username)}
                  className="flex min-h-11 w-full cursor-pointer items-center justify-between px-3 py-2 text-left hover:bg-muted"
                >
                  <span>{person.fullName}</span>
                  <span className="tabular-nums text-primary">#{person.rank}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
