import clsx from "clsx";
import Link from "next/link";
import { memo } from "react";

import NavbarThemeToggler from "./navbar-theme-toggler";

type NavbarMenuProps = {
  data: {
    url: string;
    label: string;
  }[];
  isOpened: boolean;
  theme: {
    currentTheme: string;
    toggleTheme: () => void;
  };
};

function NavbarMenu({ data, isOpened, theme }: NavbarMenuProps) {
  return (
    <div
      id="nav-right"
      className={clsx(
        "transition-all duration-300 ease-in-out",
        "fixed top-0 left-0 -z-40 lg:static lg:z-0",
        "h-screen w-full lg:h-auto",
        "bg-blue-100 bg-opacity-50 px-4 pt-24 lg:bg-transparent lg:pt-0",
        "dark:bg-black dark:bg-opacity-50 dark:lg:bg-transparent",
        isOpened
          ? "visible opacity-100"
          : "invisible opacity-0 lg:visible lg:opacity-100"
      )}
    >
      <div
        id="nav-menu"
        className={clsx(
          "transition-transform duration-300 ease-in-out",
          "shadow shadow-light-background-300",
          "container rounded-3xl bg-white p-4 lg:p-0",
          "dark:bg-dark-background-300 dark:shadow-dark-background-100",
          "lg:bg-transparent lg:shadow-none dark:lg:bg-transparent dark:lg:shadow-none",
          isOpened ? "scale-100" : "scale-95 lg:scale-100"
        )}
      >
        <nav
          className={clsx(
            "flex flex-col items-center justify-center gap-6 py-2",
            "lg:flex-row lg:justify-end lg:py-0"
          )}
        >
          {data.map(({ label, url }, index) => {
            const key = index.toString();

            return (
              <Link
                href={url}
                key={key}
                title={`Navigate to ${label}`}
                className={clsx("font-semibold")}
              >
                {label}
              </Link>
            );
          })}

          <NavbarThemeToggler
            currentTheme={theme.currentTheme}
            onClick={() => theme.toggleTheme()}
            className={clsx("hidden lg:flex")}
          />
        </nav>
      </div>
    </div>
  );
}

export default memo(NavbarMenu);
