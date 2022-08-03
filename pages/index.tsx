import type { NextPage } from "next";
import Head from "next/head";
import { LabelProfits } from "../components/LabelProfits/LabelProfits";
import { TimeRange } from "../components/LabelProfits/TimeRange/TimeRange";
import { useLabelProfits } from "../components/LabelProfits/useLabelProfits.hook";
import { useApp } from "../context/useAppContext.hook";

const Label: React.FC = () => {
  const { currentLabelAndLabelProfits } = useApp();
  const labelProfits = currentLabelAndLabelProfits?.label_profits || [];
  const { timeRangeValue, timeValueString, onChangeRangeValue, profits } = useLabelProfits(labelProfits);
  if (!currentLabelAndLabelProfits) return null;
  return (
    <div className="w-5/6 flex justify-center items-center flex-col">
      <h1 className="text-3xl text-bold text-left">{currentLabelAndLabelProfits.name}</h1>
      <LabelProfits timeValueString={timeValueString} profits={profits} />
      <TimeRange onChangeRangeValue={onChangeRangeValue} timeRangeValue={timeRangeValue} />
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Head>
        <title>Label</title>
        <meta name="Label" content="Rhapsodie Label page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Label />
    </div>
  );
};

export default Home;
