import { StoriesResponseTypes } from "@/types";
import clsx from "clsx";
import htmr from "htmr";
import Link from "next/link";
import { formatDistanceToNowStrict as formatDate } from "date-fns";

type StoryCardProps = Pick<
  StoriesResponseTypes["items"][0],
  "author" | "content_html" | "date_published" | "guid" | "title"
> & {
  className?: string;
};

export default function StoryCard({
  author,
  content_html,
  date_published,
  guid,
  title,
  className
}: StoryCardProps) {
  return (
    <div
      itemScope
      itemType="https://schema.org/BlogPosting"
      className={clsx(
        "bg-white dark:bg-dark-background-100",
        "p-4 md:p-6",
        "rounded-lg lg:rounded-xl",
        "shadow-lg shadow-light-background-200 dark:shadow-slate-900",
        className
      )}
    >
      <Link
        href={guid}
        title={title}
        className={clsx(
          "font-display font-semibold tracking-tight line-clamp-3",
          "text-light-headline dark:text-dark-headline",
          "text-xl md:text-2xl",
          "mb-2 md:mb-4"
        )}
        itemProp="backstory"
        itemScope
        itemType="https://schema.org/CreativeWork"
      >
        <span itemProp="headline">{title}</span>
      </Link>

      <p
        className={clsx(
          "render-only-text",
          "text-sm md:text-base",
          "line-clamp-4 lg:line-clamp-5"
        )}
        itemProp="articleBody"
      >
        {htmr(content_html.replace(/(<([^>]+)>)/gi, " ").slice(0, 750))}
      </p>

      <div className={clsx("text-headline text-sm", "mt-4")}>
        <span itemProp="creator" className="font-semibold">
          {author.name}
        </span>{" "}
        -{" "}
        <time dateTime={date_published} itemProp="datePublished">
          {formatDate(new Date(date_published), {
            addSuffix: true
          })}
        </time>
      </div>
    </div>
  );
}
