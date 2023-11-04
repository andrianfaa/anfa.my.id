import { Portal } from "@/components/Portal";
import { useWindow } from "@/hooks";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { FiChevronRight, FiGrid } from "react-icons/fi";
import { NavigationMenu } from "./NavigationMenu";
import { QuickCenter } from "./QuickCenter";
import type { NavigationBarParams } from "./types";

const NavigationBar = ({ testId }: NavigationBarParams) => {
  const { systemTheme, theme } = useTheme();
  const { scrollPosition } = useWindow();
  const translate = useTranslations("NavigationBar");
  const { locale } = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openQuickCenter, setOpenQuickCenter] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState<string>("light");

  const handleOpenNavigationMenu = useCallback(() => {
    if (openQuickCenter) setOpenQuickCenter(false);

    setIsOpen(true);
  }, [openQuickCenter]);

  const handleOpenQuickCenter = useCallback(() => {
    if (isOpen) setIsOpen(false);

    setOpenQuickCenter(true);
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("keydown", (event) => {
      const { key, code } = event;

      if (!openQuickCenter && (key === "q" || code === "q")) {
        handleOpenQuickCenter();
      }

      if (openQuickCenter && (key === "Escape" || code === "Escape")) {
        setOpenQuickCenter(false);
      }
    });
  }, [handleOpenQuickCenter, openQuickCenter]);

  useEffect(() => {
    if (typeof window === "undefined" || typeof theme === "undefined") return;

    const tempTheme = theme ? (theme === "system" ? systemTheme || "light" : theme || "light") : "light";

    setCurrentTheme(tempTheme);
  }, [systemTheme, theme]);

  return (
    <>
      <Portal>
        <QuickCenter isOpen={openQuickCenter} onClickClose={() => setOpenQuickCenter(false)} />
      </Portal>

      <div
        className={clsx(
          scrollPosition.y >= 80 &&
            "border-b border-b-gray-200 dark:border-zinc-800 bg-gray-50 bg-opacity-50 dark:bg-zinc-950 dark:bg-opacity-75 backdrop-blur",
          "fixed top-0 left-0 z-30",
          "transition-[background] duration-200 ease-in-out",
          "w-full"
        )}
        data-testid={testId?.parent}
      >
        <div className={clsx("container", "p-4 mx-auto md:p-6", "flex flex-row items-center justify-between")}>
          <div className={clsx("flex flex-row items-center gap-x-4")}>
            <Link href={"/"} className={clsx("flex flex-row items-center justify-start")} title="Anfa logo">
              {/* Logo */}
              <svg
                width="1303"
                height="1311"
                viewBox="0 0 1303 1311"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={clsx("w-10 h-10 lg:w-11 lg:h-11")}
                data-testid={testId?.logo}
              >
                <path
                  d="M739.921 54.0706H436.379L51.9755 1168.44H305.871L388.627 914.107H790.761L873.635 1168.44H1125.39L739.921 54.0706Z"
                  stroke={currentTheme === "dark" ? "#ffffff" : "#030712"}
                  strokeWidth="40"
                />
                <path
                  d="M730.754 730.165L589.927 298.222L448.657 730.165H730.754Z"
                  stroke={currentTheme === "dark" ? "#ffffff" : "#030712"}
                  strokeWidth="40"
                />
                <path
                  d="M1251.02 1258.64L866.837 144.755L752.671 52.3644L739.595 60.2095C884.994 499.53 990.132 762.466 1135.53 1201.79L907.986 1202.99L991.168 1258.64H1251.02Z"
                  fill={currentTheme === "dark" ? "#ffffff" : "#030712"}
                />
                <path
                  d="M608.217 728.042L666.488 548.026L590.528 305.576L453.174 728.042H608.217Z"
                  fill={currentTheme === "dark" ? "#ffffff" : "#030712"}
                />
                <path
                  d="M517.042 1003.79H819.589L795.007 926.332H401.231L315.509 1201.79H75.9444L171.183 1258.64H435.708L517.042 1003.79Z"
                  fill={currentTheme === "dark" ? "#ffffff" : "#030712"}
                />
                <path
                  d="M1251.02 1258.64L866.837 144.755L752.671 52.3644L739.595 60.2095C884.994 499.53 990.132 762.466 1135.53 1201.79L907.986 1202.99L991.168 1258.64H1251.02Z"
                  stroke={currentTheme === "dark" ? "#ffffff" : "#030712"}
                  strokeWidth="30"
                />
                <path
                  d="M608.217 728.042L666.488 548.026L590.528 305.576L453.174 728.042H608.217Z"
                  stroke={currentTheme === "dark" ? "#ffffff" : "#030712"}
                  strokeWidth="30"
                />
                <path
                  d="M517.042 1003.79H819.589L795.007 926.332H401.231L315.509 1201.79H75.9444L171.183 1258.64H435.708L517.042 1003.79Z"
                  stroke={currentTheme === "dark" ? "#ffffff" : "#030712"}
                  strokeWidth="30"
                />
              </svg>
            </Link>

            {/* Quick Center Toggler */}
            <button
              type="button"
              className={clsx(
                "bg-zinc-900 bg-opacity-10 hover:bg-opacity-20 focus:bg-opacity-25 dark:bg-zinc-50 dark:bg-opacity-10 dark:hover:bg-opacity-25 dark:focus:bg-opacity-25",
                "text-gray-900 dark:text-gray-50 text-sm font-semibold",
                "button",
                "px-4 py-2.5",
                "flex flex-row items-center gap-x-2",
                "rounded-md"
              )}
              title={locale === "en" ? "Open quick center" : "Buka pusat cepat"}
              onClick={handleOpenQuickCenter}
            >
              <FiGrid className={clsx("h-4 w-4")} />
              <span>{translate("QuickCenter.button")}</span>

              <FiChevronRight className={clsx("h-4 w-4", "lg:hidden")} />
              <span className={clsx("keyboard", "hidden lg:flex")}>Q</span>
            </button>
          </div>

          {/* Navigation Toggler */}
          <button
            type="button"
            className={clsx(
              "navigation-toggler",
              "lg:hidden",
              process.env.NODE_ENV === "test" && (isOpen ? "menu-opened" : "menu-closed")
            )}
            data-testid={testId?.toggler}
            onClick={handleOpenNavigationMenu}
            title={
              locale === "en"
                ? isOpen
                  ? "Open navigation menu"
                  : "Close navigation menu"
                : isOpen
                ? "Buka menu navigasi"
                : "tutup menu navigasi"
            }
          >
            <span className="icon"></span>
            <span className="icon"></span>
            <span className="icon"></span>
          </button>

          <NavigationMenu isOpen={isOpen} onClickClose={() => setIsOpen(false)} />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
