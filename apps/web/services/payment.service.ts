import { Prisma, prisma, getProfileRank } from "@climb/db";
import { decideSuccessfulBid } from "@climb/ranking";
import {
  checkoutLooksFailed,
  checkoutLooksPaid,
  claimThenFulfill,
  getPaymentProvider,
  isUsableDodoWebhookKey,
  planFulfillment,
  quotedChargeCentsFromMetadata,
  type PaymentEvent,
  type PaymentProvider,
} from "@climb/payments";
import { trackEvent } from "@/lib/analytics";
import { AppError, appUrl } from "@/lib/http";
import { invalidateListingCache } from "@/services/listing-cache";
import { planCloneLinkMoves, planListingMerge } from "@/services/listing-merge-core";

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

function isTransientPrismaTx(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  return /Transaction not found|Transaction API error|Unable to start a transaction|P2028|P2024/i.test(message);
}

function isUniqueConflict(error: unknown) {
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") return true;
  const message = error instanceof Error ? error.message : String(error);
  return /Unique constraint failed/i.test(message);
}

export function checkoutReturnUrl(username: string, origin?: string) {
  const path = `/api/checkout/complete?username=${encodeURIComponent(username)}`;
  if (origin) {
    return `${origin.replace(/\/$/, "")}${path}`;
  }
  const template = process.env.DODO_PAYMENTS_RETURN_URL;
  if (template) {
    return template.replaceAll("{username}", username);
  }
  return `${appUrl()}${path}`;
}

export type CheckoutReturnOutcome = "paid" | "failed" | "open";

export async function applyPaidCheckoutReturn(input: {
  username?: string | null;
  sessionId?: string | null;
}): Promise<{ outcome: CheckoutReturnOutcome; email?: string }> {
  const provider = getPaymentProvider();
  if (!provider.isConfigured()) return { outcome: "open" };

  const sessionId = input.sessionId?.trim() || "";
  const username = input.username?.trim() || "";
  const bidInclude = { person: true } as const;

  let bid = sessionId
    ? await prisma.bid.findUnique({
        where: { providerCheckoutId: sessionId },
        include: bidInclude,
      })
    : null;

  if (!bid && username) {
    const person = await prisma.person.findUnique({ where: { username } });
    if (person) {
      bid = await prisma.bid.findFirst({
        where: {
          personId: person.id,
          status: "PENDING",
          providerCheckoutId: { not: null },
        },
        orderBy: { createdAt: "desc" },
        include: bidInclude,
      });
    }
  }

  if (!bid?.providerCheckoutId) return { outcome: "open" };
  if (username && bid.person.username !== username) return { outcome: "failed" };

  let checkout;
  try {
    checkout = await provider.getCheckout(sessionId || bid.providerCheckoutId);
  } catch {
    return { outcome: "open" };
  }

  const status = checkout.paymentStatus || "";
  if (checkoutLooksFailed(status)) {
    return { outcome: "failed", email: checkout.customerEmail };
  }

  const metadataUsername = checkout.metadata.username;
  if (metadataUsername && username && metadataUsername !== username) {
    return { outcome: "failed", email: checkout.customerEmail };
  }

  if (!checkoutLooksPaid(status)) {
    return { outcome: "open", email: checkout.customerEmail };
  }

  if (bid.status === "COMPLETED") {
    return { outcome: "paid", email: checkout.customerEmail };
  }
  if (bid.status !== "PENDING") {
    return { outcome: "open", email: checkout.customerEmail };
  }

  await handlePaymentEvent({
    type: "payment.succeeded",
    eventId: `return:${checkout.checkoutId}`,
    checkoutId: checkout.checkoutId,
    paymentId: checkout.paymentId,
    customerEmail: checkout.customerEmail,
    amountCents: bid.chargeAmountCents,
    metadata: {
      bidId: bid.id,
      chargeAmountCents: String(bid.chargeAmountCents),
      username: bid.person.username,
    },
  });

  return { outcome: "paid", email: checkout.customerEmail };
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
  customerName: string;
  origin?: string;
}) {
  const provider = getPaymentProvider();
  if (!provider.isConfigured()) {
    throw new AppError(
      "payments_not_configured",
      "Payments are not configured. Set DODO_PAYMENTS_API_KEY and DODO_BID_PRODUCT_ID in apps/web/.env, then restart Next.",
      503,
    );
  }

  if (!isUsableDodoWebhookKey(process.env.DODO_PAYMENTS_WEBHOOK_KEY)) {
    console.warn(
      "DODO_PAYMENTS_WEBHOOK_KEY is still a placeholder. Local webhooks will 503 until you paste the Test Mode signing secret and run `pnpm --filter @climb/web dodo:listen`. The checkout return URL can still apply a paid session.",
    );
  }

  const bid = await prisma.bid.create({
    data: {
      personId: input.person.id,
      targetBidCents: input.targetBidCents,
      chargeAmountCents: input.chargeAmountCents,
      status: "PENDING",
      identityInput: input.identity,
      payment: {
        create: {
          personId: input.person.id,
          amount: input.chargeAmountCents,
          currency: "usd",
          provider: "DODO",
          status: "PENDING",
        },
      },
    },
  });

  try {
    const checkout = await provider.createCheckout({
      amountCents: input.chargeAmountCents,
      currency: "usd",
      customerName: input.customerName,
      returnUrl: checkoutReturnUrl(input.person.username, input.origin),
      metadata: {
        bidId: bid.id,
        personId: input.person.id,
        username: input.person.username,
        targetBidCents: String(input.targetBidCents),
        chargeAmountCents: String(input.chargeAmountCents),
      },
    });

    await prisma.$transaction([
      prisma.bid.update({
        where: { id: bid.id },
        data: { providerCheckoutId: checkout.checkoutId },
      }),
      prisma.payment.update({
        where: { bidId: bid.id },
        data: { providerCheckoutId: checkout.checkoutId },
      }),
    ]);

    void trackEvent("checkout_created", {
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
    await prisma.$transaction([
      prisma.bid.update({
        where: { id: bid.id },
        data: { status: "FAILED" },
      }),
      prisma.payment.update({
        where: { bidId: bid.id },
        data: { status: "FAILED" },
      }),
    ]);
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
  const run = () =>
    prisma.$transaction(
      async (tx) => {
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
      },
      { maxWait: 5_000, timeout: 8_000 },
    );

  try {
    try {
      result = await run();
    } catch (error) {
      if (!isTransientPrismaTx(error)) throw error;
      result = await run();
    }
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
    try {
      const rank = await getProfileRank(result.personId);
      await prisma.$transaction([
        prisma.activity.create({
          data: {
            personId: result.personId,
            type: result.kind === "joined" ? "JOINED" : "RAISED",
            amount: result.amount,
            rank,
          },
        }),
        prisma.rankSnapshot.create({
          data: {
            personId: result.personId,
            rank,
            bid: result.amount,
          },
        }),
      ]);
    } catch (error) {
      console.error(error);
    }
    await invalidateListingCache(result.username, result.categorySlug);
    void trackEvent("payment_success", { bidId: event.metadata.bidId, username: result.username });
    void trackEvent("rank_changed", { username: result.username });
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
    quotedChargeCents: quotedChargeCentsFromMetadata(event.metadata),
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
  const payerPatch = user?.id ? { userId: user.id } : {};

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
        ...payerPatch,
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
        ...payerPatch,
      },
    });
    return { refund: true, username: person.username, bidId: bid.id };
  }

  const owned =
    user != null
      ? await tx.person.findUnique({
          where: { userId: user.id },
          include: { category: true, socialLinks: true },
        })
      : null;

  let target = person;
  let appliedBidCents = plan.newBidCents;
  let kind = plan.kind;
  let cloneId: string | null = null;

  if (owned && owned.id !== person.id) {
    await tx.$executeRaw`SELECT id FROM "Person" WHERE id = ${owned.id} FOR UPDATE`;
    const merge = planListingMerge({
      owner: { id: owned.id, currentBid: owned.currentBid },
      clone: { id: person.id, currentBid: person.currentBid },
      newBidCents: plan.newBidCents,
    });
    const cloneLinks = await tx.socialLink.findMany({ where: { personId: person.id } });
    const moves = planCloneLinkMoves({
      ownerLinks: owned.socialLinks,
      cloneLinks,
    });
    for (const move of moves) {
      if (move.action === "drop") {
        await tx.socialLink.delete({ where: { id: move.linkId } });
      } else {
        await tx.socialLink.update({
          where: { id: move.linkId },
          data: { personId: owned.id },
        });
      }
    }
    const cloneSkills = await tx.personSkill.findMany({ where: { personId: person.id } });
    for (const row of cloneSkills) {
      await tx.personSkill.upsert({
        where: { personId_skillId: { personId: owned.id, skillId: row.skillId } },
        create: { personId: owned.id, skillId: row.skillId },
        update: {},
      });
    }
    await tx.bid.updateMany({ where: { personId: person.id }, data: { personId: owned.id } });
    await tx.payment.updateMany({ where: { personId: person.id }, data: { personId: owned.id } });
    target = owned;
    appliedBidCents = merge.appliedBidCents;
    kind = merge.kind;
    cloneId = merge.deleteClone ? person.id : null;
    if (merge.shouldUpdateBid) {
      await tx.person.update({
        where: { id: owned.id },
        data: { currentBid: appliedBidCents, currentBidAt: new Date() },
      });
    }
  } else {
    await tx.person.update({
      where: { id: person.id },
      data: {
        currentBid: plan.newBidCents,
        currentBidAt: new Date(),
      },
    });
  }

  const updated = await tx.person.findUniqueOrThrow({
    where: { id: target.id },
    include: { category: true },
  });

  await tx.bid.update({
    where: { id: bid.id },
    data: {
      userId: user?.id ?? bid.userId,
      personId: target.id,
      status: "COMPLETED",
      ...checkoutPatch,
    },
  });
  await tx.payment.update({
    where: { bidId: bid.id },
    data: {
      personId: target.id,
      status: "SUCCEEDED",
      providerPaymentId: paymentId,
      ...checkoutPatch,
      ...payerPatch,
    },
  });

  if (!updated.userId && user) {
    try {
      await tx.person.update({
        where: { id: updated.id },
        data: { userId: user.id },
      });
    } catch {
      /* another listing may already own this user */
    }
  }

  if (cloneId) {
    await tx.person.delete({ where: { id: cloneId } });
  }

  return {
    applied: true,
    refund: false,
    username: updated.username,
    personId: updated.id,
    kind,
    amount: appliedBidCents,
    categorySlug: updated.category.slug,
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
