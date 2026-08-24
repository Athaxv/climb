import { resolveCategorySlug } from "@climb/db";
import { climbPath } from "@/lib/climb-url";
import { notFound, redirect } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ q?: string }>;
};

export default async function LegacyCategoryRedirect({ params, searchParams }: Props) {
  const { slug } = await params;
  const mapped = resolveCategorySlug(slug);
  if (!mapped) notFound();
  const { q } = await searchParams;
  redirect(climbPath({ categorySlug: mapped, q }));
}
