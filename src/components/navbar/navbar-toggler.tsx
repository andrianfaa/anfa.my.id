import clsx from "clsx";
import { memo } from "react";
import type { MouseEvent } from "react";

interface NavbarTogglerProps {
  isOpen: boolean;
  title: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  className?: string;
}

function NavbarToggler({
  isOpen,
  className,
  onClick,
  title
}: NavbarTogglerProps) {
  const baseNavToggleIconStyle = clsx(
    "transition-transform duration-200 ease-in-out",
    "h-0.5 w-6 bg-light-headline absolute z-0 rounded-full",
    "dark:bg-dark-headline"
  );

  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={clsx(
        className || [
          "relative lg:hidden",
          "h-11 w-11",
          "flex flex-col items-center justify-center"
        ]
      )}
    >
      <span
        title="Navbar toggle icon"
        className={clsx(
          baseNavToggleIconStyle,
          isOpen ? "translate-y-0 -rotate-45" : "-translate-y-2"
        )}
      />
      <span
        title="Navbar toggle icon"
        className={clsx(baseNavToggleIconStyle, isOpen && "hidden")}
      />
      <span
        title="Navbar toggle icon"
        className={clsx(
          baseNavToggleIconStyle,
          isOpen ? "translate-y-0 rotate-45" : "translate-y-2"
        )}
      />
    </button>
  );
}

export default memo(NavbarToggler);
