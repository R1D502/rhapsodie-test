import { useApp } from "../../context/useAppContext.hook";
import { Stats, StatsLabelValue } from "../Stats/Stats";
import { TimeRange } from "../TimeRange/TimeRange";
import { useTimeRange } from "../TimeRange/useTimeRange.hook";

export const LabelProfits: React.FC = () => {
  const { currentLabelAndLabelProfits } = useApp();
  const labelProfits = currentLabelAndLabelProfits?.label_profits || [];
  const { timeRangeValue, timeValueString, onChangeRangeValue, profits } = useTimeRange({ labelProfits });
  if (!currentLabelAndLabelProfits) return null;
  return (
    <div className="w-5/6 h-3/6 flex justify-around items-center flex-col">
      <h1 className="text-3xl text-bold text-left">{currentLabelAndLabelProfits.name}</h1>
      <Stats timeValueString={timeValueString} value={profits} label={StatsLabelValue.PROFITS} />
      <TimeRange onChangeRangeValue={onChangeRangeValue} timeRangeValue={timeRangeValue} />
    </div>
  );
};
