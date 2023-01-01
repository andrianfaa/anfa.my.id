import clsx from "clsx";
import { memo } from "react";
import { SiNextdotjs, SiReact, SiSass } from "react-icons/si";

type IconStackTypes = {
  type: string;
  title?: string;
  className?: string;
};

function IconStack({ type, title = "Tech Icon", className }: IconStackTypes) {
  const iconType = type.toLowerCase();

  switch (iconType) {
    case "nextjs":
      return (
        <SiNextdotjs
          title={title}
          className={clsx(
            "text-light-headline dark:text-dark-headline",
            className
          )}
        />
      );

    case "sass":
      return (
        <SiSass
          title={title}
          className={clsx("text-pink-500 dark:text-pink-400", className)}
        />
      );

    default:
      return (
        <SiReact title={title} className={clsx("text-sky-500", className)} />
      );
  }
}

export default memo(IconStack);
