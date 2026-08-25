import Link from "next/link";
import { ClimbLogo } from "@/components/brand/climb-logo";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/climb", label: "Leaderboard" },
  { href: "/about", label: "About" },
  { href: "/rules", label: "Rules" },
];

export function SiteHeader() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl dark:bg-primary/25"
      />
      <header className="relative mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/climb"
          className="flex min-h-11 items-center gap-2 text-[22px] font-medium tracking-tight text-foreground"
        >
          <ClimbLogo variant="mark" className="size-6" />
          Climb
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-1 sm:gap-2" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:px-2.5"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </header>
    </div>
  );
}
