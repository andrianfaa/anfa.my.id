import type { AnimationProps } from "framer-motion";

export const FRAMER_MOTION_ANIMATION = {
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
