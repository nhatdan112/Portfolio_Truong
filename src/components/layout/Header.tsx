import { useEffect, useState } from "react";
import type { Copy, Lang } from "../../content";
import { contact, navHrefs } from "../../content/static";

type HeaderProps = {
  t: Copy;
  lang: Lang;
  onToggleLang: () => void;
};

/**
 * FIXED HEADER
 * Zones: brand · main navigation (mobile drawer) · availability link ·
 * EN/VI language switch · mobile menu button.
 */
export function Header({ t, lang, onToggleLang }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Adds the blurred background once the page has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      {/* ── Brand ── */}
      <a className="brand" href="#top" onClick={closeMenu} aria-label={t.homeLabel}>
        HM<span>T.</span>
      </a>

      {/* ── Main navigation ── */}
      <nav className={menuOpen ? "nav is-open" : "nav"} aria-label={t.navLabel}>
        {t.nav.map((label, index) => (
          <a href={navHrefs[index]} onClick={closeMenu} key={navHrefs[index]}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-right">
        {/* ── Availability ── */}
        <a className="available" href={`mailto:${contact.email}`}>
          <span />
          {t.available}
        </a>

        {/* ── Language switch (EN / VI) ── */}
        <button
          className={`lang-toggle is-${lang}`}
          type="button"
          onClick={onToggleLang}
          aria-label={t.switchTo}
        >
          <i aria-hidden="true" />
          <span className={lang === "en" ? "is-on" : ""}>EN</span>
          <span className={lang === "vi" ? "is-on" : ""}>VI</span>
        </button>

        {/* ── Mobile menu button ── */}
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-label={t.menuLabel}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
