import { Prisma, prisma, getProfileRank } from "@climb/db";
import { decideSuccessfulBid, completedPaymentActivatesListing } from "@climb/ranking";
import {
  checkoutLooksFailed,
  checkoutLooksPaid,
  claimThenFulfill,
  getPaymentProvider,
  isUsableDodoWebhookKey,
  parseCheckoutReturnQuery,
  planFulfillment,
  quotedChargeCentsFromMetadata,
  returnEventId,
  shouldClaimPaymentEvent,
  waitForSettledPaymentStatus,
  type PaymentEvent,
  type PaymentProvider,
  type RetrievedCheckout,
  type RetrievedPayment,
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

function climbLog(tag: string, message: string, fields: Record<string, string | number | boolean | null | undefined> = {}) {
  const body = Object.entries(fields)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join(" ");
  console.info(`[CLIMB]${tag} ${message}${body ? ` ${body}` : ""}`);
}

function isTransientPrismaTx(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  return /Transaction not found|Transaction API error|Unable to start a transaction|P2028|P2024/i.test(message);
}

function isUniqueConflict(error: unknown) {
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") return true;
  const message = error instanceof Error ? error.message : String(error);
  return /Unique constraint failed/i.test(message);
}

export function checkoutReturnUrl(username: string, origin?: string, bidId?: string) {
  const params = new URLSearchParams({ username });
  if (bidId) params.set("bidId", bidId);
  const path = `/api/checkout/complete?${params.toString()}`;
  if (origin) {
    return `${origin.replace(/\/$/, "")}${path}`;
  }
  const template = process.env.DODO_PAYMENTS_RETURN_URL;
  if (template) {
    return template.replaceAll("{username}", username).replaceAll("{bidId}", bidId ?? "");
  }
  return `${appUrl()}${path}`;
}

export type CheckoutReturnOutcome = "paid" | "failed" | "open";

const bidInclude = { person: true } as const;

async function retrievePaymentSafe(provider: PaymentProvider, paymentId: string): Promise<RetrievedPayment | null> {
  try {
    return await provider.getPayment(paymentId);
  } catch {
    climbLog("[DODO]", "payment retrieve failed", { paymentId });
    return null;
  }
}

async function loadReturnBid(input: {
  bidId: string;
  checkoutId: string;
  username: string;
}) {
  if (input.bidId) {
    const byId = await prisma.bid.findUnique({
      where: { id: input.bidId },
      include: bidInclude,
    });
    if (byId) return byId;
  }
  if (input.checkoutId) {
    const byCheckout = await prisma.bid.findUnique({
      where: { providerCheckoutId: input.checkoutId },
      include: bidInclude,
    });
    if (byCheckout) return byCheckout;
  }
  if (!input.username) return null;
  const person = await prisma.person.findUnique({ where: { username: input.username } });
  if (!person) return null;
  return prisma.bid.findFirst({
    where: {
      personId: person.id,
      status: "PENDING",
      providerCheckoutId: { not: null },
    },
    orderBy: { createdAt: "desc" },
    include: bidInclude,
  });
}

export async function applyPaidCheckoutReturn(input: {
  username?: string | null;
  sessionId?: string | null;
  paymentId?: string | null;
  bidId?: string | null;
  status?: string | null;
}): Promise<{ outcome: CheckoutReturnOutcome; email?: string }> {
  const provider = getPaymentProvider();
  if (!provider.isConfigured()) return { outcome: "open" };

  const query = parseCheckoutReturnQuery(input);
  let retrieved = query.paymentId ? await retrievePaymentSafe(provider, query.paymentId) : null;
  if (retrieved && !checkoutLooksPaid(retrieved.paymentStatus) && !checkoutLooksFailed(retrieved.paymentStatus)) {
    retrieved = await waitForSettledPaymentStatus({
      initial: retrieved,
      read: async () => (await retrievePaymentSafe(provider, query.paymentId)) ?? retrieved!,
    });
  }

  const bidId = query.bidId || retrieved?.metadata.bidId || "";
  const checkoutId = query.sessionId || retrieved?.checkoutId || "";
  const resolvedViaStableId = Boolean(bidId || checkoutId || retrieved);
  const bid = await loadReturnBid({ bidId, checkoutId, username: query.username });

  if (!bid) {
    climbLog("[DODO]", "checkout return unmatched", {
      bidId: bidId || null,
      paymentId: query.paymentId || null,
      checkoutId: checkoutId || null,
    });
    return { outcome: "open" };
  }

  if (!resolvedViaStableId && query.username && bid.person.username !== query.username) {
    return { outcome: "failed" };
  }

  let paymentStatus = retrieved?.paymentStatus ?? "";
  let paymentId = retrieved?.paymentId || query.paymentId;
  let customerEmail = retrieved?.customerEmail;
  let eventCheckoutId = retrieved?.checkoutId || bid.providerCheckoutId || checkoutId;
  let verifiedWithProvider = Boolean(retrieved);

  if (!checkoutLooksPaid(paymentStatus) && !checkoutLooksFailed(paymentStatus)) {
    const sessionKey = eventCheckoutId || bid.providerCheckoutId;
    if (sessionKey) {
      try {
        let checkout: RetrievedCheckout = await provider.getCheckout(sessionKey);
        verifiedWithProvider = true;
        if (!checkoutLooksPaid(checkout.paymentStatus) && !checkoutLooksFailed(checkout.paymentStatus)) {
          checkout = await waitForSettledPaymentStatus({
            initial: checkout,
            read: () => provider.getCheckout(sessionKey),
          });
        }
        paymentStatus = checkout.paymentStatus || paymentStatus;
        paymentId = checkout.paymentId ?? paymentId;
        customerEmail = checkout.customerEmail ?? customerEmail;
        eventCheckoutId = checkout.checkoutId || eventCheckoutId;
        if (checkout.paymentId && !checkoutLooksPaid(paymentStatus) && !checkoutLooksFailed(paymentStatus)) {
          const fromPay = await retrievePaymentSafe(provider, checkout.paymentId);
          if (fromPay) {
            retrieved = fromPay;
            paymentStatus = fromPay.paymentStatus;
            customerEmail = fromPay.customerEmail ?? customerEmail;
            eventCheckoutId = fromPay.checkoutId || eventCheckoutId;
            paymentId = fromPay.paymentId || paymentId;
          }
        }
      } catch {
        if (!verifiedWithProvider) {
          return { outcome: "open" };
        }
      }
    }
  }

  if (!verifiedWithProvider) {
    return { outcome: "open", email: customerEmail };
  }

  if (checkoutLooksFailed(paymentStatus)) {
    return { outcome: "failed", email: customerEmail };
  }
  if (!checkoutLooksPaid(paymentStatus)) {
    return { outcome: "open", email: customerEmail };
  }
  if (bid.status === "COMPLETED") {
    return { outcome: "paid", email: customerEmail };
  }
  if (bid.status !== "PENDING") {
    return { outcome: "open", email: customerEmail };
  }

  climbLog("[DODO]", "checkout return applying", {
    bidId: bid.id,
    personId: bid.personId,
    paymentId: paymentId || null,
  });

  await handlePaymentEvent({
    type: "payment.succeeded",
    eventId: returnEventId({ checkoutId: eventCheckoutId, paymentId }),
    checkoutId: eventCheckoutId || undefined,
    paymentId: paymentId || undefined,
    customerEmail,
    amountCents: bid.chargeAmountCents,
    metadata: {
      bidId: bid.id,
      personId: bid.personId,
      chargeAmountCents: String(bid.chargeAmountCents),
      username: bid.person.username,
    },
  });

  return { outcome: "paid", email: customerEmail };
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
      returnUrl: checkoutReturnUrl(input.person.username, input.origin, bid.id),
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

    climbLog("", "checkout created", {
      personId: input.person.id,
      bidId: bid.id,
      targetBidCents: input.targetBidCents,
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
  if (event.paymentId) {
    const pay = await tx.payment.findUnique({
      where: { providerPaymentId: event.paymentId },
      select: { bidId: true },
    });
    if (pay) {
      const byPayment = await tx.bid.findUnique({
        where: { id: pay.bidId },
        include: { payment: true },
      });
      if (byPayment) return byPayment;
    }
  }
  return null;
}

export async function handlePaymentEvent(event: PaymentEvent): Promise<ApplyResult> {
  climbLog("[DODO]", "webhook received", {
    eventId: event.eventId,
    paymentId: event.paymentId ?? null,
    type: event.type,
  });

  if (!shouldClaimPaymentEvent(event.type)) {
    climbLog("[DODO]", "webhook ignored", { eventId: event.eventId });
    return {};
  }

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
  if (!bid) {
    climbLog("[DODO]", "payment unmatched", {
      eventId: event.eventId,
      paymentId: event.paymentId ?? null,
      checkoutId: event.checkoutId ?? null,
      bidId: event.metadata.bidId || null,
    });
    return {};
  }

  climbLog("[DODO]", "payment matched", {
    paymentDbId: bid.payment?.id ?? null,
    bidId: bid.id,
    personId: bid.personId,
  });

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
    quotedChargeCents: quotedChargeCentsFromMetadata(event.metadata) ?? bid.chargeAmountCents,
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

  const appliedBidCents = plan.newBidCents;
  const kind = plan.kind;

  climbLog("[DODO]", "activating person", {
    personId: person.id,
    oldCurrentBid: person.currentBid,
    newCurrentBid: appliedBidCents,
  });
  await tx.person.update({
    where: { id: person.id },
    data: {
      currentBid: appliedBidCents,
      currentBidAt: new Date(),
    },
  });

  const updated = await tx.person.findUniqueOrThrow({
    where: { id: person.id },
    include: { category: true },
  });

  if (
    plan.action === "apply" &&
    !completedPaymentActivatesListing({
      bidStatus: "COMPLETED",
      currentBidCents: updated.currentBid,
      targetBidCents: appliedBidCents,
    })
  ) {
    throw new Error("listing activation invariant violated: completed payment left currentBid at 0");
  }

  climbLog("[DODO]", "person activated", {
    personId: updated.id,
    currentBid: updated.currentBid,
    currentBidAt: updated.currentBidAt?.toISOString() ?? null,
  });

  await tx.bid.update({
    where: { id: bid.id },
    data: {
      userId: user?.id ?? bid.userId,
      personId: person.id,
      status: "COMPLETED",
      ...checkoutPatch,
    },
  });
  await tx.payment.update({
    where: { bidId: bid.id },
    data: {
      personId: person.id,
      status: "SUCCEEDED",
      providerPaymentId: paymentId,
      ...checkoutPatch,
      ...payerPatch,
    },
  });

  if (!updated.userId && user) {
    await tx.person.update({
      where: { id: updated.id },
      data: { userId: user.id },
    });
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
