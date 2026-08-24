export function climbPath(input?: { categorySlug?: string | null; q?: string | null; page?: number | null }) {
  const path = input?.categorySlug ? `/climb/${input.categorySlug}` : "/climb";
  const params = new URLSearchParams();
  const q = input?.q?.trim();
  if (q) params.set("q", q);
  if (input?.page && input.page > 1) params.set("page", String(input.page));
  const qs = params.toString();
  return qs ? `${path}?${qs}` : path;
}

export function parseBoardSearch(searchParams: { q?: string; page?: string }) {
  const q = searchParams.q?.trim() ?? "";
  return {
    q: q.length >= 2 ? q : "",
    page: parsePage(searchParams.page),
  };
}

export function parsePage(raw?: string) {
  const pageRaw = Number.parseInt(raw ?? "1", 10);
  return Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1;
}

export function pageHref(path: string, page: number) {
  return page > 1 ? `${path}?page=${page}` : path;
}
