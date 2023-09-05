import clsx from "clsx";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { memo } from "react";
import { BsFillMoonStarsFill, BsGithub } from "react-icons/bs";
import { FiSun, FiX } from "react-icons/fi";
import { QuickCenterParams } from "./QuickCenter";

const QuickCenter = ({ isOpen, onClickClose }: QuickCenterParams) => {
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

  const changeTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div
      className={clsx(
        "fixed inset-0 z-40",
        "bg-slate-300 dark:bg-neutral-900 bg-opacity-30 dark:bg-opacity-30 backdrop-blur",
        "transition-all duration-300 ease-in-out",
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      )}
    >
      <div className={clsx("container relative", "p-4 lg:p-6 mx-auto")}>
        {isOpen && (
          // Panel left
          <div
            className={clsx("lg:absolute lg:top-6 lg:right-6", "w-full lg:max-w-xs", "flex flex-col items-start gap-4")}
          >
            <button
              type="button"
              className={clsx(
                "button rounded-md",
                "bg-white text-gray-900 dark:bg-neutral-800 dark:text-gray-100",
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
                className={clsx("bg-white dark:bg-neutral-800", "rounded-md", "p-4", "w-full", "text-left")}
                title="change theme"
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
                className={clsx("bg-white dark:bg-neutral-800", "rounded-md", "p-4", "w-full", "text-left")}
                title="Anfa's github"
                target="_blank"
                rel="noopener noreferrer"
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
            >
              {/* <p className={clsx("w-full my-4 text-center")}>No Notifications</p> */}
              <div
                className={clsx(
                  "w-full",
                  "bg-white dark:bg-neutral-800",
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
        )}
      </div>
    </div>
  );
};

export default memo(QuickCenter);
