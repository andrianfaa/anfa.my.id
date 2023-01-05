import clsx from "clsx";
import { memo } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiSass,
  SiWebpack,
  SiPuppeteer,
  SiJasmine,
  SiRedux,
  SiTailwindcss,
  SiVercel,
  SiWindicss,
  SiTypescript
} from "react-icons/si";

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
          className={clsx("text-black dark:text-white", className)}
        />
      );

    case "vercel":
      return (
        <SiVercel
          title={title}
          className={clsx("text-black dark:text-white", className)}
        />
      );

    case "sass":
      return (
        <SiSass
          title={title}
          className={clsx("text-pink-500 dark:text-pink-400", className)}
        />
      );

    case "webpack":
      return (
        <SiWebpack title={title} className={clsx("text-blue-400", className)} />
      );

    case "puppeteer":
      return (
        <SiPuppeteer
          title={title}
          className={clsx("text-green-500 dark:text-green-400", className)}
        />
      );

    case "jasmine":
      return (
        <SiJasmine
          title={title}
          className={clsx("text-pink-600 dark:text-pink-500", className)}
        />
      );

    case "redux":
      return (
        <SiRedux
          title={title}
          className={clsx("text-indigo-600 dark:text-indigo-500", className)}
        />
      );

    case "tailwindcss":
      return (
        <SiTailwindcss
          title={title}
          className={clsx("text-teal-500 dark:text-teal-400", className)}
        />
      );

    case "windicss":
      return (
        <SiWindicss title={title} className={clsx("text-sky-400", className)} />
      );

    case "typescript":
      return (
        <SiTypescript
          title={title}
          className={clsx("text-blue-500", className)}
        />
      );

    default:
      return (
        <SiReact title={title} className={clsx("text-sky-500", className)} />
      );
  }
}

export default memo(IconStack);
