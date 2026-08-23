import { getTrending } from "@climb/db";
import { PersonCard } from "@/components/people/person-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trending",
  description: "People gaining momentum on Climb — views, bid growth, and rank movement.",
};

export const dynamic = "force-dynamic";

export default async function TrendingPage() {
  const people = await getTrending(12);

  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Trending</h1>
      <p className="mt-2 text-muted-foreground">
        Momentum, not just the highest bid. Recent views, bid growth, and rank improvement.
      </p>
      <div className="mt-8 flex flex-col gap-3">
        {people.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </main>
  );
}
