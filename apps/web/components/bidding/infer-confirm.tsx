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
    <p className="text-left text-sm text-muted-foreground" aria-live="polite">
      Reading profile…
    </p>
  );
}
