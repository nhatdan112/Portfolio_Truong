import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Cursor } from "./components/ui/Cursor";
import { useLanguage } from "./hooks/useLanguage";
import { usePageEffects } from "./hooks/usePageEffects";
import { About } from "./pages/About";
import { Beyond } from "./pages/Beyond";
import { Experience } from "./pages/Experience";
import { Hero } from "./pages/Hero";
import { Manifesto } from "./pages/Manifesto";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";

/**
 * APP SHELL
 * Order of the page:
 *   Header (fixed) → 01 Hero → 02 About → 03 Skills → 04 Experience →
 *   05 Projects → 06 Beyond → 07 Manifesto → Footer
 * All copy lives in src/content (en.ts / vi.ts); each page is in src/pages.
 */
function App() {
  const { lang, t, toggleLang } = useLanguage();
  usePageEffects();

  return (
    <div className="site-shell">
      {/* Global overlays */}
      <div className="scroll-progress" aria-hidden="true" />
      <Cursor />

      <Header t={t} lang={lang} onToggleLang={toggleLang} />

      <main>
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Beyond t={t} />
        <Manifesto t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}

export default App;
