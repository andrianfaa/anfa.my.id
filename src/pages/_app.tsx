import { NavigationBar } from "@/components";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import "@/styles/root.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NavigationBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
