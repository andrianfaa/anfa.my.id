import clsx from "clsx";
import type { MouseEvent } from "react";
import { memo } from "react";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

interface NavbarThemeTogglerProps {
  // eslint-disable-next-line no-unused-vars
  onClick: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  currentTheme: string;
  className?: string;
}

function NavbarThemeToggler({
  onClick,
  className,
  currentTheme
}: NavbarThemeTogglerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "h-11 w-11",
        "relative overflow-hidden",
        "flex-col items-center justify-center",
        className
      )}
      title="Switch Theme"
    >
      <HiOutlineSun
        className={clsx(
          "transition-transform duration-200 ease-in-out",
          "absolute z-0 h-5 w-5",
          currentTheme === "light" ? "translate-y-0" : "-translate-y-11"
        )}
        title="Sun Icon"
      />

      <HiOutlineMoon
        className={clsx(
          "transition-transform duration-200 ease-in-out",
          "absolute z-0 h-5 w-5 text-yellow-400",
          currentTheme === "dark" ? "translate-y-0" : "translate-y-11 "
        )}
        title="Moon Icon"
      />
    </button>
  );
}

export default memo(NavbarThemeToggler);
