import { NavigationBar } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import { DefaultSeo, type DefaultSeoProps } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import "@/styles/root.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const defaultSeo: DefaultSeoProps = {
    title: "Andrian Fadhilla - Computer Science Student and React Developer",
    description: "a Computer Science Student and also Freelance React Developer based in Bekasi, Indonesia"
  };

  return (
    <NextIntlClientProvider
      locale={pageProps.locale}
      messages={pageProps.localize}
      onError={({ code }) => {
        if (code === "MISSING_MESSAGE") return;
      }}
    >
      <DefaultSeo {...defaultSeo} />

      <ThemeProvider attribute="class">
        <NavigationBar />

        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}

export default MyApp;
