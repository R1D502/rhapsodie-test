import "../styles/globals.css";
import { AppProvider } from "../context/AppProvider";
import { useApi } from "../hook/api/useApi.hook";
import App from "next/app";
import { League } from "../hook/api/types";
import type { AppProps as NextAppProps, AppContext } from "next/app";
import { Layout } from "../components/Layout/Layout";

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;
function MyApp({ Component, pageProps, leagues }: AppProps & { leagues: League[] }) {
  return (
    <AppProvider leagues={leagues}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const pageProps = await App.getInitialProps(ctx);
  const { getLeagues } = useApi();
  const leagues = await getLeagues();
  console.log("LEAGUE ==>", leagues);
  return { ...pageProps, leagues };
};
export default MyApp;
