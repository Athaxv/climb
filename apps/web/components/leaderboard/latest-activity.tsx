import { formatUsdFromCents } from "@climb/ranking";
import { formatTimeAgo } from "@/lib/utils";
import { PersonAvatar } from "@/components/people/person-avatar";

type Activity = {
  id: string;
  amount: number;
  createdAt: Date;
  username: string;
  fullName: string;
  imageUrl?: string | null;
  rank: number | null;
};

export function LatestActivity({ items }: { items: Activity[] }) {
  if (items.length === 0) return null;

  return (
    <section>
      <h2 className="text-sm font-semibold tracking-tight">Recent bids</h2>
      <ul className="mt-2 divide-y divide-border border-y border-border">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`/go/${item.username}`}
              className="flex items-center gap-3 py-2.5 transition-colors duration-150 hover:bg-muted/60"
            >
              <PersonAvatar
                name={item.fullName}
                username={item.username}
                imageUrl={item.imageUrl}
                className="size-7"
              />
              <span className="min-w-0 flex-1 truncate text-sm">
                <span className="font-medium text-foreground">{item.fullName}</span>
                {item.rank != null ? (
                  <span className="text-muted-foreground"> · #{item.rank}</span>
                ) : null}
              </span>
              <span className="shrink-0 text-sm font-semibold tabular-nums text-primary">
                {formatUsdFromCents(item.amount)}
              </span>
              <span className="hidden shrink-0 text-xs text-muted-foreground sm:inline">
                {formatTimeAgo(item.createdAt)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
