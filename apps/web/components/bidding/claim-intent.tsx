"use client";

import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useMemo, useRef } from "react";

export const CLIMB_CLAIM_ID = "climb-claim";

export type ClaimIntent = {
  category: string;
  bid: number;
};

export function claimHomeHref(intent: ClaimIntent) {
  const params = new URLSearchParams({
    category: intent.category,
    bid: String(intent.bid),
  });
  return `/climb?${params.toString()}#${CLIMB_CLAIM_ID}`;
}

type ClaimIntentContextValue = {
  focusClaim: (intent: ClaimIntent) => void;
  subscribe: (handler: (intent: ClaimIntent) => void) => () => void;
};

const ClaimIntentContext = createContext<ClaimIntentContextValue | null>(null);

export function ClaimIntentProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const handlersRef = useRef(new Set<(intent: ClaimIntent) => void>());

  const subscribe = useCallback((handler: (intent: ClaimIntent) => void) => {
    handlersRef.current.add(handler);
    return () => {
      handlersRef.current.delete(handler);
    };
  }, []);

  const focusClaim = useCallback(
    (intent: ClaimIntent) => {
      if (handlersRef.current.size > 0) {
        handlersRef.current.forEach((handler) => handler(intent));
        return;
      }
      router.push(claimHomeHref(intent));
    },
    [router],
  );

  const value = useMemo(() => ({ focusClaim, subscribe }), [focusClaim, subscribe]);

  return <ClaimIntentContext.Provider value={value}>{children}</ClaimIntentContext.Provider>;
}

export function useFocusClaim() {
  const ctx = useContext(ClaimIntentContext);
  const router = useRouter();
  return (
    ctx?.focusClaim ??
    ((intent: ClaimIntent) => {
      router.push(claimHomeHref(intent));
    })
  );
}

export function useSubscribeClaimIntent() {
  const ctx = useContext(ClaimIntentContext);
  return ctx?.subscribe ?? (() => () => {});
}
