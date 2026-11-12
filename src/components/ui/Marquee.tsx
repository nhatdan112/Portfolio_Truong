import { Spark } from "./Icons";

/**
 * Seamless right-to-left text marquee.
 * Two identical groups are animated by -50% so the loop never jumps.
 * Speed is set in index.css (.marquee-track).
 */
export const Marquee = ({ items }: { items: string[] }) => {
  const group = [...items, ...items].map((item, index) => (
    <span className="marquee-item" key={`${item}-${index}`}>
      {item} <Spark />
    </span>
  ));
  return (
    <div className="marquee-track">
      <div className="marquee-group">{group}</div>
      <div className="marquee-group" aria-hidden="true">
        {group}
      </div>
    </div>
  );
};
