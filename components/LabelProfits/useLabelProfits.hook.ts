import { useState } from "react";
import { LabelProfits } from "../../hook/api/types";
import { getLabelProfitsBeneficeBetweenDates, timeValueToTimeString } from "./utils/utils";

export type TimeRangeValue = 0 | 25 | 50 | 75 | 100;

interface UseLabelProfitsOutput {
  timeRangeValue: TimeRangeValue;
  onChangeRangeValue: (value: TimeRangeValue) => void;
  timeValueString: string;
  profits: number;
}

export const useLabelProfits = (labelProfits: LabelProfits[]): UseLabelProfitsOutput => {
  const [timeRangeValue, setTimeRangeValue] = useState<TimeRangeValue>(0);

  const timeValueString = timeValueToTimeString(timeRangeValue);

  const onChangeRangeValue = (value: TimeRangeValue): void => {
    setTimeRangeValue(value);
  };

  return {
    timeRangeValue,
    timeValueString,
    onChangeRangeValue,
    profits: getLabelProfitsBeneficeBetweenDates(timeRangeValue, labelProfits),
  };
};
