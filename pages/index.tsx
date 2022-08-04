import type { NextPage } from "next";
import Head from "next/head";
import { LabelProfits } from "../components/LabelProfits/LabelProfits";

const Home: NextPage = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Head>
        <title>Label</title>
        <meta name="Label" content="Rhapsodie Label page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LabelProfits />
    </div>
  );
};

export default Home;
