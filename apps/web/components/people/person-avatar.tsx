"use client";

import Image from "next/image";
import { useState } from "react";
import { cn, hueFromString, initials } from "@/lib/utils";

const OPTIMIZED_HOSTS = new Set([
  "avatars.githubusercontent.com",
  "pbs.twimg.com",
  "abs.twimg.com",
  "media.licdn.com",
]);

function pixelSize(className: string) {
  if (className.includes("size-16")) return 64;
  if (className.includes("size-10")) return 40;
  if (className.includes("size-8")) return 32;
  if (className.includes("size-7")) return 28;
  return 32;
}

function sizedSrc(url: string, size: number) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "avatars.githubusercontent.com") {
      parsed.searchParams.set("s", String(Math.max(size * 2, 80)));
    }
    return parsed.href;
  } catch {
    return url;
  }
}

export function PersonAvatar({
  name,
  username,
  imageUrl,
  className = "size-8",
  priority = false,
}: {
  name: string;
  username: string;
  imageUrl?: string | null;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const hue = hueFromString(username);
  const px = pixelSize(className);
  const src = imageUrl && !failed ? sizedSrc(imageUrl, px) : null;
  let host = "";
  if (src) {
    try {
      host = new URL(src).hostname;
    } catch {
      host = "";
    }
  }

  if (!src) {
    return (
      <div
        className={cn(
          "grid shrink-0 place-items-center rounded-md text-[11px] font-semibold text-white",
          className,
        )}
        style={{ background: `hsl(${hue} 32% 42%)` }}
        aria-hidden
      >
        {initials(name)}
      </div>
    );
  }

  if (OPTIMIZED_HOSTS.has(host)) {
    return (
      <Image
        src={src}
        alt=""
        width={px}
        height={px}
        sizes={`${px}px`}
        priority={priority}
        className={cn("shrink-0 rounded-md object-cover", className)}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      referrerPolicy="no-referrer"
      className={cn("shrink-0 rounded-md object-cover", className)}
      onError={() => setFailed(true)}
    />
  );
}
