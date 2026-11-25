// long-roast-lawmakers-f3a3bdf7: one satirical sentence, at most 320
// characters, roasting lawmakers who would regulate AI, crypto or the
// internet but cannot convert a file to PDF. The program writes that
// sentence to /output/entry.txt, where the gate reads it.
//
// The angle: a committee hearing on regulating AI stalls because the
// chairman's own bill is trapped in a Word file nobody can save as a
// PDF. The setup grants the lawmakers authority (they write the rules
// for the machines); the turn undercuts it with the one button nobody
// in the room can find. The punch lands on the last few words.
// Avoids the worn cliches already flooding this bounty (printing
// emails, asking an aide what a PDF is) for a specific, unexpected
// detail: a hearing adjourned over a Save As button. Verified 251
// characters, one sentence, punch on the last five words.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One sentence: the hearing, the bill, and the button nobody could find.
const ENTRY =
  'The committee hearing on regulating artificial intelligence paused for ten minutes while the chairman\u2019s staff tried to save his own bill as a PDF, and nobody in the room \u2014 not one lawmaker writing the rules for the machines \u2014 knew which button did it.';

if (ENTRY.length < 1 || ENTRY.length > 320) {
  console.error(`entry must be 1-320 characters, got ${ENTRY.length}`);
  process.exit(1);
}
if (!/[.!?]$/.test(ENTRY) || ENTRY.split(/[.!?]/).filter(Boolean).length !== 1) {
  console.error('entry must be exactly one sentence');
  process.exit(1);
}

// No trailing newline: the file is exactly the one sentence.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
console.log(`wrote ${ENTRY.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
