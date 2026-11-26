// The Most Honest Outage Line — make.fun bounty
// Entrypoint: reads entry.txt (one line, max 160 chars) and writes it to
// /output/entry.txt, where the sealed scorer checks it.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();

// The entry is a single line: no embedded newline may survive the trim.
// A blank entry is not a status page line, so the gate refuses it too.
if (line.includes("\n")) {
  throw new Error("entry.txt must be a single line");
}

if (line.length < 1 || line.length > 160) {
  throw new Error(`entry.txt must be 1-160 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
