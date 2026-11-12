/** Splits text into letters that bounce in a wave (used by "Nice to meet you!"). */
export const WaveText = ({ text }: { text: string }) => (
  <span className="wave-text" aria-label={text}>
    {Array.from(text).map((char, index) => (
      <span
        aria-hidden="true"
        className="wave-char"
        key={`${char}-${index}`}
        style={{ animationDelay: `${index * 0.07}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </span>
);
