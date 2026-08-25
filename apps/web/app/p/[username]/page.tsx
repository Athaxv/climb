import { cache } from "react";
import { after } from "next/server";
import { headers } from "next/headers";
import { calculateMinimumBidCents } from "@climb/ranking";
import { ProfileView } from "@/components/people/profile-view";
import { trackEvent } from "@/lib/analytics";
import { getCachedProfile } from "@/services/leaderboard.service";
import { recordProfileView } from "@/services/profile.service";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const loadPerson = cache((username: string) => getCachedProfile(username));

type Props = {
  params: Promise<{ username: string }>;
  searchParams: Promise<{ paid?: string; session_id?: string }>;
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
    <ProfileView
      person={person}
      paidRank={paidRank}
      minToTakeCents={minToTakeCents}
      minToTakeDollars={minToTakeDollars}
    />
  );
}
