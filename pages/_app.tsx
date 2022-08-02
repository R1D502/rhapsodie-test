import App, { AppContext, AppProps } from "next/app";
import { Layout } from "../components/Layout/Layout";
import { AppProvider } from "../context/AppProvider";
import { League } from "../hook/api/types";
import { useApi } from "../hook/api/useApi.hook";
import "../styles/globals.css";

function MyApp({ Component, pageProps, leagues }: AppProps & { leagues: League[] }) {
  console.log(leagues[0]);
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
  return { ...pageProps, leagues };
};
export default MyApp;
