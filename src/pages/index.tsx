import { FRAMER_MOTION_ANIMATION } from "@/constants";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import { Router } from "next/router";

const Home: NextPage = () => {
  const translate = useTranslations();
  const seo = useTranslations("SEO");

  return (
    <>
      <NextSeo title={seo("title")} description={seo("description")} />

      <div className="relative header-background dark:header-background-dark">
        <header
          className={clsx(
            "container min-h-screen lg:min-h-[unset] lg:h-screen z-[1] !max-h-[720px]",
            "px-4 py-20 md:p-6",
            "mx-auto",
            "flex flex-col items-start justify-center"
          )}
        >
          <motion.h1
            initial={FRAMER_MOTION_ANIMATION.initial}
            animate={FRAMER_MOTION_ANIMATION.animate}
            transition={{
              delay: 0.1,
              ...FRAMER_MOTION_ANIMATION.transition
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
            initial={FRAMER_MOTION_ANIMATION.initial}
            animate={FRAMER_MOTION_ANIMATION.animate}
            transition={{
              delay: 0.2,
              ...FRAMER_MOTION_ANIMATION.transition
            }}
            className={clsx("mb-4", "max-w-xl lg:max-w-2xl", "text-base md:text-lg lg:text-xl")}
          >
            {translate("subtitle")}
          </motion.p>

          <motion.button
            initial={FRAMER_MOTION_ANIMATION.initial}
            animate={FRAMER_MOTION_ANIMATION.animate}
            transition={{
              delay: 0.3,
              ...FRAMER_MOTION_ANIMATION.transition
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

export async function getStaticProps({ locale }: Router) {
  return {
    props: {
      locale: locale || "en",
      localize: {
        ...require(`@/localization/pages/index/${locale}.json`),
        ...require(`@/localization/shared/${locale}.json`)
      }
    }
  };
}

export default Home;
