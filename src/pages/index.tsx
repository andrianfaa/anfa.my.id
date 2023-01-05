import clsx from "clsx";
import { formatDistanceToNowStrict as formatDate } from "date-fns";
import htmr from "htmr";
import Link from "next/link";

import { ExternalLink } from "@/components";
import { ProjectCard } from "@/components/cards";
import { project, social_media } from "@/data";
import { HttpResponse, StoriesResponseTypes } from "@/types";
// import { FetchWithCache } from "@/utils";

import { MediumLogoText } from "@/assets";
import { SiMedium } from "react-icons/si";

type SosmedTypes = {
  url: string;
  label: string;
};

type HomePageProps = {
  stories: HttpResponse<StoriesResponseTypes>;
};

export async function getServerSideProps() {
  const stories: HttpResponse<StoriesResponseTypes> = await fetch(
    `${(process.env.BASE_URL as string) || ""}/api/stories`,
    // "medium-stories",
    {
      method: "GET"
    }
  ).then((res) => res.json());

  return {
    props: {
      stories
    }
  };
}

export default function HomePage({ stories }: HomePageProps) {
  // sosmed = social media
  const sosmed: SosmedTypes[] = [
    {
      label: "LinkedIn",
      url: social_media.linkedin
    },
    {
      label: "GitHub",
      url: social_media.github
    },
    {
      label: "Medium",
      url: social_media.medium
    }
  ];

  return (
    <>
      <header
        className={clsx(
          "content bg-dots dark:bg-dots-dark dark:bg-dark-background"
        )}
      >
        <section
          className={clsx(
            "container",
            "px-4 pt-20 pb-32 sm:pt-32 sm:pb-40 lg:pb-48",
            "h-auto max-h-[750px]",
            "flex flex-col items-start justify-start md:justify-center"
          )}
          itemScope
          itemType="https://schema.org/Person"
        >
          <h1
            className={clsx(
              "max-w-[850px]",
              "mb-6 md:mb-8",
              "text-5xl font-bold leading-tight tracking-tighter",
              "md:text-6xl md:leading-none",
              "lg:text-8xl"
            )}
          >
            <span
              itemProp="name"
              className={clsx(
                "text-light-primary dark:text-dark-primary",
                "block",
                "text-xl font-medium tracking-normal md:text-2xl"
              )}
            >
              Andrian Fadhilla,
            </span>{" "}
            <span itemProp="description">
              a young <span itemProp="jobTitle">React.js Developer</span> based
              in <span itemProp="address">Bekasi, Indonesia</span>.
            </span>
          </h1>

          <div className={clsx("w-full", "md:text-lg")}>
            {sosmed.map(({ url, label }, index) => {
              const key = index.toString();

              return (
                <ExternalLink
                  key={key}
                  className={clsx("link", "mr-3 last:mr-0")}
                  href={url}
                  title={`${label} - Andrian Fadhilla`}
                  itemProp="sameAs"
                >
                  {label}
                </ExternalLink>
              );
            })}
          </div>
        </section>
      </header>

      <main>
        <div
          id="featured-project"
          className={clsx(
            "custom-border-primary border-t-2 border-b-2",
            "bg-light-background-100 dark:bg-dark-background-100"
          )}
        >
          <section className="container px-4 py-8 md:py-10 lg:py-12">
            <h2
              className={clsx(
                "text-4xl font-bold tracking-tighter",
                "mb-4",
                "md:leading-tight lg:text-5xl lg:leading-snug"
              )}
            >
              Featured Projects
            </h2>
            <p className="max-w-2xl">
              a selection of my personal works. I&lsquo;ve included details
              about the project to showcase my skills, experience, and also why
              I created this project.
            </p>

            <div
              className={clsx(
                "flex flex-col items-center justify-center gap-4 lg:flex-row lg:flex-wrap lg:gap-6",
                "mt-6"
              )}
            >
              {project.featured_project
                .slice(
                  0,
                  ((process.env.MAX_FEATURED_PROJECT as unknown as number) ||
                    5) - 1
                )
                .map((projectIndex, index) => {
                  const data = project.projects[projectIndex];
                  const key = index.toString();

                  if (!data) return null;

                  if (index === 0) {
                    return (
                      <ProjectCard
                        key={key}
                        url={data.live_url}
                        description={data.description}
                        tech_stacks={data.tech_stacks}
                        title={data.name}
                        className={clsx(
                          "lg:h-72",
                          "shadow-lg shadow-light-background-200 dark:shadow-dark-background"
                        )}
                        showThumbnail
                        clickableTitle
                        clickableImage
                      />
                    );
                  }

                  return (
                    <ProjectCard
                      key={key}
                      url={data.live_url}
                      description={data.description}
                      tech_stacks={data.tech_stacks}
                      title={data.name}
                      className={clsx(
                        "lg:max-w-[calc(100%/2-12px)]",
                        "shadow-lg shadow-light-background-200 dark:shadow-dark-background"
                      )}
                      clickableTitle
                    />
                  );
                })}
            </div>
          </section>
        </div>

        <div className="bg-slate-50 dark:bg-dark-background">
          <section className="container px-4 py-8 md:py-10 lg:py-12">
            <h2
              className={clsx(
                "text-4xl font-bold tracking-tighter",
                "mb-4",
                "md:leading-tight lg:text-5xl lg:leading-snug"
              )}
            >
              <SiMedium
                title="Medium.com Logo"
                className={clsx(
                  "h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14",
                  "mr-4 !inline-block align-middle leading-none"
                )}
              />
              <span className="align-middle leading-none">Stories</span>
            </h2>
            <p className="max-w-2xl">
              Some of my writings on the{" "}
              <ExternalLink
                title="medium.com"
                className="link"
                href="https://medium.com"
              >
                medium.com
              </ExternalLink>{" "}
              website. I really like to write when I have free time, because I
              really want to build good habits, one of which is writing.
            </p>

            <div
              className={clsx(
                "flex flex-col items-stretch gap-4 lg:flex-row",
                "mt-6 lg:mt-8"
              )}
            >
              {stories.data?.items
                .slice(0, 5)
                .map(
                  (
                    { author, content_html, date_published, guid, title },
                    index
                  ) => {
                    const key = index.toString();

                    return (
                      <div
                        key={key}
                        itemScope
                        itemType="https://schema.org/BlogPosting"
                        className={clsx(
                          "bg-white dark:bg-dark-background-100",
                          "p-4 md:p-6",
                          "rounded-lg lg:rounded-xl",
                          "shadow-lg shadow-light-background-200 dark:shadow-slate-900"
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
                          {htmr(
                            content_html
                              .replace(/(<([^>]+)>)/gi, " ")
                              .slice(0, 750)
                          )}
                        </p>

                        <div className={clsx("text-headline text-sm", "mt-4")}>
                          <span itemType="creator" className="font-semibold">
                            {author.name}
                          </span>{" "}
                          -{" "}
                          <time
                            dateTime={date_published}
                            itemProp="datePublished"
                          >
                            {formatDate(new Date(date_published), {
                              addSuffix: true
                            })}
                          </time>
                        </div>
                      </div>
                    );
                  }
                )}
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="https://andrianfaa.medium.com"
                title="See more at https://andrianfaa.medium.com"
                className={clsx(
                  "transition-all duration-300 ease-in-out",
                  "rounded-lg py-4 px-6",
                  "border border-light-text dark:border-dark-text",
                  // "bg-white dark:bg-dark-background-200",
                  "hover:shadow-lg hover:shadow-light-background-300 dark:hover:shadow-slate-900",
                  "focus:shadow-light-background-300 dark:hover:shadow-lg dark:focus:shadow-lg dark:focus:shadow-slate-900"
                )}
              >
                see more at{" "}
                <MediumLogoText
                  className={clsx(
                    "transition-all duration-300 ease-in-out",
                    "ml-1 inline h-4",
                    "text-light-headline dark:text-dark-headline"
                  )}
                />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
