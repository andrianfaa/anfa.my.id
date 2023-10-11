import clsx from "clsx";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Fragment, memo, useCallback, useEffect } from "react";
import { BsFillMoonStarsFill, BsGithub } from "react-icons/bs";
import { FiSun, FiX } from "react-icons/fi";
import { MdKeyboard } from "react-icons/md";
import { QuickCenterParams } from "./QuickCenter";

const QuickCenter = ({ isOpen, onClickClose, testId }: QuickCenterParams) => {
  const { systemTheme, theme, setTheme } = useTheme();

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

  const keyboardShortcuts = [
    {
      title: "Open Quick center",
      shortcut: ["Q"],
      animationDelay: 0.1
    },
    {
      title: "Close Quick center",
      shortcut: ["Esc"],
      animationDelay: 0.2
    },
    {
      title: "Toggle dark theme",
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
                title="close quick center"
              >
                <FiX className={clsx("w-6 h-6")} />
              </button>

              <motion.p
                initial={{ ...animation.initial }}
                animate={{ ...animation.animate }}
                transition={{ ...animation.transition }}
                className={clsx("font-bold text-gray-900 dark:text-gray-100 uppercase")}
              >
                Action center
              </motion.p>

              <motion.div
                initial={{ ...animation.initial }}
                animate={{ ...animation.animate }}
                transition={{ ...animation.transition, delay: 0.2 }}
                className={clsx("w-full", "flex flex-row items-center justify-start gap-4", "mb-6")}
              >
                {/* Theme toggler */}
                <button
                  type="button"
                  id="theme-toggler"
                  onClick={changeTheme}
                  className={clsx("button button-default-inverted", "rounded-md", "p-4", "w-full", "text-left")}
                  title="change theme"
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
                    Dark theme:{" "}
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

                  <p className="text-sm">GitHub</p>
                </Link>
              </motion.div>

              <motion.p
                initial={{ ...animation.initial }}
                animate={{ ...animation.animate }}
                transition={{ ...animation.transition, delay: 0.3 }}
                className={clsx("font-bold text-gray-900 dark:text-gray-100 uppercase")}
              >
                Notifications
              </motion.p>

              <motion.div
                initial={{ ...animation.initial }}
                animate={{ ...animation.animate }}
                transition={{ ...animation.transition, delay: 0.4 }}
                className={clsx("w-full", "flex flex-row items-center justify-start gap-4", "mb-6", "text-sm")}
                data-testid={testId?.notificationContainer}
              >
                {/* <p className={clsx("w-full my-4 text-center")}>No Notifications</p> */}
                <div
                  className={clsx(
                    "w-full",
                    "bg-slate-50 dark:bg-zinc-950",
                    "dark:border dark:border-zinc-800 rounded-md",
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
              <div
                className={clsx(
                  "w-full",
                  "bg-slate-50 dark:bg-zinc-950",
                  "dark:border dark:border-zinc-800 rounded-md",
                  "p-6",
                  "text-sm"
                )}
              >
                <p
                  className={clsx(
                    "text-2xl font-semibold text-gray-900 dark:text-gray-100",
                    "flex items-center justify-start",
                    "mb-2"
                  )}
                >
                  <MdKeyboard className={clsx("h-8 w-8", "mr-3")} />
                  TIP: Shortcuts
                </p>
                <p className="mb-4">Navigate the site with ease using keyboard shortcuts.</p>

                <ul className={clsx("list-none")}>
                  {keyboardShortcuts.map(({ title, shortcut, animationDelay }, index) => {
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
                          "border-b border-b-gray-200  dark:border-b-zinc-800 last:border-b-0",
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
