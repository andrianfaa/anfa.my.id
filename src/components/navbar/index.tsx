import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import LogoPrimaryDark from "@/assets/logo-primary-dark.svg";
import LogoPrimaryLight from "@/assets/logo-primary.svg";

import { useTheme } from "@/hooks";
import NavbarMenu from "./navbar-menu";
import NavbarThemeToggler from "./navbar-theme-toggler";
import NavbarToggler from "./navbar-toggler";

type NavLinks = {
  url: string;
  label: string;
};

export default function Navbar() {
  const [isNavMenuOpened, setIsNavMenuOpened] = useState<boolean>(false);
  const { currentTheme, toggleTheme } = useTheme();

  const navLinks: NavLinks[] = [
    {
      label: "About Me",
      url: "/about"
    },
    {
      label: "Portfolio",
      url: "/portfolio"
    },
    {
      label: "Contact",
      url: "/contact"
    }
  ];

  return (
    <div
      className={clsx(
        "fixed top-0 left-1/2 z-50 -translate-x-1/2",
        "w-full p-4 lg:py-8"
      )}
    >
      <div
        className={clsx(
          "container px-4 lg:pl-6",
          "rounded-full bg-white",
          "shadow shadow-light-background-300",
          "dark:bg-dark-background-300 dark:shadow-slate-900",
          "lg:flex lg:flex-row lg:items-center"
        )}
      >
        <div
          id="nav-left"
          className={clsx(
            "flex flex-row items-center justify-between",
            "h-16 w-full lg:h-20 lg:w-auto"
          )}
        >
          <Link className="h-8 w-8" href="/" title="Home">
            <Image
              src={
                currentTheme === "light" ? LogoPrimaryLight : LogoPrimaryDark
              }
              alt="Anfa Website Logo"
              className={clsx("h-8 w-8")}
              unoptimized
            />
          </Link>

          <div className="flex flex-row items-center justify-end">
            <NavbarThemeToggler
              currentTheme={currentTheme}
              onClick={() => toggleTheme()}
              className={clsx("flex lg:hidden")}
            />

            <NavbarToggler
              isOpen={isNavMenuOpened}
              onClick={() => setIsNavMenuOpened((state) => !state)}
              title={
                isNavMenuOpened
                  ? "Close Navigation menu"
                  : "Open navigation menu"
              }
            />
          </div>
        </div>

        <NavbarMenu
          data={navLinks}
          isOpened={isNavMenuOpened}
          theme={{
            currentTheme,
            toggleTheme
          }}
        />
      </div>
    </div>
  );
}
