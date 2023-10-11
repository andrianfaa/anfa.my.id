import clsx from "clsx";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import type { NavigationMenuParams } from "./NavigationMenu";

const NavigationMenu = ({ isOpen, onClickClose }: NavigationMenuParams) => {
  const menu = [
    {
      title: "About",
      url: "/about",
      transitionDelay: "100ms"
    },
    {
      title: "Portfolio",
      url: "/portfolio",
      transitionDelay: "200ms"
    },
    {
      title: "Medium",
      url: "https://medium.com/@andrianfaa",
      isOpenInNewTab: true,
      transitionDelay: "300ms"
    },
    {
      title: "Guestbook",
      url: "/guestbook",
      transitionDelay: "400ms"
    }
  ];

  return (
    <div
      className={clsx(
        "fixed inset-0 lg:static lg:inset-[unset] z-40",
        "bg-slate-300 dark:bg-zinc-950 bg-opacity-50 dark:bg-opacity-30 backdrop-blur lg:bg-transparent dark:lg:bg-transparent lg:backdrop-blur-none",
        "transition-all duration-300 ease-in-out",
        isOpen ? "visible opacity-100" : "invisible opacity-0 lg:opacity-100 lg:visible"
      )}
    >
      <div
        className={clsx(
          "container relative h-screen lg:h-auto",
          "mx-auto p-4 md:p-6 lg:p-0",
          "flex flex-col items-end gap-4"
        )}
      >
        <button
          type="button"
          className={clsx(
            "button button-default-inverted",
            "rounded-md",
            "text-gray-900 dark:text-gray-100",
            "p-3 ml-auto",
            "lg:hidden"
          )}
          onClick={onClickClose}
          title="close quick center"
        >
          <FiX className={clsx("w-6 h-6")} />
        </button>

        <nav
          className={clsx(
            "bg-slate-50 dark:bg-zinc-800 lg:bg-transparent dark:lg:bg-transparent",
            "w-full md:max-w-xs",
            "rounded-md",
            "p-4 md:p-6 lg:p-0",
            "navigation-menu"
          )}
        >
          <p
            className={clsx(
              "font-semibold text-gray-900 dark:text-gray-100 uppercase",
              "mb-4",
              "lg:hidden",
              "w-full md:max-w-xs"
            )}
          >
            Navigation
          </p>

          <ul className={clsx("w-full", "flex flex-col lg:flex-row lg:gap-6", isOpen && "open")}>
            {menu.map(({ title, url, isOpenInNewTab, transitionDelay }, index) => {
              const loopKey = index.toString();

              return (
                <li
                  key={loopKey}
                  // className={clsx("border-b border-b-gray-200 dark:border-b-zinc-700 last:border-b-0 lg:border-b-0")}
                  className={clsx("opacity-0 -translate-x-3 lg:translate-x-0 lg:opacity-100")}
                  style={{
                    transitionDelay: transitionDelay
                  }}
                >
                  <Link
                    href={url}
                    title={title}
                    target={isOpenInNewTab ? "_blank" : undefined}
                    rel={isOpenInNewTab ? "noreferrer noopener" : undefined}
                    className={clsx("py-2.5", "w-full block", "hover:text-gray-900 dark:hover:text-gray-100")}
                    onClick={(event) => {
                      event.isDefaultPrevented();

                      onClickClose();
                    }}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavigationMenu;
