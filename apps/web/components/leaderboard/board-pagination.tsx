import Link from "next/link";

export function BoardPagination({
  page,
  pageCount,
  hrefForPage,
}: {
  page: number;
  pageCount: number;
  hrefForPage: (page: number) => string;
}) {
  if (pageCount <= 1) return null;

  const pages = visiblePages(page, pageCount);

  return (
    <nav className="flex flex-wrap items-center justify-center gap-1 pt-4 pb-2 text-sm" aria-label="Pagination">
      {page > 1 ? (
        <Link
          href={hrefForPage(page - 1)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-3 text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Previous
        </Link>
      ) : (
        <span className="inline-flex min-h-11 min-w-11 items-center justify-center px-3 text-muted-foreground/40">
          Previous
        </span>
      )}
      {pages.map((item, index) =>
        item === "ellipsis" ? (
          <span key={`e-${index}`} className="inline-flex min-h-11 min-w-8 items-center justify-center text-muted-foreground">
            …
          </span>
        ) : (
          <Link
            key={item}
            href={hrefForPage(item)}
            aria-current={item === page ? "page" : undefined}
            className={
              item === page
                ? "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-primary px-3 font-medium text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                : "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-3 text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            }
          >
            {item}
          </Link>
        ),
      )}
      {page < pageCount ? (
        <Link
          href={hrefForPage(page + 1)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-3 text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Next
        </Link>
      ) : (
        <span className="inline-flex min-h-11 min-w-11 items-center justify-center px-3 text-muted-foreground/40">
          Next
        </span>
      )}
    </nav>
  );
}

function visiblePages(page: number, pageCount: number): Array<number | "ellipsis"> {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  const items = new Set<number>([1, pageCount, page, page - 1, page + 1, page - 2, page + 2]);
  const sorted = [...items].filter((value) => value >= 1 && value <= pageCount).sort((a, b) => a - b);
  const result: Array<number | "ellipsis"> = [];
  for (const value of sorted) {
    const last = result[result.length - 1];
    if (typeof last === "number" && value - last > 1) result.push("ellipsis");
    result.push(value);
  }
  return result;
}
