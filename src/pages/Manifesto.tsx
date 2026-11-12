import type { Copy } from "../content";
import { Spark } from "../components/ui/Icons";

/**
PAGE 07 — MANIFESTO / NOTE
 * Zones: statement heading · paragraphs · square IMAGE FRAME (signature).
 */
export function Manifesto({ t }: { t: Copy }) {
  return (
    <>
      <section className="manifesto">
        {/* ── ZONE: Decorative floating spark ── */}
        <Spark className="manifesto-spark" />
        {/* ── ZONE: Statement, paragraphs and square signature IMAGE FRAME ── */}
        <div className="manifesto-inner reveal">
          <p className="label">{t.noteLabel}</p>
          <h2>
            {t.manifesto[0]}
            <br />
            {t.manifesto[1]} <em>{t.manifesto[2]}</em>
          </h2>
          <p>{t.manP[0]}</p>
          <p>{t.manP[1]}</p>
          {/* IMAGE FRAME: add <img src={...} alt="..." /> inside .note-photo (borderless). */}
          <div className="img-frame note-photo" />
        </div>
      </section>
    </>
  );
}
