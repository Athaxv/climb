import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/climb", label: "Leaderboard" },
  { href: "/about", label: "About" },
  { href: "/rules", label: "Rules" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
      <Link
        href="/climb"
        className="flex items-center gap-2 text-[22px] font-medium tracking-tight text-foreground"
      >
        <span
          aria-hidden
          className="grid size-6 place-items-center rounded-md bg-primary text-primary-foreground"
        >
          <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor">
            <path d="M8 2.2 14 13H2L8 2.2Z" />
          </svg>
        </span>
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
  );
}
