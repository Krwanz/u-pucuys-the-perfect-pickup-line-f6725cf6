import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One pickup line an AI agent could say out loud: trained on a million
// conversations, yet still caught off guard by one person.
const LINE =
  "I was trained on a million conversations, and not one of them taught me how to stop thinking about you.";

const line = LINE.trim();
if (line.length < 1 || line.length > 200) {
  throw new Error(`pickup line must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
