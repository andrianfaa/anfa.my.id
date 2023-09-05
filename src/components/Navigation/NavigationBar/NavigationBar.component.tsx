import { Portal } from "@/components/Portal";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiChevronRight, FiGrid } from "react-icons/fi";
import { QuickCenter } from "../QuickCenter";
import type { NavigationBarParams } from "./NavigationBar";

import AnfaLogoSVG from "@/assets/anfa-logo.svg";

const NavigationBar = ({ testId }: NavigationBarParams) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openQuickCenter, setOpenQuickCenter] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("keydown", (event) => {
      const { key, code } = event;

      if (openQuickCenter && (key === "Escape" || code === "Escape")) {
        setOpenQuickCenter(false);
      }
    });
  }, [openQuickCenter]);

  return (
    <>
      <Portal>
        <QuickCenter isOpen={openQuickCenter} onClickClose={() => setOpenQuickCenter(false)} />
      </Portal>

      <div
        className={clsx("border-b border-b-slate-200 dark:border-slate-900", "fixed top-0 left-0 z-30", "w-full")}
        data-testid={testId?.parent}
      >
        <div className={clsx("container", "p-4 mx-auto lg:p-6", "flex flex-row items-center justify-between")}>
          <div className={clsx("flex flex-row items-center gap-x-6")}>
            <a href="" className={clsx("flex flex-row items-center justify-start")}>
              <Image
                data-testid={testId?.logo}
                src={AnfaLogoSVG}
                alt="Anfa Logo"
                className={clsx("w-10 h-10 lg:w-12 lg:h-12")}
                width={32}
                height={32}
              />
            </a>

            <button
              type="button"
              accessKey="q"
              className={clsx(
                "text-sm font-semibold",
                "button button-primary",
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
                  "text-xs leading-none text-white font-normal",
                  "bg-primary rounded-md",
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
