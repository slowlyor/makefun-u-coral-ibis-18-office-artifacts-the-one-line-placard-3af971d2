// Office Artifacts: The One-Line Placard Contest
// Writes a single museum placard line for an ordinary office object,
// treated as an ancient artifact, to /output/entry.txt.
//
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT_PATH = "/output/entry.txt";

// The placard: one line, at most 180 characters, museum-label voice
// with catalogue date, material, provenance and donor.
const PLACARD =
  "Sticky note, c. 2004, adhesive paper: \u201CBack in 5 min.\u201D " +
  "The scribe never returned. Recovered from a desk drawer; " +
  "gift of the next occupant.";

// Keep the line inside the 180-character gate; fail loudly if it ever drifts.
if (PLACARD.length === 0 || PLACARD.length > 180) {
  throw new Error(`placard is ${PLACARD.length} characters, must be 1-180`);
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, PLACARD, "utf8");
