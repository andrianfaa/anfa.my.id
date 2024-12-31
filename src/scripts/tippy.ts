import tippy from "tippy.js";

tippy.setDefaultProps({
  theme: "black"
});

(() => {
  tippy("[data-icon^='reactjs-icon']", {
    content: "ReactJS"
  });

  tippy("[data-icon^='nextjs-icon']", {
    content: "NextJS"
  });

  tippy("[data-icon^='typescript-icon']", {
    content: "TypeScript"
  });

  tippy("[data-icon^='tailwindcss-icon']", {
    content: "TailwindCSS"
  });

  tippy("[data-icon^='vite-icon']", {
    content: "Vite"
  });

  tippy("[data-icon^='css-icon']", {
    content: "CSS3"
  });

  tippy("[data-icon^='redux-icon']", {
    content: "Redux"
  });
})();
