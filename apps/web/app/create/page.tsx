import { cookies } from "next/headers";
import { getCategories } from "@climb/db";
import { CheckoutForm } from "@/components/bidding/checkout-form";
import { SESSION_COOKIE, readSession } from "@/lib/auth/session";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claim your spot",
  description: "Create a Climb profile and bid for rank.",
};

type Props = {
  searchParams: Promise<{ name?: string; category?: string; bid?: string; canceled?: string }>;
};

export default async function CreatePage({ searchParams }: Props) {
  const params = await searchParams;
  const categories = await getCategories();
  const jar = await cookies();
  const session = await readSession(jar.get(SESSION_COOKIE)?.value);

  return (
    <main id="main" className="mx-auto w-full max-w-xl px-4 pb-16 sm:px-6">
      <h1 className="text-center text-3xl font-bold tracking-tight">Claim your spot</h1>
      <p className="mt-4 text-center text-[17px] leading-7 text-muted-foreground">
        Pay to join the board on your own handle, or raise a listing you already own. Rank only moves after
        payment is confirmed.
      </p>
      <CheckoutForm
        name={params.name ?? ""}
        category={params.category ?? ""}
        bid={params.bid ?? ""}
        canceled={params.canceled === "1"}
        sessionEmail={session?.email}
        categories={categories.map((category) => ({ slug: category.slug, name: category.name }))}
      />
    </main>
  );
}
