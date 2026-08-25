"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export function FindRank() {
  return (
    <Suspense fallback={<FindRankBar query="" />}>
      <FindRankFromUrl />
    </Suspense>
  );
}

function FindRankFromUrl() {
  const searchParams = useSearchParams();
  return <FindRankBar query={searchParams.get("q") ?? ""} searchParams={searchParams} />;
}

function FindRankBar({
  query: initial,
  searchParams,
}: {
  query: string;
  searchParams?: URLSearchParams;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState(initial);

  useEffect(() => {
    setQuery(initial);
  }, [initial]);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    const next = query.trim();
    if (next.length >= 2) params.set("q", next);
    else params.delete("q");
    params.delete("page");
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <form onSubmit={onSubmit} className="relative">
        <label className="sr-only" htmlFor="find-rank">
          Search people, usernames or skills
        </label>
        <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          id="find-rank"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search people, usernames or skills..."
          className="h-11 min-h-11 w-full rounded-full border border-border bg-background pr-4 pl-10 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
        />
      </form>
    </div>
  );
}
