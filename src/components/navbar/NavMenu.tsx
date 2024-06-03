import { useCallback, useState } from "react";
import { TbSquareRoundedChevronDownFilled } from "react-icons/tb";

import { cn } from "@/utils";

const NavMenu: React.FC = () => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);

  const baseMenuClassName = cn(
    "font-bold",
    "text-sm text-white lg:text-gray-300 lg:hover:text-white lg:focus:text-white"
  );

  const handleOnClick = useCallback(() => {
    setIsOpenNavMenu(false);
  }, [setIsOpenNavMenu]);

  return (
    <nav>
      <ul className={cn("flex flex-row items-center gap-4")}>
        <li>
          <a
            title="Projects"
            href="/projects"
            onClick={handleOnClick}
            className={cn(baseMenuClassName)}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            title="Blog"
            href="https://andrianfaa.medium.com/"
            onClick={handleOnClick}
            className={cn(baseMenuClassName)}
          >
            Blog
          </a>
        </li>

        <li
          className={cn("relative", "flex flex-row lg:items-center lg:gap-4")}
        >
          <button
            type="button"
            onClick={() => setIsOpenNavMenu((prevState) => !prevState)}
            className={cn(
              "bg-gray-800/80 hover:bg-gray-700/80 focus:bg-gray-700/80",
              "text-sm font-bold text-white",
              "rounded-lg",
              "px-3 py-1.5",
              "transition-all duration-300 ease-in-out",
              "flex flex-row items-center gap-1",
              isOpenNavMenu ? "bg-gray-700/80 lg:bg-gray-800/80" : ""
              // "lg:hidden"
            )}
          >
            Others{" "}
            <TbSquareRoundedChevronDownFilled
              className={cn(
                "h-4 w-4",
                "lg:-rotate-90",
                isOpenNavMenu ? "rotate-180" : ""
              )}
            />
          </button>

          <ul
            className={cn(
              "absolute left-0 top-10 z-10 lg:static",
              "bg-gray-950 lg:bg-transparent",
              "rounded-lg border border-gray-800 lg:rounded-none lg:border-none",
              "w-36 p-4 lg:w-[unset] lg:p-0",
              "flex flex-col items-start justify-start gap-4 lg:flex-row lg:items-center lg:gap-4",
              "transition-all duration-300 ease-in-out",
              "lg:visible lg:translate-y-0 lg:opacity-100",
              isOpenNavMenu
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-4 opacity-0"
            )}
          >
            <li className="block w-full lg:w-auto">
              <a
                href="/skills-and-tools"
                onClick={handleOnClick}
                className={cn(
                  baseMenuClassName,
                  "block w-full",
                  "text-gray-300 hover:text-white focus:text-white"
                )}
              >
                Skills & tools
              </a>
            </li>

            <li className="block w-full lg:w-auto">
              <a
                href="/experience"
                onClick={handleOnClick}
                className={cn(
                  baseMenuClassName,
                  "block w-full",
                  "text-gray-300 hover:text-white focus:text-white"
                )}
              >
                Experience
              </a>
            </li>

            <li className="block w-full lg:w-auto">
              <a
                href="/about-me"
                onClick={handleOnClick}
                className={cn(
                  baseMenuClassName,
                  "block w-full",
                  "text-gray-300 hover:text-white focus:text-white"
                )}
              >
                About me
              </a>
            </li>

            <li className="block w-full lg:w-auto">
              <a
                href="/contact"
                onClick={handleOnClick}
                className={cn(
                  baseMenuClassName,
                  "block w-full",
                  "text-gray-300 hover:text-white focus:text-white"
                )}
              >
                Contact
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
