import Link from "next/link";
import { ClimbLogo } from "@/components/brand/climb-logo";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-xl px-4 py-24 text-center">
      <ClimbLogo variant="mark" className="mx-auto mb-4 size-8" />
      <h1 className="text-3xl font-bold tracking-tight">Not on the board</h1>
      <p className="mt-3 text-muted-foreground">That page or profile does not exist.</p>
      <Link
        href="/climb"
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-[var(--radius)] bg-primary px-5 text-sm font-semibold text-primary-foreground"
      >
        Back to Climb
      </Link>
    </main>
  );
}
