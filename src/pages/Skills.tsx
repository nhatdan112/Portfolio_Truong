import { useState, type CSSProperties } from "react";
import type { Copy } from "../content";
import { tools } from "../content/static";

/**
PAGE 03 — SKILLS / EDUCATION
 * Zones: heading · education card stack · design-tool bars · capabilities · soft skills.
 */
export function Skills({ t }: { t: Copy }) {
  // Which education card is on top of the stack
  const [activeEdu, setActiveEdu] = useState(1);

  return (
    <>
      <section className="skills section-pad">
        {/* ── ZONE: Section index ── */}
        <div className="section-index reveal">
          <span>02</span>
          <p>{t.toolkitIndex}</p>
        </div>
        {/* ── ZONE: Heading + short intro ── */}
        <div className="skills-heading reveal">
          <h2>
            {t.toolkitTitle[0]}
            <br />
            <em>{t.toolkitTitle[1]}</em>
          </h2>
          <p>{t.toolkitText}</p>
        </div>

        {/* ── ZONE: Two columns: education (left) · design tools (right) ── */}
        <div className="education-skills reveal">
          {/* ── ZONE: Education — overlapping portrait cards (hover / click to bring one forward) ── */}
          <div className="education">
            <p className="label">{t.education}</p>
            <div className="edu-stack">
              {t.edu.map((item, index) => (
                <div
                  className={`edu-card edu-${index + 1} ${activeEdu === index ? "is-front" : ""}`}
                  key={item.title}
                  tabIndex={0}
                  onPointerEnter={() => setActiveEdu(index)}
                  onFocus={() => setActiveEdu(index)}
                  onClick={() => setActiveEdu(index)}
                >
                  <span className="edu-num">0{index + 1}</span>
                  <i className="edu-mark" aria-hidden="true" />
                  <span className="edu-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                </div>
              ))}
            </div>
          </div>
          {/* ── ZONE: Design tools — animated running bars (levels come from content/static.ts) ── */}
          <div className="tools">
            <p className="label">{t.designTools}</p>
            {tools.map((tool, index) => (
              <div className="tool-row" key={tool.name} style={{ "--i": index } as CSSProperties}>
                <span className="tool-icon">{tool.short}</span>
                <span>{tool.name}</span>
                <div className="tool-meter">
                  <i style={{ width: `${tool.level}%` }} />
                </div>
                <small>{tool.level}%</small>
              </div>
            ))}
          </div>
        </div>

        {/* ── ZONE: What I do — capability chips ── */}
        <div className="capability-cloud reveal">
          <p className="label">{t.whatIDo}</p>
          <div>
            {t.capabilities.map((item, index) => (
              <span className={index % 3 === 1 ? "accent" : ""} key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        {/* ── ZONE: How I work — soft skills ── */}
        <div className="soft-skills reveal">
          <p className="label">{t.howIWork}</p>
          <div>
            {t.softSkills.map((item, index) => (
              <span key={item}>
                <b>0{index + 1}</b>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
