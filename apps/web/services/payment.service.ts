import { Prisma, prisma } from "@climb/db";
import { decideSuccessfulBid } from "@climb/ranking";
import {
  claimThenFulfill,
  getPaymentProvider,
  planFulfillment,
  type PaymentEvent,
  type PaymentProvider,
} from "@climb/payments";
import { trackEvent } from "@/lib/analytics";
import { AppError, appUrl } from "@/lib/http";
import { invalidateListingCache } from "@/services/listing-cache";

type ApplyResult = {
  duplicate?: boolean;
  refund?: boolean;
  applied?: boolean;
  username?: string;
  personId?: string;
  kind?: "joined" | "raised";
  amount?: number;
  categorySlug?: string;
  bidId?: string;
};

function isUniqueConflict(error: unknown) {
  return error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002";
}

export function checkoutReturnUrl(username: string) {
  const origin = appUrl();
  const template = process.env.DODO_PAYMENTS_RETURN_URL;
  if (template) {
    return template.replaceAll("{username}", username);
  }
  return `${origin}/api/checkout/complete?username=${encodeURIComponent(username)}`;
}

export async function createProviderCheckout(input: {
  person: {
    id: string;
    username: string;
    fullName: string;
    category: { slug: string };
  };
  targetBidCents: number;
  chargeAmountCents: number;
  identity: string;
  email: string;
  customerName: string;
}) {
  const provider = getPaymentProvider();
  if (!provider.isConfigured()) {
    throw new AppError(
      "payments_not_configured",
      "Payments are not configured. Set DODO_PAYMENTS_API_KEY and DODO_BID_PRODUCT_ID in apps/web/.env, then restart Next.",
      503,
    );
  }

  const email = input.email.trim().toLowerCase();
  const user = await prisma.user.upsert({
    where: { email },
    update: { name: input.customerName },
    create: { email, name: input.customerName },
  });

  const bid = await prisma.bid.create({
    data: {
      personId: input.person.id,
      userId: user.id,
      targetBidCents: input.targetBidCents,
      chargeAmountCents: input.chargeAmountCents,
      status: "PENDING",
      identityInput: input.identity,
    },
  });

  await prisma.payment.create({
    data: {
      userId: user.id,
      personId: input.person.id,
      bidId: bid.id,
      amount: input.chargeAmountCents,
      currency: "usd",
      provider: "DODO",
      status: "PENDING",
    },
  });

  try {
    const checkout = await provider.createCheckout({
      amountCents: input.chargeAmountCents,
      currency: "usd",
      customerEmail: email,
      customerName: input.customerName,
      returnUrl: checkoutReturnUrl(input.person.username),
      metadata: {
        bidId: bid.id,
        personId: input.person.id,
        username: input.person.username,
        targetBidCents: String(input.targetBidCents),
        chargeAmountCents: String(input.chargeAmountCents),
      },
    });

    await prisma.bid.update({
      where: { id: bid.id },
      data: { providerCheckoutId: checkout.checkoutId },
    });
    await prisma.payment.update({
      where: { bidId: bid.id },
      data: { providerCheckoutId: checkout.checkoutId },
    });

    await trackEvent("checkout_created", {
      bidId: bid.id,
      username: input.person.username,
      chargeAmountCents: input.chargeAmountCents,
    });

    return {
      url: checkout.checkoutUrl,
      bidId: bid.id,
      username: input.person.username,
      targetBidCents: input.targetBidCents,
      chargeAmountCents: input.chargeAmountCents,
    };
  } catch (error) {
    console.error(error);
    await prisma.bid.update({
      where: { id: bid.id },
      data: { status: "FAILED" },
    });
    await prisma.payment.update({
      where: { bidId: bid.id },
      data: { status: "FAILED" },
    });
    const detail = error instanceof Error ? error.message : "";
    if (/401|Unauthorized/i.test(detail)) {
      throw new AppError(
        "dodo_unauthorized",
        "Dodo rejected the API key (401): invalid token, not a permissions or product-id problem. Create a new key under Developer → API Keys, copy the full secret from the one-time reveal (not the truncated id in the table), paste it into DODO_PAYMENTS_API_KEY, and restart Next.",
        401,
      );
    }
    throw new AppError("checkout_failed", "Could not start checkout.", 502);
  }
}

async function rankInTransaction(
  tx: Prisma.TransactionClient,
  person: { id: string; currentBid: number; currentBidAt: Date },
) {
  if (person.currentBid <= 0) return 0;
  const ahead = await tx.person.count({
    where: {
      currentBid: { gt: 0 },
      OR: [
        { currentBid: { gt: person.currentBid } },
        {
          currentBid: person.currentBid,
          currentBidAt: { lt: person.currentBidAt },
        },
        {
          currentBid: person.currentBid,
          currentBidAt: person.currentBidAt,
          id: { lt: person.id },
        },
      ],
    },
  });
  return ahead + 1;
}

async function loadBid(tx: Prisma.TransactionClient, event: PaymentEvent) {
  if (event.metadata.bidId) {
    const byId = await tx.bid.findUnique({
      where: { id: event.metadata.bidId },
      include: { payment: true },
    });
    if (byId) return byId;
  }
  if (event.checkoutId) {
    const byCheckout = await tx.bid.findUnique({
      where: { providerCheckoutId: event.checkoutId },
      include: { payment: true },
    });
    if (byCheckout) return byCheckout;
  }
  return null;
}

export async function handlePaymentEvent(event: PaymentEvent): Promise<ApplyResult> {
  let result: ApplyResult = {};
  try {
    result = await prisma.$transaction(async (tx) => {
      const claimed = await claimThenFulfill({
        insertClaim: async () => {
          await tx.providerWebhookEvent.create({
            data: {
              provider: "dodo",
              eventId: event.eventId,
              eventType: event.type,
            },
          });
        },
        isDuplicate: isUniqueConflict,
        fulfill: async () => fulfillClaimedEvent(tx, event),
      });
      if (claimed.duplicate) {
        return { duplicate: true, bidId: event.metadata.bidId };
      }
      return claimed.result;
    });
  } catch (error) {
    if (isUniqueConflict(error)) {
      return { duplicate: true, bidId: event.metadata.bidId };
    }
    throw error;
  }

  if (result.duplicate || result.refund) {
    await ensureProviderRefund(result.bidId ?? event.metadata.bidId);
    return result;
  }

  if (result.applied && result.username && result.personId && result.kind && result.amount != null) {
    await invalidateListingCache(result.username, result.categorySlug);
    await trackEvent("payment_success", { bidId: event.metadata.bidId, username: result.username });
    await trackEvent("rank_changed", { username: result.username });
  }

  return result;
}

async function fulfillClaimedEvent(
  tx: Prisma.TransactionClient,
  event: PaymentEvent,
): Promise<ApplyResult> {
  if (event.type === "ignored") {
    return {};
  }

  const bid = await loadBid(tx, event);
  if (!bid) return {};

  await tx.$executeRaw`SELECT id FROM "Person" WHERE id = ${bid.personId} FOR UPDATE`;
  const person = await tx.person.findUnique({
    where: { id: bid.personId },
    include: { category: true },
  });
  if (!person) return { bidId: bid.id };

  const decision =
    event.type === "payment.succeeded"
      ? decideSuccessfulBid({
          currentBidCents: person.currentBid,
          targetBidCents: bid.targetBidCents,
        })
      : null;

  const plan = planFulfillment({
    eventType: event.type,
    bidStatus: bid.status,
    storedAmountCents: bid.chargeAmountCents,
    paidAmountCents: event.amountCents,
    decision,
  });

  if (plan.action === "ignore" || plan.action === "skip_bid") {
    return { bidId: bid.id };
  }

  const email = (event.customerEmail || "").trim().toLowerCase();
  const user = email
    ? await tx.user.upsert({
        where: { email },
        update: { name: event.customerName || person.fullName },
        create: { email, name: event.customerName || person.fullName },
      })
    : bid.userId
      ? await tx.user.findUnique({ where: { id: bid.userId } })
      : null;

  const paymentId = event.paymentId ?? bid.payment?.providerPaymentId ?? undefined;

  const checkoutPatch = event.checkoutId ? { providerCheckoutId: event.checkoutId } : {};

  if (plan.action === "fail" || plan.action === "cancel") {
    await tx.bid.update({
      where: { id: bid.id },
      data: { status: "FAILED", userId: user?.id ?? bid.userId, ...checkoutPatch },
    });
    await tx.payment.update({
      where: { bidId: bid.id },
      data: {
        status: "FAILED",
        providerPaymentId: paymentId,
        ...checkoutPatch,
      },
    });
    return { bidId: bid.id };
  }

  if (plan.action === "refund") {
    await tx.bid.update({
      where: { id: bid.id },
      data: {
        userId: user?.id ?? bid.userId,
        status: "REFUNDED",
        ...checkoutPatch,
      },
    });
    await tx.payment.update({
      where: { bidId: bid.id },
      data: {
        status: "REFUNDED",
        providerPaymentId: paymentId,
        ...checkoutPatch,
      },
    });
    return { refund: true, username: person.username, bidId: bid.id };
  }

  const now = new Date();
  const updated = await tx.person.update({
    where: { id: person.id },
    data: {
      currentBid: plan.newBidCents,
      currentBidAt: now,
    },
  });

  await tx.bid.update({
    where: { id: bid.id },
    data: {
      userId: user?.id ?? bid.userId,
      status: "COMPLETED",
      ...checkoutPatch,
    },
  });
  await tx.payment.update({
    where: { bidId: bid.id },
    data: {
      status: "SUCCEEDED",
      providerPaymentId: paymentId,
      ...checkoutPatch,
    },
  });

  if (!person.userId && user) {
    try {
      await tx.person.update({
        where: { id: person.id },
        data: { userId: user.id },
      });
    } catch {
      /* another listing may already own this user */
    }
  }

  const rank = await rankInTransaction(tx, updated);
  await tx.activity.create({
    data: {
      personId: person.id,
      type: plan.kind === "joined" ? "JOINED" : "RAISED",
      amount: plan.newBidCents,
      rank,
    },
  });
  await tx.rankSnapshot.create({
    data: {
      personId: person.id,
      rank,
      bid: plan.newBidCents,
    },
  });

  return {
    applied: true,
    refund: false,
    username: person.username,
    personId: person.id,
    kind: plan.kind,
    amount: plan.newBidCents,
    categorySlug: person.category.slug,
    bidId: bid.id,
  };
}

export async function ensureProviderRefund(bidId: string | undefined, provider: PaymentProvider = getPaymentProvider()) {
  if (!bidId) return;
  const bid = await prisma.bid.findUnique({ where: { id: bidId }, include: { payment: true } });
  if (!bid || bid.status !== "REFUNDED") return;
  const paymentId = bid.payment?.providerPaymentId;
  if (!paymentId) return;
  try {
    await provider.refund(paymentId);
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (/already been refunded|already_refunded/i.test(message)) return;
    throw error;
  }
}
