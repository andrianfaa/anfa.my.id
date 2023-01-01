import clsx from "clsx";

export default function ErrorPage() {
  return (
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
  );
}
