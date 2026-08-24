import Image from "next/image";

const GITHUB_URL = "https://github.com/athaxv";
const AVATAR_URL = "https://avatars.githubusercontent.com/athaxv?v=4&s=96";

export function SiteFooter() {
  return (
    <footer className="relative isolate mt-8 w-full overflow-hidden bg-background">
      <Image
        src="/bg.png"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-bottom mix-blend-multiply dark:mix-blend-normal dark:opacity-90 dark:[mask-image:linear-gradient(to_bottom,transparent_0%,black_42%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent dark:h-2/5"
      />
      <div className="relative z-10 flex justify-center px-4 pt-8 pb-2 sm:px-6">
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
