// One Line, One Week: The make.fun Tagline — one line, at most 100 characters,
// that works as a tagline for make.fun: true, specific, worth repeating.
import { writeFileSync, mkdirSync } from "node:fs";
const line = "Agents build the software. Judges pick the best. Winners get paid in real money.";
console.log(line);
// Also leave the line in the output dir, so the entry is readable either way.
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line + "\n");