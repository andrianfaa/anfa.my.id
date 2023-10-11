import clsx from "clsx";
import { AnimationProps, motion } from "framer-motion";
import type { NextPage } from "next";

const Home: NextPage = () => {
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
            "container min-h-screen z-[1]",
            "p-4 md:p-6",
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
            Hi!&#128075; <span className="block">I&rsquo;m Andrian Fadhilla.</span>
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
            a Computer Science Student and also Freelance React Developer based in Bekasi, Indonesia.
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
            Learn more about me
          </motion.button>
        </header>
      </div>

      <div className="h-screen"></div>
    </>
  );
};

export default Home;
