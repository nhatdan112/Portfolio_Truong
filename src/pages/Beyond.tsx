import type { Copy } from "../content";
import { Spark } from "../components/ui/Icons";

/**
PAGE 06 — BEYOND THE PIXELS
 * Zones: heading · bento grid (languages tile + five hobby tiles).
 */
export function Beyond({ t }: { t: Copy }) {
  return (
    <>
      <section className="beyond section-pad">
        {/* ── ZONE: Section index ── */}
        <div className="section-index reveal">
          <span>05</span>
          <p>{t.personalEyebrow}</p>
        </div>
        {/* ── ZONE: Heading + hint ── */}
        <div className="beyond-head reveal">
          <h2>
            {t.personalTitle[0]}
            <br />
            <em>{t.personalTitle[1]}</em>
          </h2>
          <p>{t.beyondHint}</p>
          <Spark className="beyond-spark" />
        </div>
        {/* ── ZONE: Bento grid: languages tile + five hobby tiles ── */}
        <div className="bento reveal">
          {/* ── ZONE: Languages tile ── */}
          <div className="bento-tile lang-tile">
            <p className="label">{t.languages}</p>
            {t.langList.map((name, index) => (
              <div className="greet" key={name}>
                <b>{t.greetings[index]}</b>
                <span>{name}</span>
              </div>
            ))}
          </div>
          {/* ── ZONE: Hobby tiles (shape + colour per tile are set in index.css .hobby-1 … .hobby-5) ── */}
          {t.hobbies.map((hobby, index) => (
            <div className={`bento-tile hobby hobby-${index + 1}`} key={hobby}>
              <span className="hobby-num">0{index + 1}</span>
              <i className="hobby-shape" aria-hidden="true" />
              <h3>{hobby}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
