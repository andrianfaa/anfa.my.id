import { NavigationBar } from "@/components";
import clsx from "clsx";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import "@/styles/root.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const { events } = useRouter();

  const [playAnimation, setPlayAnimation] = useState<boolean>(false);

  const handler = useCallback(() => {
    setPlayAnimation(true);
    setTimeout(() => setPlayAnimation(false), 300);
  }, []);

  useEffect(() => {
    events.on("routeChangeComplete", () => setPlayAnimation(false));
    events.on("routeChangeStart", () => setPlayAnimation(true));

    return () => {
      events.off("routeChangeStart", () => setPlayAnimation(true));
      events.off("routeChangeComplete", () => setPlayAnimation(false));
    };
  }, [handler, events]);

  return (
    <ThemeProvider attribute="class">
      <NavigationBar />

      <main
        className={clsx(
          playAnimation
            ? "-translate-y-6 opacity-0"
            : "transition-all duration-300 ease-in-out opacity-100 translate-y-0"
        )}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
