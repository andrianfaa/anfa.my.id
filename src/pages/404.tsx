import clsx from "clsx";
import { NextSeo } from "next-seo";

export default function ErrorPage() {
  return (
    <>
      <NextSeo
        title="404 Page Not Found"
        description="The page you are looking for could not be found or has been removed"
        openGraph={{
          title: "404 Page Not Found",
          description:
            "The page you are looking for could not be found or has been removed",
          images: [
            {
              url: `${process.env.BASE_URL}/api/og-image?theme=light&title=404 Page Not Found&description=The page you are looking for could not be found or has been removed`,
              alt: "Open Graph Image",
              height: 630,
              width: 1200,
              secureUrl: `${process.env.BASE_URL}/api/og-image?theme=light&title=404 Page Not Found&description=The page you are looking for could not be found or has been removed`,
              type: "image/png"
            }
          ]
        }}
      />

      <main
        className={clsx(
          "bg-dots dark:bg-dots-dark h-screen",
          "flex items-center justify-center text-center"
        )}
      >
        <h1 className={clsx("text-8xl font-bold md:text-9xl")}>
          404{" "}
          <span
            className={clsx(
              "block font-sans text-lg tracking-normal md:text-xl",
              "mt-2 md:mt-4"
            )}
          >
            Page not found
          </span>
        </h1>
      </main>
    </>
  );
}
