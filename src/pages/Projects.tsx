
import { useState } from "react";
import type { Copy } from "../content";

/* =========================================================
   AUTO DISCOVER PROJECT IMAGES
========================================================= */

const imageModules = import.meta.glob(
  "../assets/project/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
) as Record<string, string>;


const projects = Object.entries(imageModules)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  )
  .map(([path, src], index) => {
    const filename = path.split("/").pop() ?? "project";

    // Remove file extension and optional numeric prefix
    const cleanName = filename
      .replace(/\.[^.]+$/, "")
      .replace(/^\d+[-_.\s]*/, "");

    // Split filename into project name and hashtags
    const parts = cleanName
      .split(/[-_]+/)
      .map((part) => part.trim())
      .filter(Boolean);

    // First word = project name
    const projectName = parts.shift() ?? `Project ${index + 1}`;

    // Remaining words = hashtags
    const hashtags = [...new Set(parts)]
      .map((tag) => `#${tag.toLowerCase()}`);

    return {
      id: filename,
      filename,
      src,
      title:
        projectName.charAt(0).toUpperCase() +
        projectName.slice(1).toLowerCase(),
      hashtags,
      number: String(index + 1).padStart(2, "0"),
    };
  });

/* =========================================================
   CUSTOM HASHTAG OVERRIDES
   Key = exact image filename
========================================================= */


const projectHashtagOverrides: Record<string, string[]> = {
  "01-foodfinder.jpg": [
    "Flutter",
    "FoodDiscovery",
    "MobileApp",
    "ArtificialIntelligence",
    "OpenStreetMap",
  ],

  "02-portfolio.jpg": [
    "React",
    "TypeScript",
    "WebDesign",
    "CreativePortfolio",
  ],

  // Add your own project hashtags here.
};

/* =========================================================
   HASHTAG GENERATOR
========================================================= */

function createHashtag(tag: string): string {
  const cleaned = tag
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^a-zA-Z0-9]/g, "");

  return cleaned ? `#${cleaned}` : "";
}

function getProjectHashtags(
  filename: string,
  title: string,
  tags: string[]
): string[] {
  const customTags = projectHashtagOverrides[filename];

  const sourceTags =
    customTags ??
    (tags.length > 0
      ? tags
      : title.split(/\s+/));

  return [...new Set(sourceTags.map(createHashtag))]
    .filter(Boolean)
    .slice(0, 6);
}

/* =========================================================
   PROJECTS COMPONENT
========================================================= */

export function Projects({ t }: { t: Copy }) {
  const [activeProject, setActiveProject] = useState(0);

  const total = projects.length;
  const active = projects[activeProject];

const hashtags = active?.hashtags ?? [];

  const previousProject = () => {
    setActiveProject((current) =>
      (current - 1 + total) % total
    );
  };

  const nextProject = () => {
    setActiveProject((current) =>
      (current + 1) % total
    );
  };

  const selectProject = (index: number) => {
    setActiveProject(index);
  };

  return (
    <section className="work-gallery section-pad" id="projects">

      {/* SECTION INDEX */}

      <div className="work-gallery-index">
        <span>04</span>
        <p>{t.projIndex}</p>
      </div>

      {/* HEADER */}

      <header className="work-gallery-header">
        <div className="work-gallery-heading">
          <p className="work-gallery-eyebrow">
            {t.projEyebrow}
          </p>

          <h2>
            {t.projTitle[0]}
            <br />
            <em>{t.projTitle[1]}</em>
          </h2>
        </div>

        <div className="work-gallery-intro">
          <p>{t.projText}</p>

        </div>
      </header>

      {/* SLOW MARQUEE */}

      <div className="work-marquee" aria-hidden="true">
        <div className="work-marquee-track">
          {Array.from({ length: 4 }, (_, index) => (
            <span key={index}>
              {t.reel}
              <i>✳</i>
              {t.reel}
              <i>✳</i>
            </span>
          ))}
        </div>
      </div>

      {/* PROJECT CONTENT */}

      {total > 0 && active ? (
        <div className="work-featured" aria-live="polite">

          {/* PROJECT TITLE ABOVE IMAGE */}

          <div className="work-featured-header">

            <div className="work-featured-title">
              <span className="work-featured-label">
                PROJECT {active.number}
              </span>

              <h3>{active.title}</h3>

              <p>
                {t.projectDesc[activeProject] ??
                  "A selected creative project."}
              </p>

              {/* AUTO HASHTAGS */}

              <div className="work-featured-tags">
                {hashtags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="work-featured-count">
              <strong>{active.number}</strong>
              <span>/ {String(total).padStart(2, "0")}</span>
            </div>

          </div>

          {/* MAIN IMAGE WITH CENTERED ARROWS */}

          <div
            className="work-featured-image"
            key={active.id}
          >
            <img
              src={active.src}
              alt={active.title}
              draggable={false}
              decoding="async"
            />

            {/* PREVIOUS */}

            <button
              type="button"
              className="work-image-arrow work-image-arrow-prev"
              onClick={previousProject}
              aria-label="Previous project"
              disabled={total <= 1}
            >
              <span>←</span>
            </button>

            {/* NEXT */}

            <button
              type="button"
              className="work-image-arrow work-image-arrow-next"
              onClick={nextProject}
              aria-label="Next project"
              disabled={total <= 1}
            >
              <span>→</span>
            </button>

            {/* IMAGE OVERLAY */}

            <div className="work-image-overlay">
              <span>SELECTED WORK</span>

              <span>
                {active.number} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* IMAGE NAVIGATION PROGRESS */}

          <div className="work-featured-progress">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                className={
                  activeProject === index ? "active" : ""
                }
                onClick={() => selectProject(index)}
                aria-label={`View ${project.title}`}
                aria-pressed={activeProject === index}
              />
            ))}
          </div>

        </div>
      ) : (
        <div className="work-empty">
          <h3>No projects yet.</h3>
          <p>
            Add images to src/assets/project to display your work.
          </p>
        </div>
      )}

    </section>
  );
}
