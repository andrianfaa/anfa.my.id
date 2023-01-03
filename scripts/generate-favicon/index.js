/* eslint-disable global-require */
const { favicons, config: defaultConfig } = require("favicons");
const path = require("path");
const fs = require("fs");

const { HTMLToJSON } = require("./helpers");

// const targetPath = path.resolve(`${process.cwd()}/public/favicons`);

const defaultConfiguration = {
  ...defaultConfig.defaults,
  path: "/favicons",
  appName: "Andrian Fadhilla Portfolio Website",
  appShortName: "Anfa Portfolio Website",
  dir: "auto",
  appDescription:
    "Andrian Fadhilla (Also known as Anfa) is a young React.js Developer and also a Computer Science student based in Indonesia. He loves to code, music, and coffee.",
  lang: "en-US", // Primary language for name and short_name
  background: "#191F2E", // Background colour for flattened icons. `string`
  theme_color: "#191F2E", // Theme color user for example in Android's task switcher. `string`
  appleStatusBarStyle: "#191F2E",
  preferRelatedApplications: false,
  relatedApplications: undefined,
  display: "standalone",
  orientation: "any",
  scope: "/",
  start_url: "/",
  version: "1.1.0",
  pixel_art: false,
  icons: {
    favicons: true,
    yandex: true,
    android: true,
    appleIcon: true,
    windows: true,

    // if you want to enable below options, you have to change ConvertHTMLToJson function in 'helpers/html-to-json.js' file
    appleStartup: false
  },
  loadManifestWithCredentials: false,
  manifestMaskable: true
};

function cleanDirectory(files, filePath) {
  files
    .filter((file) => file)
    .forEach((file) => {
      if (fs.existsSync(`${filePath}/${file}`)) {
        fs.rmSync(`${filePath}/${file}`);
      }
    });
}

async function buildFavicons() {
  let config = null;

  if (fs.existsSync(`${process.cwd()}/favicon.config.js`)) {
    // eslint-disable-next-line import/no-dynamic-require
    config = require("../../favicon.config.js");
  } else {
    throw new Error("'favicon.config.js' not found in root project!");
  }

  if (typeof config.img === "undefined") {
    throw new Error("'Object.img' not defined, please define the image source");
  }

  if (typeof config.config === "undefined") {
    throw new Error("'Object.config' is required!");
  }

  try {
    const response = await favicons(config.img, {
      ...defaultConfiguration,
      ...config.config,
      icons: {
        ...defaultConfiguration.icons,
        ...config.config.icons
      }
    });

    // target path in "/public/{path}"
    const targetPath = path.resolve(
      `${process.cwd()}/public/${
        config.config.path || defaultConfiguration.path
      }`
    );

    // check if path exists or not
    if (fs.existsSync(targetPath)) {
      await cleanDirectory(fs.readdirSync(targetPath), targetPath);
      fs.rmdirSync(targetPath);
    }

    // create favicons folder
    fs.mkdirSync(targetPath);

    // write images files
    response.images.forEach(({ name, contents }) => {
      fs.writeFileSync(`${targetPath}/${name}`, contents, {
        encoding: "utf-8"
      });
    });

    // write files
    response.files.forEach(({ name, contents }) => {
      fs.writeFileSync(`${targetPath}/${name}`, contents, {
        encoding: "utf-8"
      });
    });

    // copy /public/favicons/favicon.ico to /public
    fs.copyFileSync(
      `${targetPath}/favicon.ico`,
      `${process.cwd()}/public/favicon.ico`
    );

    const json = HTMLToJSON(response.html);

    // rewrite additionalTags.ts file
    fs.writeFileSync(
      `${process.cwd()}/src/constants/additionalTags.ts`, // filename: additionalTags.ts
      `/* eslint-disable prettier/prettier */
import type { DefaultSeoProps } from "next-seo";

type AdditionalTagTypes = {
  meta: DefaultSeoProps["additionalMetaTags"];
  link: DefaultSeoProps["additionalLinkTags"];
};

const additionalTag: AdditionalTagTypes = {
  meta: ${JSON.stringify(json.meta)},
  link: ${JSON.stringify(json.link)}
}

export default additionalTag;
    `
    );

    console.info("Favicon created successfully!");
  } catch (error) {
    console.log(error);
  }
}

buildFavicons();
