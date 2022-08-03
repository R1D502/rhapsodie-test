import { LabelProfits } from "../../../hook/api/types";
import { TimeRangeValue } from "../useLabelProfits.hook";

export const timeValueToTimeString = (value: TimeRangeValue): string => {
  switch (value) {
    case 0:
      return "Year";
    case 25:
      return "3 Months";
    case 50:
      return "Month";
    case 75:
      return "Week";
    case 100:
      return "Day";
    default:
      const never: never = value;
      return never;
  }
};

export const timeValueToDate = (today: Date, value: TimeRangeValue): Date => {
  switch (value) {
    case 0:
      return new Date(today.setFullYear(today.getFullYear() - 1));
    case 25:
      return new Date(today.setMonth(today.getMonth() - 3));
    case 50:
      return new Date(today.setMonth(today.getMonth() - 1));
    case 75:
      return new Date(today.setDate(today.getDate() - 7));
    case 100:
      return new Date(today.setDate(today.getDate() - 1));
    default:
      const never: never = value;
      return never;
  }
};

export const getLabelProfitsByTimeRange = (date: Date, labelProfits: LabelProfits[]): LabelProfits[] => {
  return labelProfits.filter(labelProfit => new Date(labelProfit.date).getTime() >= date.getTime());
};

export const sumLabelProfitsFunds = (labelProfits: LabelProfits[]): number => {
  return labelProfits.reduce((acc, labelProfit) => acc + labelProfit.daily_profit, 0);
};

export const getLabelProfitsBeneficeBetweenDates = (value: TimeRangeValue, labelProfits: LabelProfits[]): number => {
  if (!labelProfits) return 0;
  const TODAY = new Date("2022-07-28");
  const date = timeValueToDate(TODAY, value);
  const targetedLabelProfits = getLabelProfitsByTimeRange(date, labelProfits);
  return sumLabelProfitsFunds(targetedLabelProfits);
};
