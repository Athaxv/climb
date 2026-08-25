import { cache } from "react";
import { after } from "next/server";
import { headers } from "next/headers";
import { calculateMinimumBidCents, formatUsdFromCents } from "@climb/ranking";
import { PaidRankBanner } from "@/components/people/paid-rank-banner";
import { PersonAvatar } from "@/components/people/person-avatar";
import { ShareRankButton } from "@/components/people/share-rank-button";
import { ChallengePositionButton } from "@/components/bidding/challenge-position-button";
import { trackEvent } from "@/lib/analytics";
import { getCachedProfile } from "@/services/leaderboard.service";
import { recordProfileView } from "@/services/profile.service";
import { BadgeCheck } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const loadPerson = cache((username: string) => getCachedProfile(username));

type Props = {
  params: Promise<{ username: string }>;
  searchParams: Promise<{ paid?: string; session_id?: string }>;
};

const LINK_LABELS: Record<string, string> = {
  LINKEDIN: "LinkedIn",
  GITHUB: "GitHub",
  TWITTER: "X",
  WEBSITE: "Website",
  PORTFOLIO: "Portfolio",
  OTHER: "Link",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const person = await loadPerson(username);
  if (!person) return { title: "Profile" };
  return {
    title: `${person.fullName} — #${person.rank} ${person.category.name}`,
    description: person.headline,
    openGraph: {
      title: `${person.fullName} is #${person.rank} on Climb`,
      description: person.headline,
      ...(person.imageUrl ? { images: [{ url: person.imageUrl }] } : {}),
    },
  };
}

export default async function ProfilePage({ params, searchParams }: Props) {
  const { username } = await params;
  const query = await searchParams;
  const person = await loadPerson(username);
  if (!person) notFound();

  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const userAgent = headerList.get("user-agent") || "unknown";
  after(() => {
    void recordProfileView(person.id, ip, userAgent);
    void trackEvent("profile_view", { username });
  });

  const minToTakeCents = calculateMinimumBidCents(Math.max(person.currentBid, 0));
  const minToTakeDollars = minToTakeCents / 100;
  const paidRank = query.paid === "1" ? person.rank : null;

  return (
    <main id="main" className="climb-enter mx-auto w-full max-w-3xl px-4 pb-16 sm:px-6">
      {paidRank != null ? <PaidRankBanner rank={paidRank} /> : null}
      <p className="text-sm font-medium text-primary">{person.rank > 0 ? `#${person.rank}` : "Unlisted"}</p>
      <div className="mt-4 flex items-start gap-4">
        <PersonAvatar
          name={person.fullName}
          username={person.username}
          imageUrl={person.imageUrl}
          className="size-16 text-lg"
          priority
        />
        <div>
          <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
            {person.fullName}
            {person.verified ? <BadgeCheck className="size-5 text-primary" aria-label="Verified" /> : null}
          </h1>
          <p className="mt-1 text-muted-foreground">{person.headline}</p>
        </div>
      </div>
      {person.bio ? <p className="mt-6 text-[17px] leading-7">{person.bio}</p> : null}
      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-[var(--radius)] border border-border bg-card p-4">
          <dt className="text-sm text-muted-foreground">Current bid</dt>
          <dd className="mt-1 text-2xl font-bold text-primary">{formatUsdFromCents(person.currentBid)}</dd>
        </div>
        <div className="rounded-[var(--radius)] border border-border bg-card p-4">
          <dt className="text-sm text-muted-foreground">Clicks</dt>
          <dd className="mt-1 text-2xl font-bold tabular-nums">{person.totalViews.toLocaleString()}</dd>
        </div>
        <div className="rounded-[var(--radius)] border border-border bg-card p-4">
          <dt className="text-sm text-muted-foreground">7-day movement</dt>
          <dd className="mt-1 text-2xl font-bold tabular-nums">
            {person.movement7d > 0 ? "+" : ""}
            {person.movement7d}
          </dd>
        </div>
      </dl>
      <div className="mt-6 flex flex-wrap gap-2">
        {person.profileUrl ? (
          <a
            href={person.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-3 py-1.5 text-sm hover:border-primary/40"
          >
            Profile
          </a>
        ) : null}
        {person.socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-3 py-1.5 text-sm hover:border-primary/40"
          >
            {LINK_LABELS[link.type] ?? link.type}
          </a>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        {person.category.name}
        {person.location ? ` · ${person.location}` : ""}
        {person.country ? `, ${person.country}` : ""}
      </p>
      {person.skills?.length ? (
        <p className="mt-2 text-sm text-muted-foreground">{person.skills.join(" · ")}</p>
      ) : null}
      <ShareRankButton username={person.username} rank={person.rank} />
      <div className="mt-8 rounded-[var(--radius)] border border-border bg-card p-5">
        <p className="text-sm text-muted-foreground">Want this spot?</p>
        <p className="mt-1 text-lg font-semibold">
          Claim {person.rank > 0 ? `#${person.rank}` : "this listing"} for {formatUsdFromCents(minToTakeCents)}
        </p>
        <ChallengePositionButton category={person.category.slug} bid={minToTakeDollars} />
      </div>
    </main>
  );
}
