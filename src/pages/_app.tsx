import type { DefaultSeoProps } from "next-seo";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

import { Navbar } from "@/components";

import "@/style.css";

export default function App({ Component, pageProps }: AppProps) {
  const defaultSeo: DefaultSeoProps = {
    title: "Andrian Fadhilla - a young React.js Developer based in Indonesia.",
    description:
      "Andrian Fadhilla (Also known as Anfa) is a young React.js Developer and also a Computer Science student based in Indonesia. He loves to code, music, and coffee.",
    additionalMetaTags: [
      {
        name: "keywords",
        content: [
          "Andrian",
          "Fadhilla",
          "React.js",
          "Developer",
          "Indonesia"
        ].join(", ")
      }
    ],
    openGraph: {
      description:
        "Andrian Fadhilla (Also known as Anfa) is a young React.js Developer and also a Computer Science student based in Indonesia. He loves to code, music, and coffee."
    }
  };

  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
