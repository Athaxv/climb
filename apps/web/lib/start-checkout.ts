export type CheckoutRequest = {
  identity: string;
  category?: string;
  name?: string;
  headline?: string;
  skills?: string;
  imageUrl?: string;
  bio?: string;
  location?: string;
  targetBid: number;
};

export type CheckoutResult =
  | { ok: true; url: string }
  | { ok: false; error?: string; message: string };

export async function startCheckout(input: CheckoutRequest): Promise<CheckoutResult> {
  try {
    const response = await fetch("/api/bids/checkout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        identity: input.identity,
        ...(input.category?.trim() ? { category: input.category.trim() } : {}),
        ...(input.name?.trim() ? { name: input.name.trim() } : {}),
        ...(input.headline?.trim() ? { headline: input.headline.trim() } : {}),
        ...(input.skills?.trim() ? { skills: input.skills.trim() } : {}),
        ...(input.imageUrl?.trim() ? { imageUrl: input.imageUrl.trim() } : {}),
        ...(input.bio?.trim() ? { bio: input.bio.trim() } : {}),
        ...(input.location?.trim() ? { location: input.location.trim() } : {}),
        targetBid: input.targetBid,
      }),
    });
    const data = (await response.json()) as { url?: string; message?: string; error?: string };
    if (!response.ok || !data.url) {
      return {
        ok: false,
        error: data.error,
        message: data.message || "Could not start checkout.",
      };
    }
    return { ok: true, url: data.url };
  } catch {
    return { ok: false, message: "Could not start checkout." };
  }
}
