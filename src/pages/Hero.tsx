import type { Copy } from "../content";
import { Arrow, Spark } from "../components/ui/Icons";
import { Marquee } from "../components/ui/Marquee";

/**
PAGE 01 — HERO
 * Zones: kicker line · giant title · intro + "View work" button · scrolling ticker.
 */
export function Hero({ t }: { t: Copy }) {
  return (
    <>
      <section className="hero" id="top">
        {/* ── ZONE: Kicker line (role + year) ── */}
        <div className="hero-kicker reveal">
          <span>{t.kicker[0]}</span>
          <span>{t.kicker[1]}</span>
        </div>
        {/* ── ZONE: Giant headline + decorative spark / scribble ── */}
        <div className="hero-title-wrap">
          <h1 className="hero-title">
            <span className="line line-one">{t.heroLines[0]}</span>
            <span className="line line-two">
              {t.heroLines[1]}
              <span className="period">.</span>
            </span>
            <span className="line line-three">
              {t.heroLines[2]} <em>{t.heroEm}</em>
            </span>
          </h1>
          <Spark className="hero-spark" />
          <div className="scribble" aria-hidden="true">
            {t.scribble}
          </div>
        </div>
        {/* ── ZONE: Intro text + "View work" circle button ── */}
        <div className="hero-bottom reveal">
          <p>{t.heroText}</p>
          <a className="circle-link" href="#projects" aria-label={t.viewWorkLabel}>
            <span>
              {t.viewWork[0]}
              <br />
              {t.viewWork[1]}
            </span>
            <Arrow diagonal />
          </a>
        </div>
        {/* ── ZONE: Decorative outlined year ── */}
        <div className="hero-year" aria-hidden="true">
          ’26
        </div>
      </section>

      {/* ── ZONE: Scrolling ticker (BRANDING · VISUAL IDENTITY …) ── */}
      <div className="ticker" aria-hidden="true">
        <Marquee items={t.ticker} />
      </div>
    </>
  );
}
