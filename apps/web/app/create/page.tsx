import { getCategories } from "@climb/db";
import { CheckoutForm } from "@/components/bidding/checkout-form";
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

  return (
    <main id="main" className="mx-auto w-full max-w-xl px-4 pb-16 sm:px-6">
      <h1 className="text-center text-3xl font-bold tracking-tight">Claim your spot</h1>
      <p className="mt-4 text-center text-[17px] leading-7 text-muted-foreground">
        Pay to join or raise any listing with a LinkedIn, GitHub, X, or website URL. Rank only moves after
        payment is confirmed.
      </p>
      <CheckoutForm
        name={params.name ?? ""}
        category={params.category ?? ""}
        bid={params.bid ?? ""}
        canceled={params.canceled === "1"}
        categories={categories.map((category) => ({ slug: category.slug, name: category.name }))}
      />
    </main>
  );
}
