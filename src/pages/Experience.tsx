import { useState } from "react";
import type { Copy } from "../content";

/**
PAGE 04 — EXPERIENCE
 * Zones: heading · slanted milestone panels (each with an IMAGE FRAME above its text).
 * The section background colour follows the open panel via data-tone (see index.css).
 */
export function Experience({ t }: { t: Copy }) {
  // Index of the expanded milestone panel
  const [activeExp, setActiveExp] = useState(0);

  return (
    <>
      <section className="experience section-pad" id="experience" data-tone={activeExp}>
        {/* ── ZONE: Giant outlined company name behind the panels (changes per milestone) ── */}
        <span className="section-ghost" key={`exp-${activeExp}`} aria-hidden="true">
          {t.exp[activeExp].company}
        </span>
        {/* ── ZONE: Section index ── */}
        <div className="section-index light reveal">
          <span>03</span>
          <p>{t.expIndex}</p>
        </div>
        {/* ── ZONE: Heading + intro ── */}
        <div className="experience-head reveal">
          <h2>
            {t.expTitle[0]}
            <br />
            <em>{t.expTitle[1]}</em>
          </h2>
          <p>{t.expText}</p>
        </div>
        {/* ── ZONE: Milestone panels — slanted, hover to expand; background colour follows the open panel ── */}
        <div className="slant-row exp-row reveal">
          {t.exp.map((item, index) => (
            <article
              className={`slant-panel exp-panel exp-${index + 1} ${activeExp === index ? "is-active" : ""}`}
              key={item.role}
              tabIndex={0}
              data-cursor="view"
              onPointerEnter={() => setActiveExp(index)}
              onFocus={() => setActiveExp(index)}
              onClick={() => setActiveExp(index)}
            >
              <div className="slant-inner">
                <span className="slant-num">0{index + 1}</span>
                <h3 className="slant-vertical">{item.role}</h3>

                <div className="slant-detail">
                  {/* IMAGE FRAME: put <img src={...} alt="..." /> inside .exp-frame.
                      The parallelogram frame is borderless and the image auto-fits (cover). */}
                  <div className="img-frame exp-frame" />
                  <p className="slant-date">{item.date}</p>
                  <h3>{item.role}</h3>
                  <p className="slant-company">{item.company}</p>
                  <p className="slant-text">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
