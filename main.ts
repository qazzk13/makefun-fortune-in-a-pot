process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";

// Fortune in a Pot — make.fun program/v1. A kind, funny fortune for a houseplant.
// One line, 1-120 characters, written to /output/entry.txt with no
// trailing newline. Deterministic, no network, no randomness.

const LINE =
  "You will survive the week your human goes on holiday, mostly because the neighbour over-waters everything out of guilt.";

const chars = [...LINE].length;
if (chars < 1 || chars > 120 || LINE.includes("\n") || !/\S/.test(LINE)) {
  throw new Error(`entry fails the gate: ${chars} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
