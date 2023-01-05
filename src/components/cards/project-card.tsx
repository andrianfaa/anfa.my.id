/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Link from "next/link";
import { memo } from "react";
import { formatDistanceToNowStrict as formatDate } from "date-fns";

import { IconStack } from "..";

type ProjectCardProps = {
  url: string;
  title: string;
  description: string;
  tech_stacks: {
    label: string;
    icon_id: string;
  }[];
  created_at: string;
  categories: string[];
  showThumbnail?: boolean;
  thumbnail?: string;
  className?: string;
  clickableImage?: boolean;
  clickableTitle?: boolean;
};

function ProjectCard({
  url,
  title,
  description,
  tech_stacks,
  created_at,
  categories,
  showThumbnail,
  thumbnail,
  className,
  clickableImage,
  clickableTitle
}: ProjectCardProps) {
  const image =
    thumbnail ||
    "https://via.placeholder.com/1280x720/?text=Supposed+to+be+thumbnail";
  const baseIconStackClassName = clsx("h-6 w-6");
  const baseCardBackground = "bg-light-background dark:bg-dark-background-200";

  if (!clickableTitle && !clickableImage && !clickableTitle) {
    throw new Error(
      "ERROR: <ProjectCard /> Component: Do not disable all clicks!"
    );
  }

  if (showThumbnail) {
    return (
      <div
        className={clsx(
          "relative w-full overflow-hidden",
          baseCardBackground,
          "rounded-lg lg:rounded-xl",
          "flex flex-col lg:flex-row lg:items-stretch",
          className
        )}
        itemScope
        itemType="https://schema.org/CreativeWork"
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
        <div
          className={clsx("w-full p-4 md:p-6 lg:w-1/2", "flex flex-col gap-2")}
        >
          <Link
            href={url}
            title={title}
            className={clsx(
              "inline-block font-display font-semibold tracking-tight",
              "text-light-headline dark:text-dark-headline",
              "text-xl md:text-2xl lg:text-3xl",
              "md:mb-2"
            )}
            itemProp="headline"
          >
            {title}
          </Link>

          <time
            dateTime={new Date(created_at).toDateString()}
            itemProp="dateCreated"
            className={clsx("block", "text-sm font-semibold md:text-base")}
          >
            {formatDate(new Date(created_at), {
              addSuffix: true
            })}
          </time>

          <p
            className={clsx("line-clamp-4", "text-sm md:text-base", "mb-2")}
            itemProp="about"
          >
            {description}
          </p>

          <div className="mb-2 mt-auto flex flex-row items-start">
            <span className="text-sm font-semibold leading-relaxed">
              Tech Stacks :
            </span>

            <div className="ml-2 flex flex-row gap-2">
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

          <div className="flex flex-row flex-wrap gap-2">
            {categories.map((category, index) => {
              const key = index.toString();

              return (
                <span
                  key={key}
                  className={clsx(
                    "text-sm font-medium",
                    "py-0.5 px-2",
                    "rounded-md border border-light-background-200 dark:border-dark-background-400",
                    "hover:border-light-text focus:border-light-text",
                    "dark:hover:border-dark-text dark:focus:border-dark-text"
                  )}
                >
                  {category}
                </span>
              );
            })}
          </div>
        </div>

        {clickableImage ? (
          <Link
            href={url}
            title={title}
            className="hidden h-full w-full lg:flex lg:w-1/2 lg:flex-1"
            tabIndex={-1}
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
        baseCardBackground,
        "p-4 md:p-6",
        "rounded-lg lg:rounded-xl",
        "flex flex-col gap-2",
        className
      )}
      itemScope
      itemType="https://schema.org/CreativeWork"
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
          "md:mb-2"
          // "mb-2 md:mb-4"
        )}
        itemProp="headline"
      >
        {title}
      </Link>

      <time
        dateTime={new Date(created_at).toDateString()}
        itemProp="dateCreated"
        className={clsx("block", "text-sm font-semibold md:text-base")}
      >
        {formatDate(new Date(created_at), {
          addSuffix: true
        })}
      </time>

      <p
        className={clsx("line-clamp-4", "text-sm md:text-base", "mb-2")}
        itemProp="about"
      >
        {description}
      </p>

      <div className="mb-2 mt-auto flex flex-row items-start">
        <span className="text-sm font-semibold leading-relaxed">
          Tech Stacks :
        </span>

        <div className="ml-2 flex flex-row flex-wrap gap-2">
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

      <div className="flex w-full flex-row flex-wrap gap-2">
        {categories.map((category, index) => {
          const key = index.toString();

          return (
            <span
              key={key}
              className={clsx(
                "text-sm font-medium",
                "py-0.5 px-2",
                "rounded-md border border-light-background-200 dark:border-dark-background-400",
                "hover:border-light-text focus:border-light-text",
                "dark:hover:border-dark-text dark:focus:border-dark-text"
              )}
            >
              {category}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default memo(ProjectCard);
