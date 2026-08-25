import Image from "next/image";
import { ClimbLogo } from "@/components/brand/climb-logo";

const GITHUB_URL = "https://github.com/athaxv";
const AVATAR_URL = "https://avatars.githubusercontent.com/athaxv?v=4&s=96";

export function SiteFooter() {
  return (
    <footer className="relative isolate mt-16 w-full overflow-hidden bg-background sm:mt-24">
      <Image
        src="/bg.png"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-bottom mix-blend-multiply dark:hidden"
      />
      <Image
        src="/bg2.png"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="pointer-events-none hidden object-cover object-bottom dark:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent"
      />
      <div className="relative z-10 mx-auto max-w-lg px-4 pt-8 text-center sm:px-6">
        <ClimbLogo variant="mark" className="mx-auto mb-3 size-7" />
        <h2 className="text-balance text-lg font-semibold tracking-tight sm:text-xl">
          <span className="text-primary">Get discovered.</span>{" "}
          <span className="text-foreground">No ads.</span>
        </h2>
        <p className="mt-2 text-balance text-sm leading-6 text-muted-foreground sm:text-base">
          Highest bid plus real views puts you first.
        </p>
      </div>
      <div className="relative z-10 flex justify-center px-4 pt-4 pb-2 sm:px-6">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full px-2 py-1 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Image
            src={AVATAR_URL}
            alt="athaxv"
            width={40}
            height={40}
            className="size-10 rounded-full ring-2 ring-primary/25"
          />
          <span>
            built by <span className="font-medium text-foreground">@athaxv</span>
          </span>
        </a>
      </div>
      <div className="relative h-40 sm:h-52" aria-hidden />
    </footer>
  );
}
