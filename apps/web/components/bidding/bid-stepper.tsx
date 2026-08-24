"use client";

import { Minus, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const MAX_BID_DOLLARS = 999_999;

function ControlButton({
  label,
  disabled,
  onClick,
  className,
  children,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "grid size-11 shrink-0 cursor-pointer place-items-center text-primary transition-[transform,opacity] duration-150 hover:opacity-80 active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:opacity-35 disabled:active:scale-100 motion-reduce:transition-none motion-reduce:active:scale-100",
        className,
      )}
    >
      <span className="grid size-8 place-items-center rounded-full bg-primary/15 text-primary" aria-hidden>
        {children}
      </span>
    </button>
  );
}

export function BidStepper({
  id,
  value,
  min,
  onChange,
  labelledBy,
  className,
}: {
  id: string;
  value: number;
  min: number;
  onChange: (next: number) => void;
  labelledBy?: string;
  className?: string;
}) {
  const floor = Math.max(1, min);
  const clamped = Math.min(MAX_BID_DOLLARS, Math.max(floor, value));

  function setRaw(next: number) {
    if (!Number.isFinite(next)) {
      onChange(floor);
      return;
    }
    onChange(Math.min(MAX_BID_DOLLARS, Math.max(floor, Math.trunc(next))));
  }

  return (
    <div className={cn("inline-flex shrink-0 items-center justify-center gap-0", className)}>
      <ControlButton
        label="Decrease bid by one dollar"
        disabled={clamped <= floor}
        onClick={() => setRaw(clamped - 1)}
        className="-mr-1.5"
      >
        <Minus className="size-3.5" strokeWidth={2.75} />
      </ControlButton>
      <div className="flex w-fit items-center justify-start text-primary">
        <span className="text-xl font-bold tracking-tight leading-tight sm:text-2xl" aria-hidden>
          $
        </span>
        <input
          id={id}
          inputMode="numeric"
          aria-labelledby={labelledBy}
          aria-label={labelledBy ? undefined : "Your bid in dollars"}
          value={value}
          onChange={(event) => {
            const next = Number.parseInt(event.target.value.replace(/\D/g, ""), 10);
            onChange(Number.isNaN(next) ? floor : next);
          }}
          onBlur={() => setRaw(value)}
          className="field-sizing-content w-auto min-w-[0.6em] bg-transparent p-0 text-xl font-bold tracking-tight text-primary tabular-nums outline-none leading-tight sm:text-2xl focus-visible:underline focus-visible:decoration-primary/40 focus-visible:underline-offset-4"
        />
      </div>
      <ControlButton
        label="Increase bid by one dollar"
        disabled={clamped >= MAX_BID_DOLLARS}
        onClick={() => setRaw(clamped + 1)}
        className="-ml-1.5"
      >
        <Plus className="size-3.5" strokeWidth={2.75} />
      </ControlButton>
    </div>
  );
}
