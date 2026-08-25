import { cn } from "@/lib/utils";

function RisingBars() {
  return (
    <>
      <rect x="2" y="12" width="5" height="10" rx="1.5" />
      <rect x="9.5" y="8" width="5" height="14" rx="1.5" />
      <rect x="17" y="2" width="5" height="20" rx="1.5" />
    </>
  );
}

type ClimbLogoProps = {
  variant?: "mark" | "tile";
  className?: string;
};

export function ClimbLogo({ variant = "mark", className }: ClimbLogoProps) {
  if (variant === "tile") {
    return (
      <svg
        viewBox="0 0 32 32"
        className={cn("size-8", className)}
        aria-hidden
      >
        <rect width="32" height="32" rx="8" className="fill-primary" />
        <g className="fill-primary-foreground" transform="translate(4 4)">
          <RisingBars />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-6 text-primary", className)}
      fill="currentColor"
      aria-hidden
    >
      <RisingBars />
    </svg>
  );
}
