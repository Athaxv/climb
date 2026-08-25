"use client";

import type { LeaderboardPerson } from "@climb/db";
import { calculateMinimumBidCents, formatUsdFromCents } from "@climb/ranking";
import { BadgeCheck, MousePointerClick } from "lucide-react";
import { motion } from "motion/react";
import { ClaimRankButton } from "@/components/people/claim-rank-button";
import { PersonAvatar } from "@/components/people/person-avatar";
import { enterDelaySeconds, useClimbMotion } from "@/lib/climb-motion";
import { cn } from "@/lib/utils";

export { PersonAvatar } from "@/components/people/person-avatar";

type PersonCardProps = {
  person: LeaderboardPerson;
  showClaim?: boolean;
  emphasizeRank?: boolean;
  priority?: boolean;
  enterIndex?: number;
};

const PLATFORM_ORDER = ["LINKEDIN", "GITHUB", "TWITTER", "WEBSITE", "PORTFOLIO"] as const;

function PlatformIcon({ type }: { type: string }) {
  const className = "size-3.5";
  if (type === "GITHUB") {
    return (
      <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden>
        <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.33c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.72 1.22 1.89.87 2.35.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.54 7.54 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 8 0Z" />
      </svg>
    );
  }
  if (type === "LINKEDIN") {
    return (
      <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden>
        <path d="M14.8 0H1.2C.5 0 0 .5 0 1.2v13.6C0 15.5.5 16 1.2 16h13.6c.7 0 1.2-.5 1.2-1.2V1.2C16 .5 15.5 0 14.8 0ZM4.7 13.6H2.4V6h2.3v7.6ZM3.6 5A1.3 1.3 0 1 1 3.6 2.3 1.3 1.3 0 0 1 3.6 5Zm10 8.6h-2.3V9.8c0-.9 0-2.1-1.3-2.1s-1.5 1-1.5 2v3.9H6.2V6h2.2v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2Z" />
      </svg>
    );
  }
  if (type === "TWITTER") {
    return (
      <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden>
        <path d="M12.6 1H15L10.2 6.5 16 15h-4.9L7.6 10.2 3.2 15H.8l5.2-5.9L0 1h5l3.2 4.5L12.6 1Zm-.9 12.6h1.3L4.4 2.3H3L11.7 13.6Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="8" cy="8" r="6.25" />
      <path d="M1.75 8h12.5M8 1.75c1.7 1.8 2.6 3.9 2.6 6.25S9.7 12.45 8 14.25C6.3 12.45 5.4 10.35 5.4 8S6.3 3.55 8 1.75Z" />
    </svg>
  );
}

const PLATFORM_LABELS: Record<string, string> = {
  LINKEDIN: "LinkedIn",
  GITHUB: "GitHub",
  TWITTER: "X",
  WEBSITE: "Website",
  PORTFOLIO: "Portfolio",
};

export function PersonCard({
  person,
  showClaim = true,
  emphasizeRank = true,
  priority = false,
  enterIndex,
}: PersonCardProps) {
  const minToTakeCents = calculateMinimumBidCents(person.currentBid);
  const minToTakeDollars = minToTakeCents / 100;
  const isFirst = emphasizeRank && person.rank === 1;
  const isPodium = emphasizeRank && person.rank >= 2 && person.rank <= 3;
  const claimLabel = `claim this rank for ${formatUsdFromCents(minToTakeCents)}`;
  const skills = (person.skills ?? []).slice(0, 3);
  const platforms = PLATFORM_ORDER.filter((type) =>
    person.socialLinks.some((link) => link.type === type),
  );
  const clicks = person.totalViews ?? 0;
  const clickLabel = `${clicks.toLocaleString()} profile ${clicks === 1 ? "click" : "clicks"}`;
  const { reduced, hoverLift, tap, spring } = useClimbMotion();

  return (
    <motion.article
      id={`person-${person.username}`}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...spring, delay: enterDelaySeconds(enterIndex) }}
      whileHover={hoverLift}
      whileTap={tap}
      className={cn(
        "group relative overflow-visible rounded-[var(--radius)]",
        isFirst && "px-3 py-3 ring-2 ring-primary",
        isPodium && "px-3 py-2.5",
        emphasizeRank && person.rank === 2 && "ring-1 ring-primary/55",
        emphasizeRank && person.rank === 3 && "ring-1 ring-primary/30",
        !isFirst && !isPodium && "px-2 py-2",
      )}
    >
      {showClaim ? (
        <ClaimRankButton
          category={person.category.slug}
          bidDollars={minToTakeDollars}
          label={claimLabel}
        />
      ) : null}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <a
          href={`/go/${person.username}`}
          className="flex min-w-0 flex-1 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-3"
        >
          {isFirst || isPodium ? (
            <span
              className={cn(
                "grid shrink-0 place-items-center rounded-full bg-primary font-bold text-primary-foreground",
                isFirst ? "size-10 text-xs" : "size-8 text-[11px]",
              )}
            >
              #{person.rank}
            </span>
          ) : (
            <span className="w-8 shrink-0 text-right text-sm font-medium tabular-nums text-muted-foreground">
              #{person.rank}
            </span>
          )}
          <PersonAvatar
            name={person.fullName}
            username={person.username}
            imageUrl={person.imageUrl}
            className={isFirst ? "size-10" : "size-8"}
            priority={priority}
          />
          <span className="min-w-0 flex-1">
            <span className="flex items-center gap-1.5">
              <span className="truncate text-sm font-semibold tracking-tight text-foreground">
                {person.fullName}
              </span>
              {person.verified ? (
                <BadgeCheck className="size-3.5 shrink-0 text-primary" aria-label="Verified" />
              ) : null}
            </span>
            <span className="mt-0.5 block truncate text-[13px] text-muted-foreground">
              {person.headline}
            </span>
            <span className="mt-1 flex flex-wrap items-center gap-1">
              <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                {person.category.name}
              </span>
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
              {platforms.length > 0 ? (
                <span className="ml-0.5 inline-flex items-center">
                  {platforms.map((type) => (
                    <span
                      key={type}
                      className="grid size-8 place-items-center text-muted-foreground"
                      aria-label={PLATFORM_LABELS[type] ?? type}
                    >
                      <PlatformIcon type={type} />
                    </span>
                  ))}
                </span>
              ) : null}
            </span>
          </span>
        </a>
        <div className="flex shrink-0 flex-col items-end gap-0.5">
          <p
            className={cn(
              "font-semibold tabular-nums text-primary",
              isFirst ? "text-base sm:text-lg" : "text-sm sm:text-base",
            )}
          >
            {formatUsdFromCents(person.currentBid)}
          </p>
          <p
            className="inline-flex items-center gap-0.5 text-[11px] tabular-nums text-muted-foreground"
            aria-label={clickLabel}
          >
            <MousePointerClick className="size-3" aria-hidden />
            {clicks.toLocaleString()}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
