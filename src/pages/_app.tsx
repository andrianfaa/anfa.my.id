import type { DefaultSeoProps } from "next-seo";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import { Navbar } from "@/components";
import additionalTag from "@/constants/additionalTags";

import "@/styles/style.scss";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const defaultSeo: DefaultSeoProps & {
    twitter: {
      [key: string]: any;
    };
  } = {
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
      },
      ...additionalTag.meta
    ],
    themeColor: "#191F2E",
    canonical: `${process.env.BASE_URl}`,
    defaultOpenGraphImageWidth: 1200,
    defaultOpenGraphImageHeight: 630,
    additionalLinkTags: [...additionalTag.link],
    openGraph: {
      images: [
        {
          url: `${process.env.BASE_URL}/api/og-image?theme=light&title=Andrian Fadhilla - a young React.js Developer based in Indonesia.&description=Andrian Fadhilla (Also known as Anfa) is a young React.js Developer and also a Computer Science student based in Indonesia. He loves to code, music, and coffee.`,
          alt: "Open Graph Image",
          height: 630,
          width: 1200,
          secureUrl: `${process.env.BASE_URL}/api/og-image?theme=light&title=Andrian Fadhilla - a young React.js Developer based in Indonesia.&description=Andrian Fadhilla (Also known as Anfa) is a young React.js Developer and also a Computer Science student based in Indonesia. He loves to code, music, and coffee.`,
          type: "image/png"
        }
      ],
      title:
        "Andrian Fadhilla - a young React.js Developer based in Indonesia.",
      siteName: "www.anfa.my.id",
      url: process.env.BASE_URL,
      defaultImageHeight: 630,
      defaultImageWidth: 1200,
      type: "website",
      description:
        "Andrian Fadhilla (Also known as Anfa) is a young React.js Developer and also a Computer Science student based in Indonesia. He loves to code, music, and coffee."
    },
    twitter: {
      site: process.env.BASE_URL,
      cardType: "summary_large_image",
      creator: "@andrianfaa"
    } as {
      [key: string]: any;
    }
  };

  return (
    <>
      {/* additional tags that are not in default Seo */}
      <Head>
        <meta
          name="twitter:creator"
          content={(defaultSeo.twitter.creator as string) || "@andrianfaa"}
        />
      </Head>

      <Analytics mode="production" />
      <DefaultSeo {...defaultSeo} />

      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
