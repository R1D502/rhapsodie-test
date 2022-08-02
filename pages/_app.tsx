import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "../context/AppProvider";
import { useApi } from "../hook/api/useApi.hook";
import { League } from "../hook/api/types";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
