import { useState } from "react";
import { ArtistMetrics, LabelProfits } from "../../hook/api/types";
import {
  getArtistMetricsBeneficeBetweenDates,
  getArtistMetricsRevenueBetweenDates,
  getArtistMetricsSalaryBetweenDates,
  getLabelProfitsBeneficeBetweenDates,
  timeValueToTimeString,
} from "../LabelProfits/utils/utils";

export type TimeRangeValue = 0 | 25 | 50 | 75 | 100;

interface UseTimeRangeOutput {
  timeRangeValue: TimeRangeValue;
  onChangeRangeValue: (value: TimeRangeValue) => void;
  timeValueString: string;
  profits: number;
  revenue: number;
  salary: number;
}

interface UseTimeRangeProps {
  labelProfits?: LabelProfits[];
  artistMetrics?: ArtistMetrics[];
}

export const useTimeRange = ({ labelProfits, artistMetrics }: UseTimeRangeProps): UseTimeRangeOutput => {
  const [timeRangeValue, setTimeRangeValue] = useState<TimeRangeValue>(75);

  const timeValueString = timeValueToTimeString(timeRangeValue);

  const onChangeRangeValue = (value: TimeRangeValue): void => {
    setTimeRangeValue(value);
  };

  const profits = labelProfits
    ? getLabelProfitsBeneficeBetweenDates(timeRangeValue, labelProfits)
    : artistMetrics
    ? getArtistMetricsBeneficeBetweenDates(timeRangeValue, artistMetrics)
    : 0;

  const revenue = artistMetrics ? getArtistMetricsRevenueBetweenDates(timeRangeValue, artistMetrics) : 0;
  const salary = artistMetrics ? getArtistMetricsSalaryBetweenDates(timeRangeValue, artistMetrics) : 0;
  return {
    timeRangeValue,
    timeValueString,
    onChangeRangeValue,
    profits,
    revenue,
    salary,
  };
};
