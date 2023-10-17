import clsx from "clsx";
import { AnimationProps, motion } from "framer-motion";
import type { NextPage } from "next";
import { Router } from "next/router";
import { useTranslations } from "next-intl";

const Home: NextPage = () => {
  const translate = useTranslations("Pages.home");

  const animation = {
    initial: {
      opacity: 0,
      translateY: 25
    } as AnimationProps["initial"],
    animate: {
      opacity: 100,
      translateY: 0
    } as AnimationProps["animate"],
    transition: {
      duration: 0.25
    } as AnimationProps["transition"]
  };

  return (
    <>
      <div className="relative">
        <header
          className={clsx(
            "container min-h-screen lg:min-h-[unset] lg:h-screen z-[1] !max-h-[720px]",
            "px-4 py-20 md:p-6",
            "mx-auto",
            "flex flex-col items-start justify-center"
          )}
        >
          <motion.h1
            initial={animation.initial}
            animate={animation.animate}
            transition={{
              delay: 0.1,
              ...animation.transition
            }}
            className={clsx(
              "font-bold text-4xl leading-[1.25] text-gray-900 dark:text-white md:text-5xl lg:text-6xl",
              "mb-4"
            )}
          >
            {translate.rich("title", {
              wavehand: () => <>&#128075;</>,
              block: (content) => <span className="block">{content}</span>
            })}
          </motion.h1>

          <motion.p
            initial={animation.initial}
            animate={animation.animate}
            transition={{
              delay: 0.2,
              ...animation.transition
            }}
            className={clsx("mb-4", "max-w-xl lg:max-w-2xl", "text-base md:text-lg lg:text-xl")}
          >
            {translate("subtitle")}
          </motion.p>

          <motion.button
            initial={animation.initial}
            animate={animation.animate}
            transition={{
              delay: 0.3,
              ...animation.transition
            }}
            type="button"
            className={clsx("button button-default", "py-4 px-6", "rounded-lg", "font-semibold")}
          >
            {translate("ctaButtonText")}
          </motion.button>
        </header>
      </div>

      <div className="h-screen"></div>
    </>
  );
};

export async function getStaticProps(router: Router) {
  return {
    props: {
      locale: router.locale || "en",
      messages: (await import(`../messages/${router.locale}.json`)).default
    }
  };
}

export default Home;
