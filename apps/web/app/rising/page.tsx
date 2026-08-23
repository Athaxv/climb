import { getRising } from "@climb/db";
import { PersonCard } from "@/components/people/person-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rising",
  description: "Biggest movers on the Climb leaderboard.",
};

export const dynamic = "force-dynamic";

export default async function RisingPage() {
  const people = await getRising(12);

  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Biggest movers</h1>
      <p className="mt-2 text-muted-foreground">Largest rank climbs over the last 7 days.</p>
      <div className="mt-8 flex flex-col gap-3">
        {people.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </main>
  );
}
