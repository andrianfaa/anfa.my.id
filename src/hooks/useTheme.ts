import { useEffect, useState } from "react";

import { LocalStorage } from "@/utils";

type Themes = "light" | "dark";
type UseThemeReturnTypes = {
  toggleTheme: () => void;
  currentTheme: string;
};

export default function useTheme(): UseThemeReturnTypes {
  const [theme, setTheme] = useState<Themes>("light");

  function toggleTheme() {
    setTheme((state) => {
      if (state === "dark") {
        return "light";
      }

      return "dark";
    });
  }

  useEffect(() => {
    if (!window) return;

    const getLocalTheme = LocalStorage.get<Themes | null>("theme");

    if (getLocalTheme) {
      setTheme(getLocalTheme);
    }
  }, []);

  useEffect(() => {
    if (!window || !document) return;

    const html =
      document.querySelector("html") || document.documentElement || null;

    if (html) {
      if (theme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }

    const timeout = setTimeout(() => localStorage.set("theme", theme), 500);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timeout);
  }, [theme]);

  return {
    toggleTheme,
    currentTheme: theme
  };
}
