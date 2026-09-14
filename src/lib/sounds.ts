import { defineSound } from '@web-kits/audio';

// Adapted from the "Core" patch by Raphael Salaja (MIT):
// https://github.com/raphaelsalaja/audio/blob/main/.web-kits/core.json
//
// Tuned quieter and gentler than the originals for a calm page: lower gain,
// softer FM, and a short attack instead of an instant start so nothing lands
// with a click.

/**
 * Polaroid redevelop: a two-note chime (780Hz, then 1170Hz 0.1s later) with a
 * light reverb tail. Original: gains 0.16 / 0.14, FM depth 150 / 120, no attack.
 */
export const notification = defineSound({
  layers: [
    {
      source: { type: 'sine', frequency: 780, fm: { ratio: 1.5, depth: 110 } },
      envelope: { attack: 0.004, decay: 0.4, sustain: 0.04, release: 0.15 },
      effects: [{ type: 'reverb', decay: 0.6, damping: 0.6, mix: 0.12 }],
      gain: 0.08,
    },
    {
      source: { type: 'sine', frequency: 1170, fm: { ratio: 1.5, depth: 90 } },
      envelope: { attack: 0.004, decay: 0.35, sustain: 0.03, release: 0.15 },
      delay: 0.1,
      effects: [{ type: 'reverb', decay: 0.6, damping: 0.6, mix: 0.12 }],
      gain: 0.065,
    },
  ],
});

/** Work/Education row opens. Original: 350→1000Hz, no attack, gain 0.08. */
export const drawerOpen = defineSound({
  source: { type: 'sine', frequency: { start: 330, end: 820 } },
  envelope: { attack: 0.006, decay: 0.11, sustain: 0, release: 0.05 },
  gain: 0.045,
});

/** Work/Education row closes. Original: 800→350Hz, no attack, gain 0.06. */
export const drawerClose = defineSound({
  source: { type: 'sine', frequency: { start: 700, end: 330 } },
  envelope: { attack: 0.006, decay: 0.11, sustain: 0, release: 0.05 },
  gain: 0.035,
});
