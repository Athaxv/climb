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
  const pageRaw = Number.parseInt(searchParams.page ?? "1", 10);
  return {
    q: q.length >= 2 ? q : "",
    page: Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1,
  };
}
