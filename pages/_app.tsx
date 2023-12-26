import type { AppProps } from "next/app";
import GoatCounter from "../components/goat-counter";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoatCounter />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
