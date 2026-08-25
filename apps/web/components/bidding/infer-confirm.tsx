"use client";

export type InferredPreview = {
  fullName: string;
  headline: string;
  categorySlug: string;
  skills: string[];
  imageUrl?: string;
  bio?: string;
  location?: string;
};

export function InferConfirm({ status }: { status: "idle" | "loading" | "ready" | "error" }) {
  if (status !== "loading") return null;

  return (
    <p className="flex items-center gap-2 text-left text-sm text-muted-foreground" aria-live="polite">
      <span
        className="climb-spin size-3.5 shrink-0 rounded-full border-2 border-muted-foreground/30 border-t-muted-foreground"
        aria-hidden
      />
      Reading profile…
    </p>
  );
}
