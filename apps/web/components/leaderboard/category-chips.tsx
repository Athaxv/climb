"use client";

import {
  BookOpen,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  GraduationCap,
  LayoutGrid,
  LineChart,
  Megaphone,
  MoreHorizontal,
  Palette,
  Rocket,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { climbPath } from "@/lib/climb-url";

const ICONS: Record<string, LucideIcon> = {
  all: LayoutGrid,
  engineering: Code2,
  "ai-data": Sparkles,
  cybersecurity: Shield,
  devops: Cloud,
  founders: Rocket,
  growth: Megaphone,
  sales: Briefcase,
  finance: LineChart,
  product: Building2,
  design: Palette,
  creators: BookOpen,
  students: GraduationCap,
  other: MoreHorizontal,
};

function activeSlugFromPath(pathname: string) {
  const match = pathname.match(/^\/climb\/([^/]+)/);
  return match?.[1] || undefined;
}

export function CategoryChips({ categories }: { categories: { slug: string; name: string }[] }) {
  const pathname = usePathname();
  const activeSlug = activeSlugFromPath(pathname);
  return (
    <Suspense fallback={<CategoryChipRow categories={categories} activeSlug={activeSlug} q="" />}>
      <CategoryChipsFromUrl categories={categories} activeSlug={activeSlug} />
    </Suspense>
  );
}

function CategoryChipsFromUrl({
  categories,
  activeSlug,
}: {
  categories: { slug: string; name: string }[];
  activeSlug?: string;
}) {
  const searchParams = useSearchParams();
  return (
    <CategoryChipRow categories={categories} activeSlug={activeSlug} q={searchParams.get("q") ?? ""} />
  );
}

function CategoryChipRow({
  categories,
  activeSlug,
  q,
}: {
  categories: { slug: string; name: string }[];
  activeSlug?: string;
  q: string;
}) {
  const items = [{ slug: "all", name: "All" }, ...categories];
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [fade, setFade] = useState({ left: false, right: false });

  const updateFade = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setFade({
      left: el.scrollLeft > 1,
      right: max - el.scrollLeft > 1,
    });
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateFade();
    const observer = new ResizeObserver(updateFade);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateFade, items.length]);

  return (
    <div className="mx-auto w-full min-w-0 max-w-5xl px-4 sm:px-6">
      <div className="relative min-w-0 max-w-full">
        <div
          ref={scrollerRef}
          onScroll={updateFade}
          className="no-scrollbar flex max-w-full gap-1.5 overflow-x-auto overscroll-x-contain pb-1"
        >
          {items.map((item) => {
            const active = item.slug === "all" ? !activeSlug : activeSlug === item.slug;
            const Icon = ICONS[item.slug] ?? MoreHorizontal;
            const href = climbPath({
              categorySlug: item.slug === "all" ? undefined : item.slug,
              q,
            });
            return (
              <Link
                key={item.slug}
                href={href}
                scroll={false}
                prefetch
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-2.5 text-[13px] transition-colors duration-150 ${
                  active
                    ? "bg-primary font-medium text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="size-3.5" aria-hidden />
                {item.name}
              </Link>
            );
          })}
        </div>
        {fade.left ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-linear-to-r from-background to-transparent"
          />
        ) : null}
        {fade.right ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-linear-to-l from-background to-transparent"
          />
        ) : null}
      </div>
    </div>
  );
}
