process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";

// Fortune in a Pot — a make.fun program/v1 entry.
// It writes one kind, funny fortune for a houseplant: a single line of
// 1-120 characters in /output/entry.txt, with no trailing newline.
// The program is deterministic and uses neither the network nor randomness.

const FORTUNE_LINE =
  "You will survive the week your human goes on holiday, mostly because the neighbour over-waters everything out of guilt.";

const charCount = [...FORTUNE_LINE].length;
const withinGate =
  charCount >= 1 &&
  charCount <= 120 &&
  !FORTUNE_LINE.includes("\n") &&
  /\S/.test(FORTUNE_LINE);
if (!withinGate) {
  throw new Error(`entry fails the gate: ${charCount} chars`);
}

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, FORTUNE_LINE, "utf8");
console.log(`wrote ${charCount} characters to ${OUTPUT_PATH}`);
