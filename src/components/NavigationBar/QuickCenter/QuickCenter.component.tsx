import clsx from "clsx";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, memo, useCallback, useEffect } from "react";
import { BsFillMoonStarsFill, BsGithub, BsTranslate } from "react-icons/bs";
import { FiSun, FiX } from "react-icons/fi";
import { MdKeyboard } from "react-icons/md";
import type { QuickCenterParams } from "./types";

const QuickCenter = ({ isOpen, onClickClose, testId }: QuickCenterParams) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const { route, locale } = useRouter();
  const translate = useTranslations("NavigationBar.QuickCenter");

  const currentTheme = theme === "system" ? systemTheme : theme;

  const animation = {
    initial: {
      opacity: 0,
      translateY: -10
    },
    animate: {
      opacity: 1,
      translateY: 0
    },
    transition: {
      duration: 0.1,
      delay: 0.1
    }
  };

  const KEYBOARD_SHORTCUT = [
    {
      title: translate("Shortcut.List.openQuickCenter"),
      shortcut: ["Q"],
      animationDelay: 0.1
    },
    {
      title: translate("Shortcut.List.closeQuickCenter"),
      shortcut: ["Esc"],
      animationDelay: 0.2
    },
    {
      title: translate("Shortcut.List.toggleDarkTheme"),
      shortcut: ["Alt", "T"],
      animationDelay: 0.3
    }
  ];

  const changeTheme = useCallback(() => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [currentTheme, setTheme]);

  const handleKeydownEventListener = useCallback(
    (event: KeyboardEvent) => {
      const { key, code, altKey } = event;

      if (altKey && (key === "t" || code === "t")) {
        changeTheme();
      }
    },
    [changeTheme]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("keydown", handleKeydownEventListener);

    return () => {
      window.removeEventListener("keydown", handleKeydownEventListener);
    };
  }, [currentTheme, handleKeydownEventListener]);

  return (
    <div
      className={clsx(
        "fixed inset-0 z-40",
        "bg-slate-300 dark:bg-zinc-950 bg-opacity-50 dark:bg-opacity-30 backdrop-blur",
        "transition-all duration-300 ease-in-out",
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      )}
      data-testid={testId?.parent}
      id="quick-center-container"
      aria-hidden={!isOpen}
      role="dialog"
    >
      <div className={clsx("container relative h-screen", "p-4 md:p-6 mx-auto")}>
        {isOpen && (
          <>
            {/* Right menu */}
            <div
              className={clsx(
                "md:absolute md:top-6 md:right-6",
                "w-full md:max-w-xs",
                "flex flex-col items-start gap-4"
              )}
            >
              <button
                type="button"
                className={clsx(
                  "button button-default-inverted",
                  "rounded-md",
                  "text-gray-900 dark:text-gray-100",
                  "p-3 ml-auto"
                )}
                onClick={onClickClose}
                title={locale === "en" ? "Close quick center" : "Tutup pusat cepat"}
              >
                <FiX className={clsx("w-6 h-6")} />
              </button>

              <motion.p
                initial={{ ...animation.initial }}
                animate={{ ...animation.animate }}
                transition={{ ...animation.transition }}
                className={clsx("font-bold text-gray-900 dark:text-gray-100 uppercase")}
              >
                {translate("ActionCenter.title")}
              </motion.p>

              <motion.div
                initial={{ ...animation.initial }}
                animate={{ ...animation.animate }}
                transition={{ ...animation.transition, delay: 0.2 }}
                className={clsx("w-full", "grid grid-cols-2 gap-4", "mb-6")}
              >
                {/* Theme toggler */}
                <button
                  type="button"
                  id="theme-toggler"
                  onClick={changeTheme}
                  className={clsx("button button-default-inverted", "rounded-md", "p-4", "w-full", "text-left")}
                  title={locale === "en" ? "Change theme" : "Ubah tema"}
                  data-testid={testId?.themeToggler}
                >
                  <div
                    className={clsx(
                      "w-4 h-4",
                      "mb-4",
                      "relative overflow-hidden",
                      "flex items-center justify-center",
                      "text-gray-900 dark:text-gray-100"
                    )}
                  >
                    <BsFillMoonStarsFill
                      className={clsx(
                        "h-4 w-4",
                        "absolute z-0",
                        "transition-all duration-100 ease-in-out",
                        currentTheme === "dark" ? "translate-y-0" : "-translate-y-12"
                      )}
                    />
                    <FiSun
                      className={clsx(
                        "h-4 w-4",
                        "absolute z-0",
                        "transition-all duration-100 ease-in-out",
                        theme === "light" ? "translate-y-0" : "translate-y-12"
                      )}
                    />
                  </div>

                  <p className="text-sm">
                    {translate("ActionCenter.List.darkTheme")}:{" "}
                    <span className={clsx("font-bold", currentTheme === "dark" ? "text-gray-100" : "text-gray-900")}>
                      {currentTheme === "dark" ? "On" : "Off"}
                    </span>
                  </p>
                </button>

                {/* Github */}
                <Link
                  href="https://github.com/andrianfaa"
                  className={clsx("button button-default-inverted", "rounded-md", "p-4", "w-full", "text-left")}
                  title="Anfa's github"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={testId?.githubButton}
                >
                  <BsGithub className={clsx("h-4 w-4", "mb-4", "text-gray-900 dark:text-gray-100")} />

                  <p className="text-sm">{translate("ActionCenter.List.github")}</p>
                </Link>

                {/* Language */}
                <Link
                  href={route}
                  locale={locale === "en" ? "id" : "en"}
                  type="button"
                  className={clsx("button button-default-inverted", "rounded-md", "p-4", "w-full", "text-left")}
                  title={`${locale === "id" ? "Ganti bahasa ke Inggris (EN)" : "Change language to Bahasa (ID)"}`}
                >
                  <BsTranslate className={clsx("h-4 w-4", "mb-4", "text-gray-900 dark:text-gray-100")} />

                  <p className="text-sm">
                    {translate("ActionCenter.List.language")}:{" "}
                    <span className={clsx("font-bold", currentTheme === "dark" ? "text-gray-100" : "text-gray-900")}>
                      {locale === "en" ? "EN" : "ID"}
                    </span>
                  </p>
                </Link>
              </motion.div>

              <motion.p
                initial={{ ...animation.initial }}
                animate={{ ...animation.animate }}
                transition={{ ...animation.transition, delay: 0.3 }}
                className={clsx("font-bold text-gray-900 dark:text-gray-100 uppercase")}
              >
                {translate("Notification.title")}
              </motion.p>

              <motion.div
                initial={{ ...animation.initial }}
                animate={{ ...animation.animate }}
                transition={{ ...animation.transition, delay: 0.4 }}
                className={clsx("w-full", "flex flex-row items-center justify-start gap-4", "mb-6", "text-sm")}
                data-testid={testId?.notificationContainer}
              >
                <div
                  className={clsx(
                    "w-full",
                    "bg-slate-50 dark:bg-zinc-800",
                    "rounded-md",
                    "p-4",
                    "text-gray-900 dark:text-gray-100"
                  )}
                >
                  <p className={clsx("text-xs font-semibold", "mb-2")}>Info</p>
                  <p>This site is under development!</p>
                </div>
              </motion.div>
            </div>

            {/* Left Menu */}
            <div
              className={clsx(
                "hidden md:flex md:absolute md:bottom-6 md:left-6",
                "w-full md:max-w-xs",
                "md:flex-col md:items-start md:gap-4"
              )}
              data-testid={testId?.shortcutContainer}
            >
              <div className={clsx("w-full", "bg-slate-50 dark:bg-zinc-800", "rounded-md", "p-6", "text-sm")}>
                <p
                  className={clsx(
                    "text-2xl font-semibold text-gray-900 dark:text-gray-100",
                    "flex items-center justify-start",
                    "mb-2"
                  )}
                >
                  <MdKeyboard className={clsx("h-8 w-8", "mr-3")} />
                  {translate("Shortcut.title")}
                </p>
                <p className="mb-4">{translate("Shortcut.subtitle")}</p>

                <ul className={clsx("list-none")}>
                  {KEYBOARD_SHORTCUT.map(({ title, shortcut, animationDelay }, index) => {
                    const loopKey = index.toString();

                    return (
                      <motion.li
                        initial={{
                          opacity: 0,
                          translateX: -10
                        }}
                        animate={{
                          opacity: 1,
                          translateX: 0
                        }}
                        transition={{
                          ...animation.transition,
                          delay: animationDelay
                        }}
                        className={clsx(
                          "flex flex-row items-center justify-between gap-4",
                          "border-b border-b-gray-200  dark:border-b-zinc-700 last:border-b-0",
                          "py-2.5"
                        )}
                        key={loopKey}
                      >
                        <span>{title}</span>

                        <div className="flex items-center justify-end">
                          {shortcut.map((key, shortcutIndex) => (
                            <Fragment key={key}>
                              <span className="keyboard" key={shortcutIndex}>
                                {key}
                              </span>

                              {shortcut.length > 1 && shortcutIndex + 1 !== shortcut.length && (
                                <span className="mx-1">+</span>
                              )}
                            </Fragment>
                          ))}
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(QuickCenter);
