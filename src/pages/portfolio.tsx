import { ComingSoon } from "@/components";
import { getLocalization } from "@/utils";
import type { NextPage } from "next";
import { Router } from "next/router";

type PageProps = {
  locale: string;
  localize: unknown;
};

const PortfolioPage: NextPage<PageProps> = ({ locale }: PageProps) => {
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
      localize: await getLocalization(router.locale)
    }
  };
}

export default PortfolioPage;
