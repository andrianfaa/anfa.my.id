import { ComingSoon } from "@/components";
import type { NextPage } from "next";
import { Router } from "next/router";

type PageProps = {
  locale: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: any;
};

const AboutPage: NextPage<PageProps> = ({ locale }: PageProps) => {
  return (
    <>
      <ComingSoon locale={locale} />
    </>
  );
};

export async function getStaticProps(router: Router) {
  return {
    props: {
      locale: router.locale || "en",
      messages: (await import(`../messages/${router.locale}.json`)).default
    } as PageProps
  };
}

export default AboutPage;
