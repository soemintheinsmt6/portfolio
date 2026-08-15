/**
 * One motion system, in the same spirit as the type: quiet, quick, out-eased.
 *
 * The numbers here are the same ones held as --dur-* / --ease-* in
 * styles/tokens.css, so a CSS transition and a framer-motion animation on the
 * same element never disagree about how fast the page moves.
 *
 * Rules of thumb for this site:
 *   - motion clarifies where something came from; it never performs
 *   - nothing travels further than a line of text (~16-24px)
 *   - nothing bounces, overshoots, or scales more than a couple of percent
 */

/** Expo-out. Leaves quickly, lands softly, no overshoot. */
export const EASE_OUT = [0.16, 1, 0.3, 1];
/** For things that both arrive and leave, e.g. a sliding indicator. */
export const EASE_IN_OUT = [0.65, 0, 0.35, 1];

export const DURATION = {
  fast: 0.18, // hover, press, small state flips
  base: 0.28, // overlays, indicators
  slow: 0.5, // scroll reveals — the longest anything should take
};

/** How far a revealing block travels. One line of body copy, near enough. */
export const RISE = 16;

export const transition = { duration: DURATION.base, ease: EASE_OUT };
export const fastTransition = { duration: DURATION.fast, ease: EASE_OUT };

/** Reveal a touch before the element is fully on screen. */
export const VIEWPORT = { once: true, margin: '-80px' };

/** A short rise and fade — the page's one and only entrance. */
export const riseIn = {
  hidden: { opacity: 0, y: RISE },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_OUT },
  },
};

/**
 * Parent that hands its children a cascade. Use only for groups small enough
 * to enter the viewport at once — a long list should let each row trigger on
 * its own scroll position instead, or the last rows animate off screen.
 */
export const staggerParent = (each = 0.06, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: each, delayChildren } },
});

/** Row stagger for long lists: enough to read as a cascade, capped so the
 *  bottom of a list is never left waiting on the top. */
export const rowDelay = (index, each = 0.05, max = 0.15) => Math.min(index * each, max);

/** Scrim + panel for the menu and the lightbox. */
export const overlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.base, ease: EASE_OUT } },
  exit: { opacity: 0, transition: { duration: DURATION.fast, ease: 'easeIn' } },
};
