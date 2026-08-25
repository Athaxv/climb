import { getSiteStats } from "@climb/db";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stats",
  description: "Public stats for Climb.",
};

export const dynamic = "force-dynamic";

export default async function StatsPage() {
  const stats = await getSiteStats();

  return (
    <main id="main" className="climb-enter mx-auto w-full max-w-2xl px-4 pb-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Stats</h1>
      <dl className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-[var(--radius)] border border-border bg-card p-4">
          <dt className="text-sm text-muted-foreground">People on the board</dt>
          <dd className="mt-1 text-3xl font-bold tabular-nums">{stats.people.toLocaleString()}</dd>
        </div>
        <div className="rounded-[var(--radius)] border border-border bg-card p-4">
          <dt className="text-sm text-muted-foreground">Visitors since launch</dt>
          <dd className="mt-1 text-3xl font-bold tabular-nums">{stats.visitors.toLocaleString()}</dd>
        </div>
      </dl>
    </main>
  );
}
