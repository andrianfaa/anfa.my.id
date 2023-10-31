// import { ComingSoon } from "@/components";
import { FRAMER_MOTION_ANIMATION } from "@/constants";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import { Router } from "next/router";

type PageProps = {
  locale: string;
  localize: unknown;
};

const PortfolioPage: NextPage<PageProps> = () => {
  const translate = useTranslations();
  const seo = useTranslations("SEO");

  return (
    <>
      <NextSeo title={seo("title")} description={seo("description")} />

      <div id="header-wrapper" className={clsx("dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-950")}>
        <header
          className={clsx(
            "container relative",
            "px-4 pt-24 pb-8 md:px-6 md:pt-32 md:pb-12",
            "mx-auto",
            "md:flex md:flex-col md:items-center md:justify-center",
            "md:text-center"
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
              "font-bold text-4xl md:text-5xl leading-[1.25] text-gray-900 dark:text-white break-all",
              "mb-4"
            )}
          >
            {translate("title")}
          </motion.h1>

          <motion.p
            initial={FRAMER_MOTION_ANIMATION.initial}
            animate={FRAMER_MOTION_ANIMATION.animate}
            transition={{
              delay: 0.2,
              ...FRAMER_MOTION_ANIMATION.transition
            }}
            className={clsx("md:max-w-xl")}
          >
            {translate("subtitle")}
          </motion.p>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 100
            }}
            transition={{
              ...FRAMER_MOTION_ANIMATION.transition,
              delay: 0.3
            }}
            className={clsx(
              "bg-gray-200 dark:bg-zinc-800 md:bg-gradient-to-r md:from-gray-50 md:via-gray-200 md:to-gray-50 md:dark:from-zinc-950 md:dark:via-zinc-800 md:dark:to-zinc-950",
              "absolute bottom-0 left-0 md:left-[unset]",
              "h-[1px] w-full md:max-w-2xl"
            )}
          ></motion.div>
        </header>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }: Router) {
  return {
    props: {
      locale: locale || "en",
      localize: {
        ...require(`@/localization/pages/portfolio/${locale}.json`),
        ...require(`@/localization/shared/${locale}.json`)
      }
    }
  };
}

export default PortfolioPage;
