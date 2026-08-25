import { prisma, isCategorySlug } from "@climb/db";
import { moneyToCents, quoteCheckout } from "@climb/ranking";
import { trackEvent } from "@/lib/analytics";
import { AppError } from "@/lib/http";
import { createProviderCheckout } from "@/services/payment.service";
import { inferProfile } from "@/services/profile-infer";
import { upsertProfile } from "@/services/profile.service";

export { invalidateListingCache } from "@/services/listing-cache";

export async function createCheckout(input: {
  identity: string;
  category?: string;
  name?: string;
  headline?: string;
  skills?: string;
  imageUrl?: string;
  bio?: string;
  location?: string;
  targetBid?: number;
  origin?: string;
}) {
  let category = input.category?.trim() ?? "";
  let name = input.name?.trim();
  let headline = input.headline?.trim();
  let skills = input.skills?.trim();
  let imageUrl = input.imageUrl;
  let bio = input.bio;
  let location = input.location;
  if (!category || !isCategorySlug(category)) {
    const inferred = await inferProfile(input.identity);
    category = inferred.categorySlug;
    name = name || inferred.fullName;
    headline = headline || inferred.headline;
    skills = skills || inferred.skills.join(", ");
    imageUrl = imageUrl || inferred.imageUrl;
    bio = bio || inferred.bio;
    location = location || inferred.location;
  }

  const { person } = await upsertProfile({
    identity: input.identity,
    category,
    name,
    headline,
    skills,
    imageUrl,
    bio,
    location,
  });

  const requestedTargetCents = input.targetBid != null ? moneyToCents(input.targetBid) : undefined;
  const quote = quoteCheckout({
    currentBidCents: person.currentBid,
    requestedTargetCents,
  });
  if (!quote.ok) {
    throw new AppError("bid_too_low", "That bid is too low for this listing.");
  }

  void trackEvent("bid_quoted", {
    username: person.username,
    targetBidCents: quote.targetBidCents,
    chargeAmountCents: quote.chargeAmountCents,
  });

  return createProviderCheckout({
    person,
    targetBidCents: quote.targetBidCents,
    chargeAmountCents: quote.chargeAmountCents,
    identity: input.identity,
    customerName: person.fullName,
    origin: input.origin,
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
