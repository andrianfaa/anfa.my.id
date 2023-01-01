import { useEffect, useState } from "react";

import { LocalStorage } from "@/utils";

export type Themes = "light" | "dark";

type UseThemeReturnTypes = {
  toggleTheme: () => void;
  currentTheme: string;
};

export default function useTheme(): UseThemeReturnTypes {
  const [currentTheme, setTheme] = useState<Themes>("light");

  function toggleTheme() {
    setTheme((state) => {
      if (state === "dark") {
        return "light";
      }

      return "dark";
    });
  }

  useEffect(() => {
    if (typeof window === "undefined") return;

    const getLocalTheme = LocalStorage.get<Themes | null>("theme");

    if (getLocalTheme) {
      setTheme(getLocalTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    const html =
      document.querySelector("html") || document.documentElement || null;

    if (html) {
      if (currentTheme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }

    const timeout = setTimeout(
      () => LocalStorage.set("theme", currentTheme),
      500
    );

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timeout);
  }, [currentTheme]);

  return {
    toggleTheme,
    currentTheme
  };
}
