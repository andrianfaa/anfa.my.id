import { Portal } from "@/components/Portal";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiChevronRight, FiGrid } from "react-icons/fi";
import type { NavigationBarParams } from "./NavigationBar";
import { QuickCenter } from "./QuickCenter";

const NavigationBar = ({ testId }: NavigationBarParams) => {
  const { systemTheme, theme } = useTheme();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openQuickCenter, setOpenQuickCenter] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState<string>("light");

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("keydown", (event) => {
      const { key, code } = event;

      if (openQuickCenter && (key === "Escape" || code === "Escape")) {
        setOpenQuickCenter(false);
      }
    });
  }, [openQuickCenter]);

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
        className={clsx("border-b border-b-gray-200 dark:border-neutral-800", "fixed top-0 left-0 z-30", "w-full")}
        data-testid={testId?.parent}
      >
        <div className={clsx("container", "p-4 mx-auto lg:p-6", "flex flex-row items-center justify-between")}>
          <div className={clsx("flex flex-row items-center gap-x-6")}>
            <a href="" className={clsx("flex flex-row items-center justify-start")} title="Anfa logo">
              {/* Logo */}
              <svg
                width="53"
                height="53"
                viewBox="0 0 53 53"
                className={clsx("w-10 h-10 lg:w-11 lg:h-11")}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-testid={testId?.logo}
              >
                <path
                  d="M3 48.5L27 5.5L33 16.5L51 48.5H40.5L36 40.5L27.5 26L14.5 48.5H3Z"
                  fill="url(#paint0_linear_2_22)"
                  fillOpacity="0.25"
                />
                <path
                  d="M31.8966 33.5H22.5L19 40.5H36L31.8966 33.5Z"
                  fill="url(#paint1_linear_2_22)"
                  fillOpacity="0.25"
                />
                <path
                  d="M19 40.5152H35.9697L40.3333 48.5152H51L33.0606 15.9091M19 40.5152L14.6364 48.5152H3L27.1212 5L33.0606 15.9091M19 40.5152L22.8788 33.3636M22.8788 33.3636H31.9697L27.4848 25.4848M22.8788 33.3636L27.4848 25.4848M27.4848 25.4848L33.0606 15.9091"
                  stroke="url(#paint2_linear_2_22)"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_22"
                    x1="51.5"
                    y1="48.5"
                    x2="3.5"
                    y2="5.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor={currentTheme === "dark" ? "#ffffff" : "#030712"} />
                    <stop offset="1" stopColor={currentTheme === "dark" ? "#ffffff" : "#030712"} />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_22"
                    x1="51.5"
                    y1="48.5"
                    x2="3.5"
                    y2="5.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor={currentTheme === "dark" ? "#ffffff" : "#030712"} />
                    <stop offset="1" stopColor={currentTheme === "dark" ? "#ffffff" : "#030712"} />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_2_22"
                    x1="2.85585"
                    y1="48.5152"
                    x2="49.6632"
                    y2="3.47095"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor={currentTheme === "dark" ? "#ffffff" : "#030712"} />
                    <stop offset="1" stopColor={currentTheme === "dark" ? "#ffffff" : "#030712"} />
                  </linearGradient>
                </defs>
              </svg>
            </a>

            <button
              type="button"
              accessKey="q"
              className={clsx(
                "text-sm font-semibold",
                "button button-default",
                "px-4 py-2.5",
                "flex flex-row items-center gap-x-2",
                "rounded-md"
              )}
              title="Open quick center"
              onClick={() => {
                setOpenQuickCenter((state) => !state);
              }}
            >
              <FiGrid className={clsx("h-4 w-4")} />
              <span>Quick center</span>

              <FiChevronRight className={clsx("h-4 w-4", "lg:hidden")} />
              <span
                className={clsx(
                  "text-xs leading-none text-gray-100 dark:text-neutral-900 font-normal",
                  "bg-gray-900 dark:bg-neutral-100 rounded-md",
                  "px-1.5 py-1",
                  "hidden lg:flex"
                )}
              >
                alt+Q
              </span>
            </button>
          </div>

          <button
            type="button"
            className={clsx("navigation-toggler", "lg:hidden", isOpen ? "" : "")}
            data-testid={testId?.toggler}
            onClick={() => setIsOpen((state) => !state)}
          >
            <span className="icon"></span>
            <span className="icon"></span>
            <span className="icon"></span>
          </button>

          {/* <nav data-testid={testId?.navigation}>
            <ul>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
