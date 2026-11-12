import { useEffect } from "react";

/**
 * Page-wide effects, written to CSS variables / classes:
 *  - --scroll-progress  → top progress bar
 *  - --hero-x / --hero-y → hero title parallax
 *  - .reveal → adds .is-visible when an element enters the viewport
 */
export function usePageEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => {
      const scrollable = root.scrollHeight - window.innerHeight;
      root.style.setProperty(
        "--scroll-progress",
        `${scrollable > 0 ? window.scrollY / scrollable : 0}`,
      );
    };
    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--hero-x", `${(0.5 - event.clientX / window.innerWidth) * 10}px`);
      root.style.setProperty("--hero-y", `${(0.5 - event.clientY / window.innerHeight) * 7}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      observer.disconnect();
    };
  }, []);
}
