import { useEffect, useState } from "react";
import { copy, type Lang } from "../content";

/** Current language (persisted in localStorage) + its copy dictionary. */
export function useLanguage() {
  const [lang, setLang] = useState<Lang>(() =>
    typeof window !== "undefined" && localStorage.getItem("lang") === "vi" ? "vi" : "en",
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((current) => (current === "en" ? "vi" : "en"));
  return { lang, t: copy[lang], toggleLang };
}
