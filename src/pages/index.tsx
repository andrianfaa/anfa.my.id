import clsx from "clsx";

import { ExternalLink } from "@/components";
import { ProjectCard } from "@/components/cards";
import { project, social_media } from "@/data";

type SosmedTypes = {
  url: string;
  label: string;
};

export default function HomePage() {
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
          "content bg-dots dark:bg-dots-dark dark:bg-dark-background-100"
        )}
      >
        <section
          className={clsx(
            "container",
            "px-4 pt-20 pb-32 sm:pt-32 sm:pb-40 lg:pb-48",
            "h-auto max-h-[750px]",
            "flex flex-col items-start justify-start md:justify-center"
          )}
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
              className={clsx(
                "text-light-primary dark:text-dark-primary",
                "block",
                "text-xl font-medium tracking-normal md:text-2xl"
              )}
            >
              Andrian Fadhilla,
            </span>{" "}
            a young React.js Developer based in Bekasi, Indonesia.
          </h1>

          <div
            className={clsx(
              "w-full",
              // "flex flex-row flex-wrap items-center gap-4",
              "md:text-lg"
            )}
          >
            {sosmed.map(({ url, label }, index) => {
              const key = index.toString();

              return (
                <ExternalLink
                  key={key}
                  className={clsx(
                    "link",
                    "mr-3 last:mr-0"
                    // "py-3"
                  )}
                  href={url}
                  title={`${label} - Andrian Fadhilla`}
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
            "custom-border-primary border-t-2",
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
                        className="lg:h-72"
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
                      className="lg:max-w-[calc(100%/2-12px)]"
                      clickableTitle
                    />
                  );
                })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
