"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main" className="mx-auto flex min-h-[50vh] w-full max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-2xl font-bold tracking-tight">Something went wrong</h1>
      <p className="mt-3 text-[17px] leading-7 text-muted-foreground">
        The page failed to load. Try again, or go back to the board.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="min-h-11 cursor-pointer rounded-[var(--radius)] bg-primary px-5 text-sm font-semibold text-primary-foreground"
        >
          Try again
        </button>
        <Link
          href="/climb"
          className="min-h-11 rounded-[var(--radius)] border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
        >
          Back to Climb
        </Link>
      </div>
    </main>
  );
}
