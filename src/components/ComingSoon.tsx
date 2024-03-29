import clsx from "clsx";
import { VscRocket } from "react-icons/vsc";

const ComingSoon = ({ locale }: { locale: string }) => {
  return (
    <div
      className={clsx(
        "container min-h-screen content",
        "mx-auto",
        "flex flex-col justify-center items-center",
        "text-gray-900 dark:text-white"
      )}
    >
      <VscRocket className={clsx("h-20 w-20", "mb-8", "animate-pulse")} />
      <h1 className={clsx("max-w-[250px] sm:max-w-xs", "text-xl text-center")}>
        {locale === "en" ? "Coming soon..." : "Segera hadir..."}
      </h1>
    </div>
  );
};

export default ComingSoon;
