/** Small SVG icons used across the pages. */

/** Arrow icon (set `diagonal` for the ↗ variant). */
export const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={diagonal ? "icon diagonal" : "icon"}
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/** Four-point sparkle used as a decorative shape. */
export const Spark = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" aria-hidden="true">
    <path
      d="M40 0c1 27 13 39 40 40-27 1-39 13-40 40-1-27-13-39-40-40C27 39 39 27 40 0Z"
      fill="currentColor"
    />
  </svg>
);
