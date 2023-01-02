const path = require("path");

const imageSrc = path.resolve(process.cwd(), "public", "assets", "logo.png"); // /public/assets/logo.png

module.exports = {
  img: imageSrc, // File sources, required.
  config: {
    // configuration, required.
    path: "/favicons",
    appName: "Andrian Fadhilla Portfolio Website",
    appShortName: "Anfa Portfolio Website",
    appDescription:
      "Andrian Fadhilla (Also known as Anfa) is a young React.js Developer and also a Computer Science student based in Indonesia. He loves to code, music, and coffee.",
    lang: "en-US", // Primary language for name and short_name
    background: "#191F2E", // Background colour for flattened icons. `string`
    theme_color: "#191F2E", // Theme color user for example in Android's task switcher. `string`
    appleStatusBarStyle: "#191F2E",
    display: "standalone",
    orientation: "any",
    scope: "/",
    start_url: "/",
    version: "1.1.0"
  }
};
