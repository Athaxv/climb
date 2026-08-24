"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { InferredPreview } from "@/components/bidding/infer-confirm";

export type InferStatus = "idle" | "loading" | "ready" | "error";

type InferResponse = InferredPreview & { source?: string };

export function useProfileInfer(identity: string) {
  const [status, setStatus] = useState<InferStatus>("idle");
  const [preview, setPreview] = useState<InferredPreview | null>(null);
  const requestId = useRef(0);

  useEffect(() => {
    const trimmed = identity.trim();
    if (trimmed.length < 8) {
      setStatus("idle");
      setPreview(null);
      return;
    }

    const handle = window.setTimeout(async () => {
      const id = ++requestId.current;
      setStatus("loading");
      try {
        const response = await fetch("/api/profiles/infer", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ identity: trimmed }),
        });
        const data = (await response.json()) as InferResponse & { message?: string };
        if (id !== requestId.current) return;
        if (!response.ok || !data.categorySlug) {
          setPreview({
            fullName: "",
            headline: "",
            categorySlug: "other",
            skills: [],
          });
          setStatus("error");
          return;
        }
        setPreview({
          fullName: data.fullName ?? "",
          headline: data.headline ?? "",
          categorySlug: data.categorySlug,
          skills: Array.isArray(data.skills) ? data.skills.slice(0, 8) : [],
        });
        setStatus("ready");
      } catch {
        if (id !== requestId.current) return;
        setPreview({
          fullName: "",
          headline: "",
          categorySlug: "other",
          skills: [],
        });
        setStatus("error");
      }
    }, 400);

    return () => window.clearTimeout(handle);
  }, [identity]);

  const setCategorySlug = useCallback((slug: string) => {
    setPreview((current) => (current ? { ...current, categorySlug: slug } : current));
  }, []);

  const removeSkill = useCallback((skill: string) => {
    setPreview((current) =>
      current ? { ...current, skills: current.skills.filter((item) => item !== skill) } : current,
    );
  }, []);

  return { status, preview, setCategorySlug, removeSkill };
}
