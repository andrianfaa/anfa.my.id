import type { AppProps } from "next/app";
import { NavigationBar } from "@/components/Navigation";
import { ThemeProvider } from "next-themes";

import "../styles/root.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NavigationBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
