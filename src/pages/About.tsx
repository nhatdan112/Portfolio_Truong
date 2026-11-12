
import portrait from "../assets/hoang-manh.png";
import type { Copy } from "../content";
import { Spark } from "../components/ui/Icons";
import { WaveText } from "../components/ui/WaveText";

export function About({ t }: { t: Copy }) {
  return (
    <section className="about section-pad" id="about">

      {/* SECTION INDEX */}

      <div className="section-index reveal">
        <span>01</span>
        <p>{t.aboutIndex}</p>
      </div>

      <div className="about-grid">

        {/* LEFT: PORTRAIT */}

        <div className="portrait-wrap reveal">

          <div className="portrait-frame">

            {/* Background decoration */}
            <div
              className="portrait-shape"
              aria-hidden="true"
            />

            {/* Main portrait */}
            <img
              className="about-portrait-image"
              src={portrait}
              alt="Hoàng Mạnh Trường"
              loading="eager"
              decoding="async"
            />

          </div>

          {/* IMAGE CAPTION */}

          <div className="note-cluster">
            <p className="portrait-note">
              <WaveText text={t.nice} />
            </p>
          </div>

          <Spark className="portrait-spark" />

        </div>

        {/* RIGHT: ABOUT CONTENT */}

        <div className="about-copy reveal">

          <p className="eyebrow">{t.hello}</p>

          <h2>
            Hoàng Mạnh
            <br />
            <em>Trường.</em>
          </h2>

          <div className="about-text">
            <p>{t.aboutP[0]}</p>

            <p>
              {t.aboutP2a}
              <strong>{t.aboutP2b}</strong>
              {t.aboutP2c}
            </p>

            <p>{t.aboutP[1]}</p>
          </div>

        </div>

        {/* CLOSING QUOTE */}

        <blockquote>
          {t.quote}
        </blockquote>

      </div>
    </section>
  );
}
