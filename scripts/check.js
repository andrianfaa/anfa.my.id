// DON'T EDIT THIS FILE!

const path = require("path");
const fs = require("fs");

const srcPath = path.resolve(process.cwd(), "src");

function checkAdditionalTagFile() {
  if (!fs.existsSync(`${srcPath}/constants/additionalTags.ts`)) {
    fs.writeFileSync(
      `${srcPath}/constants/additionalTags.ts`,
      `import type { DefaultSeoProps } from "next-seo";

type AdditionalTagTypes = {
  meta: DefaultSeoProps["additionalMetaTags"];
  link: DefaultSeoProps["additionalLinkTags"];
};

const additionalTag: AdditionalTagTypes = {
  meta: [],
  link: []
};

export default additionalTag;
`
    );
  }
}

checkAdditionalTagFile();
