import { cpSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

/** Next's bundled Prisma client looks in process.cwd()/src/generated/client (apps/web). */
const here = dirname(fileURLToPath(import.meta.url));
const from = join(here, "../src/generated/client");
const to = join(here, "../../../apps/web/src/generated/client");

if (!existsSync(from)) {
  console.warn("skip prisma engine copy: generated client is missing");
  process.exit(0);
}

mkdirSync(to, { recursive: true });
for (const name of readdirSync(from)) {
  if (/\.(node|wasm)$/.test(name) || name === "schema.prisma") {
    cpSync(join(from, name), join(to, name));
  }
}
