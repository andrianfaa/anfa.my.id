import type { DefaultSeoProps } from "next-seo";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import { Navbar } from "@/components";
import additionalTag from "@/constants/additionalTags";

import "@/style.css";

export default function App({ Component, pageProps }: AppProps) {
  const defaultSeo: DefaultSeoProps = {
    title: "Andrian Fadhilla - a young React.js Developer based in Indonesia.",
    description:
      "Andrian Fadhilla (Also known as Anfa) is a young React.js Developer and also a Computer Science student based in Indonesia. He loves to code, music, and coffee.",
    additionalMetaTags: [
      {
        name: "robots",
        content: "all"
      },
      {
        name: "keywords",
        content: [
          "Andrian",
          "Fadhilla",
          "React.js",
          "Developer",
          "Indonesia"
        ].join(", ")
      },
      ...additionalTag.meta
    ],
    additionalLinkTags: [...additionalTag.link],
    openGraph: {
      description:
        "Andrian Fadhilla (Also known as Anfa) is a young React.js Developer and also a Computer Science student based in Indonesia. He loves to code, music, and coffee."
    }
  };

  return (
    <>
      <Analytics mode="production" />
      <DefaultSeo {...defaultSeo} />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
