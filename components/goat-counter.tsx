import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    // https://www.goatcounter.com/help/js
    goatcounter?: {
      count(vars?: {
        path?: string;
        title?: string;
        referrer?: string;
        event?: boolean;
      }): void;
    };
  }
}

const GOAT_COUNTER_API_URL = "https://stats.tzyl.dev/count";
const GOAT_COUNTER_SCRIPT_URL = "/count.js";

const GoatCounter = () => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => window.goatcounter?.count();
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);
  return (
    <Script
      data-goatcounter={GOAT_COUNTER_API_URL}
      src={GOAT_COUNTER_SCRIPT_URL}
      strategy="afterInteractive"
    />
  );
};

export default GoatCounter;
