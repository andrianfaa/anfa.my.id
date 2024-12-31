import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".navbar", { y: -100, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5, duration: 0.5, ease: "sine" });

gsap.utils.toArray("#hero-section h1 span.block").forEach((element, index) => {
  gsap.from(element as Element, {
    y: 50,
    opacity: 0,
    delay: 0.15 + index * 0.15,
    duration: 0.5,
    ease: "circ",
    stagger: 0.15
  });
});

gsap.from("#hero-section #greeting", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  ease: "circ"
});

gsap.from("header #current-activity", {
  y: 50,
  opacity: 0,
  delay: 0.3,
  duration: 0.5,
  ease: "circ",
  stagger: 0.15
});

gsap.utils.toArray(".animate-on-scroll").forEach((element, index) => {
  const isImage = (element as HTMLElement | Element)?.tagName === "IMG";

  gsap.from(element as HTMLElement | Element, {
    scrollTrigger: {
      trigger: element as HTMLElement | Element,
      start: isImage ? "bottom 120%" : "bottom 95%"
    },
    y: 50,
    opacity: 0,
    duration: 0.5,
    scale: isImage ? 0.9 : undefined,
    ease: "circ"
  });
});
