import type { LeaderboardPerson } from "@climb/db";
import { LatestActivity } from "@/components/leaderboard/latest-activity";
import { PersonCard } from "@/components/people/person-card";

type Activity = {
  id: string;
  amount: number;
  createdAt: Date;
  username: string;
  fullName: string;
  rank: number | null;
};

export function LeaderboardList({
  people,
  activity,
}: {
  people: LeaderboardPerson[];
  activity?: Activity[];
}) {
  if (people.length === 0) {
    return (
      <p className="px-4 py-16 text-center text-muted-foreground">
        No one on this board yet. Claim a spot.
      </p>
    );
  }

  const top = people.slice(0, 3);
  const rest = people.slice(3);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 pt-2 sm:px-6">
      {top.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
      {activity?.length ? (
        <div className="py-4">
          <LatestActivity items={activity} />
        </div>
      ) : null}
      {rest.map((person) => (
        <div key={person.id}>
          {person.rank === 11 ? (
            <p className="mb-2 text-xs font-medium text-muted-foreground">Top 10</p>
          ) : null}
          {person.rank === 21 ? (
            <p className="mb-2 text-xs font-medium text-muted-foreground">Top 20</p>
          ) : null}
          <PersonCard person={person} />
        </div>
      ))}
    </div>
  );
}
