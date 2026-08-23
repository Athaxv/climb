import { prisma } from "@climb/db";
import { moneyToCents, quoteCheckout } from "@climb/ranking";
import { trackEvent } from "@/lib/analytics";
import type { SessionPayload } from "@/lib/auth/session";
import { AppError } from "@/lib/http";
import { createProviderCheckout } from "@/services/payment.service";
import { upsertProfile } from "@/services/profile.service";

export { invalidateListingCache } from "@/services/listing-cache";

function normalizeEmail(value: string | undefined | null) {
  return value?.trim().toLowerCase() || "";
}

export function assertCanCheckoutListing(input: {
  ownerUserId: string | null;
  ownerEmail?: string | null;
  session: SessionPayload | null;
}) {
  if (!input.ownerUserId) return;
  const sessionUserId = input.session?.userId;
  const sessionEmail = normalizeEmail(input.session?.email);
  const ownerEmail = normalizeEmail(input.ownerEmail);
  const owns =
    Boolean(sessionUserId && sessionUserId === input.ownerUserId) ||
    Boolean(sessionEmail && ownerEmail && sessionEmail === ownerEmail);
  if (!owns) {
    throw new AppError(
      "listing_taken",
      "This listing is already claimed. Use your own name or handle to take that rank.",
      403,
    );
  }
}

export async function createCheckout(input: {
  identity: string;
  category: string;
  name?: string;
  headline?: string;
  targetBid?: number;
  email?: string;
  session: SessionPayload | null;
}) {
  const { person: upserted } = await upsertProfile(input);
  const person = await prisma.person.findUnique({
    where: { id: upserted.id },
    include: { category: true, user: true },
  });
  if (!person) {
    throw new AppError("profile_missing", "Could not load that listing.", 500);
  }

  assertCanCheckoutListing({
    ownerUserId: person.userId,
    ownerEmail: person.user?.email,
    session: input.session,
  });

  const email = normalizeEmail(input.session?.email) || normalizeEmail(input.email);
  if (!email || !email.includes("@")) {
    throw new AppError("email_required", "Enter an email so we can start checkout.", 400);
  }

  const requestedTargetCents = input.targetBid != null ? moneyToCents(input.targetBid) : undefined;
  const quote = quoteCheckout({
    currentBidCents: person.currentBid,
    requestedTargetCents,
  });
  if (!quote.ok) {
    throw new AppError("bid_too_low", "That bid is too low for this listing.");
  }

  await trackEvent("bid_quoted", {
    username: person.username,
    targetBidCents: quote.targetBidCents,
    chargeAmountCents: quote.chargeAmountCents,
  });

  return createProviderCheckout({
    person,
    targetBidCents: quote.targetBidCents,
    chargeAmountCents: quote.chargeAmountCents,
    identity: input.identity,
    email,
    customerName: person.fullName,
  });
}

export async function getBid(id: string) {
  const bid = await prisma.bid.findUnique({
    where: { id },
    include: {
      person: { select: { username: true, fullName: true, currentBid: true } },
    },
  });
  if (!bid) return null;
  return bid;
}
