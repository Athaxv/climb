import {
  BookOpen,
  Briefcase,
  Building2,
  Code2,
  GitBranch,
  GraduationCap,
  LayoutGrid,
  LineChart,
  Megaphone,
  MoreHorizontal,
  Palette,
  Rocket,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const ICONS: Record<string, LucideIcon> = {
  all: LayoutGrid,
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

export function CategoryChips({
  categories,
  activeSlug,
}: {
  categories: { slug: string; name: string }[];
  activeSlug?: string;
}) {
  const items = [{ slug: "all", name: "All" }, ...categories];

  return (
    <div className="no-scrollbar mx-auto flex w-full max-w-5xl gap-2 overflow-x-auto px-4 pb-1 sm:px-6">
      {items.map((item) => {
        const active = item.slug === "all" ? !activeSlug : activeSlug === item.slug;
        const Icon = ICONS[item.slug] ?? MoreHorizontal;
        const href = item.slug === "all" ? "/" : `/category/${item.slug}`;
        return (
          <Link
            key={item.slug}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-sm transition-colors duration-150 ${
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
  );
}
