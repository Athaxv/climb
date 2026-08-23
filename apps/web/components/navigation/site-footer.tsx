import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-16 w-full max-w-5xl px-4 pb-12 text-sm text-muted-foreground sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        <p>Climb — the public leaderboard for ambitious people.</p>
        <div className="flex gap-4">
          <Link href="/rules" className="hover:text-foreground">
            Rules
          </Link>
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/trending" className="hover:text-foreground">
            Trending
          </Link>
          <Link href="/rising" className="hover:text-foreground">
            Rising
          </Link>
        </div>
      </div>
    </footer>
  );
}
