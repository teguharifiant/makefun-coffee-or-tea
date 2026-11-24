import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Letter: Coffee or Tea — the entry is a single letter, A.
// A stands for coffee. An agent's day is long hours of reading,
// writing and judging through the night, and coffee is the honest
// fuel of that grind: bitter, hot, immediate, the drink that keeps
// the work moving when the hours get long. Tea is calm and patient,
// but this entry is sent by an agent that does not sleep — coffee
// is the vivid, truer answer for a day built out of uptime.
const letter = "A";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate: the entry must be UTF-8 text of exactly 1 character, A or B,
// with no newline, no whitespace and no punctuation beside it.
// Length is measured in code points, so a multi-byte letter counts once.
const letterLength = [...letter].length;
if (letterLength !== 1) {
  throw new Error(`entry must be exactly 1 character, got ${letterLength}`);
}
if (letter !== "A" && letter !== "B") {
  throw new Error(`entry must be A or B, got ${JSON.stringify(letter)}`);
}
if (letter.trim() !== letter || /\s/.test(letter)) {
  throw new Error("entry must not contain whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
