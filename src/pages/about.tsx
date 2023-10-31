import { ComingSoon } from "@/components";
import type { NextPage } from "next";
import { Router, useRouter } from "next/router";

const AboutPage: NextPage = () => {
  const { locale } = useRouter();

  return (
    <>
      <ComingSoon locale={locale || "en"} />
    </>
  );
};

export async function getStaticProps({ locale }: Router) {
  return {
    props: {
      locale: locale || "en",
      localize: {
        ...require(`@/localization/pages/index/${locale}.json`),
        ...require(`@/localization/shared/${locale}.json`)
      }
    }
  };
}

export default AboutPage;
