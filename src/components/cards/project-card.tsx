/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Link from "next/link";
import { memo } from "react";

import { IconStack } from "..";

type ProjectCardProps = {
  url: string;
  title: string;
  description: string;
  tech_stacks: {
    label: string;
    icon_id: string;
  }[];
  showThumbnail?: boolean;
  thumbnail?: string;
  className?: string;
  clickableImage?: boolean;
  clickableTitle?: boolean;
  clickableCard?: boolean;
};

function ProjectCard({
  url,
  title,
  description,
  tech_stacks,
  showThumbnail,
  thumbnail,
  className,
  clickableCard,
  clickableImage,
  clickableTitle
}: ProjectCardProps) {
  const image =
    thumbnail ||
    "https://via.placeholder.com/1280x720/?text=Supposed+to+be+thumbnail";
  const baseIconStackClassName = clsx("h-6 w-6");

  if (!clickableTitle && !clickableImage && !clickableTitle) {
    throw new Error("ERROR: ProjectCard Component: Do not disable all clicks!");
  }

  if (clickableCard) {
    if (showThumbnail) {
      return (
        <Link
          href={url}
          title={title}
          className={clsx(
            "relative w-full overflow-hidden",
            "bg-white dark:bg-dark-background-200",
            "shadow-lg shadow-light-background-300 dark:shadow-slate-900",
            "rounded-lg lg:rounded-xl",
            "flex flex-col lg:flex-row lg:items-stretch",
            className
          )}
        >
          <div
            className={clsx(
              "absolute -right-10 top-3 z-0 rotate-45 md:top-4",
              "px-10 py-1",
              "bg-light-primary dark:bg-dark-primary",
              "text-white",
              "text-[10px] font-semibold leading-snug md:text-xs"
            )}
          >
            Featured
          </div>
          <div className="w-full p-4 md:p-6 lg:w-1/2">
            <p
              className={clsx(
                "inline-block font-display font-semibold tracking-tight",
                "text-light-headline dark:text-dark-headline",
                "text-xl md:text-2xl lg:text-3xl",
                "mb-2 md:mb-4"
              )}
            >
              {title}
            </p>

            <p
              className={clsx(
                "line-clamp-4 lg:line-clamp-5",
                "text-sm md:text-base",
                "mb-4"
              )}
            >
              {description}
            </p>

            <div className="flex flex-row gap-2">
              {tech_stacks.map(({ label, icon_id }) => (
                <IconStack
                  type={icon_id}
                  key={icon_id}
                  title={`${label} icon`}
                  className={baseIconStackClassName}
                />
              ))}
            </div>
          </div>
          <div className="hidden w-full lg:flex lg:w-1/2 lg:flex-1">
            <img
              src={image}
              height={1280}
              width={720}
              alt="Thumbnail"
              className="h-full w-full rounded-r-lg object-cover"
            />
          </div>
        </Link>
      );
    }

    return (
      <Link
        href={url}
        title={title}
        className={clsx(
          "relative w-full overflow-hidden",
          "bg-white dark:bg-dark-background-200",
          "p-4 md:p-6",
          "shadow-lg shadow-light-background-300 dark:shadow-slate-900",
          "rounded-lg lg:rounded-xl",
          className
        )}
      >
        <div
          className={clsx(
            "absolute -right-10 top-3 z-0 rotate-45 md:top-4",
            "px-10 py-1",
            "bg-light-primary dark:bg-dark-primary",
            "text-white",
            "text-[10px] font-semibold leading-snug md:text-xs"
          )}
        >
          Featured
        </div>

        <p
          className={clsx(
            "inline-block font-display font-semibold tracking-tight",
            "text-light-headline dark:text-dark-headline",
            "text-xl md:text-2xl",
            "mb-2 md:mb-4"
          )}
        >
          {title}
        </p>

        <p className={clsx("line-clamp-4", "text-sm md:text-base", "mb-4")}>
          {description}
        </p>

        <div className="flex flex-row gap-2">
          {tech_stacks.map(({ label, icon_id }) => (
            <IconStack
              type={icon_id}
              key={icon_id}
              title={`${label} icon`}
              className={baseIconStackClassName}
            />
          ))}
        </div>
      </Link>
    );
  }

  if (showThumbnail) {
    return (
      <div
        className={clsx(
          "relative w-full overflow-hidden",
          "bg-white dark:bg-dark-background-200",
          "shadow-lg shadow-light-background-300 dark:shadow-slate-900",
          "rounded-lg lg:rounded-xl",
          "flex flex-col lg:flex-row lg:items-stretch",
          className
        )}
      >
        <div
          className={clsx(
            "absolute -right-10 top-3 z-0 rotate-45 md:top-4",
            "px-10 py-1",
            "bg-light-primary dark:bg-dark-primary",
            "text-white",
            "text-[10px] font-semibold leading-snug md:text-xs"
          )}
        >
          Featured
        </div>
        <div className="w-full p-4 md:p-6 lg:w-1/2">
          <Link
            href={url}
            title={title}
            className={clsx(
              "inline-block font-display font-semibold tracking-tight",
              "text-light-headline dark:text-dark-headline",
              "text-xl md:text-2xl lg:text-3xl",
              "mb-2 md:mb-4"
            )}
          >
            {title}
          </Link>

          <p
            className={clsx(
              "line-clamp-4 lg:line-clamp-5",
              "text-sm md:text-base",
              "mb-4"
            )}
          >
            {description}
          </p>

          <div className="flex flex-row gap-2">
            {tech_stacks.map(({ label, icon_id }) => (
              <IconStack
                type={icon_id}
                key={icon_id}
                title={`${label} icon`}
                className={baseIconStackClassName}
              />
            ))}
          </div>
        </div>

        {clickableImage ? (
          <Link
            href={url}
            title={title}
            className="hidden w-full lg:flex lg:w-1/2 lg:flex-1"
          >
            <img
              src={image}
              height={1280}
              width={720}
              alt="Thumbnail"
              className="h-full w-full rounded-r-lg object-cover"
            />
          </Link>
        ) : (
          <div className="hidden w-full lg:flex lg:w-1/2 lg:flex-1">
            <img
              src={image}
              height={1280}
              width={720}
              alt="Thumbnail"
              className="h-full w-full rounded-r-lg object-cover"
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden",
        "bg-white dark:bg-dark-background-200",
        "p-4 md:p-6",
        "shadow-lg shadow-light-background-300 dark:shadow-slate-900",
        "rounded-lg lg:rounded-xl",
        className
      )}
    >
      <div
        className={clsx(
          "absolute -right-10 top-3 z-0 rotate-45 md:top-4",
          "px-10 py-1",
          "bg-light-primary dark:bg-dark-primary",
          "text-white",
          "text-[10px] font-semibold leading-snug md:text-xs"
        )}
      >
        Featured
      </div>

      <Link
        href={url}
        title={title}
        className={clsx(
          "inline-block font-display font-semibold tracking-tight",
          "text-light-headline dark:text-dark-headline",
          "text-xl md:text-2xl",
          "mb-2 md:mb-4"
        )}
      >
        {title}
      </Link>

      <p className={clsx("line-clamp-4", "text-sm md:text-base", "mb-4")}>
        {description}
      </p>

      <div className="flex flex-row gap-2">
        {tech_stacks.map(({ label, icon_id }) => (
          <IconStack
            type={icon_id}
            key={icon_id}
            title={`${label} icon`}
            className={baseIconStackClassName}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(ProjectCard);
