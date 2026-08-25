"use client";

import { formatUsdFromCents } from "@climb/ranking";
import { ChallengePositionButton } from "@/components/bidding/challenge-position-button";
import { ClimbAtmosphere } from "@/components/home/climb-atmosphere";
import { PaidRankBanner } from "@/components/people/paid-rank-banner";
import { PersonAvatar } from "@/components/people/person-avatar";
import { ShareRankButton } from "@/components/people/share-rank-button";
import { useClimbMotion } from "@/lib/climb-motion";
import { BadgeCheck } from "lucide-react";
import { motion } from "motion/react";

const LINK_LABELS: Record<string, string> = {
  LINKEDIN: "LinkedIn",
  GITHUB: "GitHub",
  TWITTER: "X",
  WEBSITE: "Website",
  PORTFOLIO: "Portfolio",
  OTHER: "Link",
};

export type ProfileViewPerson = {
  username: string;
  fullName: string;
  headline: string;
  bio: string | null;
  imageUrl: string | null;
  profileUrl: string | null;
  verified: boolean;
  currentBid: number;
  totalViews: number;
  movement7d: number;
  rank: number;
  location: string | null;
  country: string | null;
  skills: string[];
  category: { slug: string; name: string };
  socialLinks: { id: string; type: string; url: string }[];
};

export function ProfileView({
  person,
  paidRank,
  minToTakeCents,
  minToTakeDollars,
}: {
  person: ProfileViewPerson;
  paidRank: number | null;
  minToTakeCents: number;
  minToTakeDollars: number;
}) {
  const { enter, fadeIn, stagger } = useClimbMotion();

  return (
    <main id="main" className="relative isolate mx-auto w-full max-w-3xl px-4 pb-16 sm:px-6">
      <ClimbAtmosphere />
      {paidRank != null ? <PaidRankBanner rank={paidRank} /> : null}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="flex flex-col gap-5"
      >
        <motion.div variants={fadeIn}>
          <section>
            <p className="text-sm font-medium text-primary">
              {person.rank > 0 ? `#${person.rank}` : "Unlisted"}
            </p>
            <div className="mt-4 flex items-start gap-4">
              <PersonAvatar
                name={person.fullName}
                username={person.username}
                imageUrl={person.imageUrl}
                className="size-16 text-lg"
                priority
              />
              <div>
                <motion.h1
                  variants={enter}
                  className="flex items-center gap-2 text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  {person.fullName}
                  {person.verified ? <BadgeCheck className="size-5 text-primary" aria-label="Verified" /> : null}
                </motion.h1>
                <p className="mt-1 text-muted-foreground">{person.headline}</p>
              </div>
            </div>
            {person.bio ? <p className="mt-6 text-[17px] leading-7">{person.bio}</p> : null}
          </section>
        </motion.div>

        <motion.dl variants={stagger} className="grid gap-3 sm:grid-cols-3">
          <motion.div variants={fadeIn}>
            <dt className="text-sm text-muted-foreground">Current bid</dt>
            <dd className="mt-1 text-2xl font-bold tabular-nums text-primary">
              {formatUsdFromCents(person.currentBid)}
            </dd>
          </motion.div>
          <motion.div variants={fadeIn}>
            <dt className="text-sm text-muted-foreground">Clicks</dt>
            <dd className="mt-1 text-2xl font-bold tabular-nums">{person.totalViews.toLocaleString()}</dd>
          </motion.div>
          <motion.div variants={fadeIn}>
            <dt className="text-sm text-muted-foreground">7-day movement</dt>
            <dd className="mt-1 text-2xl font-bold tabular-nums">
              {person.movement7d > 0 ? "+" : ""}
              {person.movement7d}
            </dd>
          </motion.div>
        </motion.dl>

        <motion.div variants={fadeIn}>
          <div className="flex flex-wrap gap-2">
            {person.profileUrl ? (
              <a
                href={person.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border border-border px-3 py-1.5 text-sm hover:border-primary/40"
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
                className="inline-flex min-h-11 items-center rounded-full border border-border px-3 py-1.5 text-sm hover:border-primary/40"
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
        </motion.div>

        <motion.div variants={fadeIn}>
          <p className="text-sm text-muted-foreground">Want this spot?</p>
          <p className="mt-1 text-lg font-semibold">
            Claim {person.rank > 0 ? `#${person.rank}` : "this listing"} for {formatUsdFromCents(minToTakeCents)}
          </p>
          <ChallengePositionButton category={person.category.slug} bid={minToTakeDollars} />
        </motion.div>
      </motion.div>
    </main>
  );
}
