import { getCategories } from "@climb/db";
import {
  BookOpen,
  Briefcase,
  Building2,
  Code2,
  GitBranch,
  GraduationCap,
  LineChart,
  Megaphone,
  MoreHorizontal,
  Palette,
  Rocket,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse Climb leaderboards by category.",
};

const ICONS: Record<string, LucideIcon> = {
  "software-engineering": Code2,
  "ai-ml": Sparkles,
  founder: Rocket,
  startup: Building2,
  product: Briefcase,
  design: Palette,
  marketing: Megaphone,
  finance: LineChart,
  creator: BookOpen,
  student: GraduationCap,
  "open-source": GitBranch,
  other: MoreHorizontal,
};

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
      <p className="mt-2 text-muted-foreground">One primary category per person. Pick a board and climb it.</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {categories.map((category) => {
          const Icon = ICONS[category.slug] ?? MoreHorizontal;
          return (
            <li key={category.id}>
              <Link
                href={`/category/${category.slug}`}
                className="flex items-center justify-between rounded-[var(--radius)] border border-border bg-card px-4 py-4 hover:border-primary/30"
              >
                <span className="flex items-center gap-3 font-medium">
                  <Icon className="size-4 text-primary" aria-hidden />
                  {category.name}
                </span>
                <span className="text-sm text-muted-foreground">{category._count.people} people</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
