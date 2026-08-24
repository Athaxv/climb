export type CategoryGroup = "technology" | "business" | "product" | "other";

export type ClimbCategory = {
  slug: string;
  name: string;
  group: CategoryGroup;
  sortOrder: number;
  headline: string;
  description: string;
};

export const CATEGORIES: ClimbCategory[] = [
  {
    slug: "engineering",
    name: "Engineering",
    group: "technology",
    sortOrder: 10,
    headline: "Top Engineering People",
    description: "Discover the people climbing the Engineering leaderboard on Climb.",
  },
  {
    slug: "ai-data",
    name: "AI & Data",
    group: "technology",
    sortOrder: 20,
    headline: "Top AI & Data People",
    description: "Discover the people climbing the AI & Data leaderboard on Climb.",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    group: "technology",
    sortOrder: 30,
    headline: "Top Cybersecurity People",
    description: "Discover the people climbing the Cybersecurity leaderboard on Climb.",
  },
  {
    slug: "devops",
    name: "DevOps & Cloud",
    group: "technology",
    sortOrder: 40,
    headline: "Top DevOps & Cloud People",
    description: "Discover the people climbing the DevOps & Cloud leaderboard on Climb.",
  },
  {
    slug: "founders",
    name: "Founders & Entrepreneurship",
    group: "business",
    sortOrder: 50,
    headline: "Top Founders & Entrepreneurship People",
    description: "Discover the people climbing the Founders & Entrepreneurship leaderboard on Climb.",
  },
  {
    slug: "growth",
    name: "Growth & Marketing",
    group: "business",
    sortOrder: 60,
    headline: "Top Growth & Marketing People",
    description: "Discover the people climbing the Growth & Marketing leaderboard on Climb.",
  },
  {
    slug: "sales",
    name: "Sales & Business Development",
    group: "business",
    sortOrder: 70,
    headline: "Top Sales & Business Development People",
    description: "Discover the people climbing the Sales & Business Development leaderboard on Climb.",
  },
  {
    slug: "finance",
    name: "Finance",
    group: "business",
    sortOrder: 80,
    headline: "Top Finance People",
    description: "Discover the people climbing the Finance leaderboard on Climb.",
  },
  {
    slug: "product",
    name: "Product",
    group: "product",
    sortOrder: 90,
    headline: "Top Product People",
    description: "Discover the people climbing the Product leaderboard on Climb.",
  },
  {
    slug: "design",
    name: "Design",
    group: "product",
    sortOrder: 100,
    headline: "Top Design People",
    description: "Discover the people climbing the Design leaderboard on Climb.",
  },
  {
    slug: "creators",
    name: "Content & Creators",
    group: "product",
    sortOrder: 110,
    headline: "Top Content & Creators People",
    description: "Discover the people climbing the Content & Creators leaderboard on Climb.",
  },
  {
    slug: "students",
    name: "Student & Early Career",
    group: "other",
    sortOrder: 120,
    headline: "Top Student & Early Career People",
    description: "Discover the people climbing the Student & Early Career leaderboard on Climb.",
  },
  {
    slug: "other",
    name: "Other",
    group: "other",
    sortOrder: 130,
    headline: "Top People on Climb",
    description: "Discover the people climbing the Other leaderboard on Climb.",
  },
];

export const LEGACY_CATEGORY_SLUGS: Record<string, string> = {
  "software-engineering": "engineering",
  "ai-ml": "ai-data",
  founder: "founders",
  startup: "founders",
  marketing: "growth",
  creator: "creators",
  student: "students",
  "open-source": "engineering",
};

const bySlug = new Map(CATEGORIES.map((category) => [category.slug, category]));

export function isCategorySlug(slug: string): boolean {
  return bySlug.has(slug);
}

export function getClimbCategory(slug: string): ClimbCategory | undefined {
  return bySlug.get(slug);
}

export function resolveCategorySlug(slug: string): string | null {
  if (bySlug.has(slug)) return slug;
  return LEGACY_CATEGORY_SLUGS[slug] ?? null;
}
