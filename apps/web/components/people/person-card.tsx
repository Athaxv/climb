"use client";

import type { LeaderboardPerson } from "@climb/db";
import { calculateMinimumBidCents, formatUsdFromCents } from "@climb/ranking";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn, formatTimeAgo, hueFromString, initials } from "@/lib/utils";

type PersonCardProps = {
  person: LeaderboardPerson;
  showClaim?: boolean;
};

export function PersonAvatar({
  name,
  username,
  className = "size-8",
}: {
  name: string;
  username: string;
  className?: string;
}) {
  const hue = hueFromString(username);
  return (
    <div
      className={`grid shrink-0 place-items-center rounded-md text-[11px] font-semibold text-white ${className}`}
      style={{ background: `hsl(${hue} 32% 42%)` }}
      aria-hidden
    >
      {initials(name)}
    </div>
  );
}

export function PersonCard({ person, showClaim = true }: PersonCardProps) {
  const minToTakeCents = calculateMinimumBidCents(person.currentBid);
  const minToTakeDollars = minToTakeCents / 100;
  const isFirst = person.rank === 1;
  const claimHref = `/create?bid=${minToTakeDollars}&category=${person.category.slug}`;
  const claimLabel = `claim this rank for ${formatUsdFromCents(minToTakeCents)}`;

  const rootRef = useRef<HTMLElement>(null);
  const skipProfileNav = useRef(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!revealed) return;
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setRevealed(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [revealed]);

  function onCardPointerDown(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType !== "touch") return;
    if (!revealed) {
      skipProfileNav.current = true;
      setRevealed(true);
    }
  }

  function onProfileClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (skipProfileNav.current) {
      event.preventDefault();
      skipProfileNav.current = false;
    }
  }

  return (
    <article
      ref={rootRef}
      id={`person-${person.username}`}
      onPointerDown={onCardPointerDown}
      data-revealed={revealed || undefined}
      className={cn(
        "group relative overflow-visible rounded-[var(--radius)] border bg-card px-3 py-2.5 transition-[border-color,background-color] duration-150",
        "border-border hover:border-primary focus-within:border-primary data-[revealed]:border-primary",
        isFirst && "bg-primary/[0.04]",
      )}
    >
      {showClaim ? (
        <Link
          href={claimHref}
          className="pointer-events-none absolute top-0 left-3 z-10 -translate-y-1/2 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold whitespace-nowrap text-primary-foreground opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-data-[revealed]:pointer-events-auto group-data-[revealed]:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring"
        >
          {claimLabel}
        </Link>
      ) : null}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <Link
          href={`/p/${person.username}`}
          onClick={onProfileClick}
          className="flex min-w-0 flex-1 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-3"
        >
          <span className="w-8 shrink-0 text-right text-sm font-semibold tabular-nums text-primary">
            #{person.rank}
          </span>
          <PersonAvatar name={person.fullName} username={person.username} />
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
            <span className="mt-0.5 hidden truncate text-xs text-muted-foreground sm:block">
              {person.category.name}
              <span aria-hidden> · </span>
              {person.totalViews.toLocaleString()} views
              {person.movement24h !== 0 ? (
                <>
                  <span aria-hidden> · </span>
                  {person.movement24h > 0 ? "+" : ""}
                  {person.movement24h} {person.movement24h > 0 ? "up" : "down"}
                </>
              ) : null}
              <span aria-hidden> · </span>
              {formatTimeAgo(person.updatedAt)}
            </span>
          </span>
        </Link>
        <p className="shrink-0 text-sm font-semibold tabular-nums text-primary sm:text-base">
          {formatUsdFromCents(person.currentBid)}
        </p>
      </div>
    </article>
  );
}
