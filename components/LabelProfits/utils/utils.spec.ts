import { LabelProfits } from "../../../hook/api/types";
import { TimeRangeValue } from "../useLabelProfits.hook";
import { getLabelProfitsByTimeRange, sumLabelProfitsFunds, timeValueToDate, timeValueToTimeString } from "./utils";
import { mockedLabelProfits, TODAY } from "./utils.fixtures";

type TimeValueToTimeStringInput = [TimeRangeValue, string];

type TimeValueToDateInput = [Date, TimeRangeValue, Date];

type GetLabelProfitsByTimeRangeInput = [Date, LabelProfits[], number];

type SumLabelProfitsFundsInput = [LabelProfits[], number];
describe("LabelProfits", () => {
  it.each([
    [0, "Year"],
    [25, "Trimester"],
    [50, "Month"],
    [75, "Week"],
    [100, "Day"],
  ] as TimeValueToTimeStringInput[])("timeValueToTimeString(%s) should return %s", (input, expected) => {
    expect(timeValueToTimeString(input)).toStrictEqual(expected);
  });

  it.each([
    [new Date("2022-07-28"), 0, new Date(new Date(TODAY).setFullYear(new Date(TODAY).getFullYear() - 1))],
    [new Date("2022-07-28"), 25, new Date(new Date(TODAY).setMonth(new Date(TODAY).getMonth() - 3))],
    [new Date("2022-07-28"), 50, new Date(new Date(TODAY).setMonth(new Date(TODAY).getMonth() - 1))],
    [new Date("2022-07-28"), 75, new Date(new Date(TODAY).setDate(new Date(TODAY).getDate() - 7))],
    [new Date("2022-07-28"), 100, new Date(new Date(TODAY).setDate(new Date(TODAY).getDate() - 1))],
  ] as TimeValueToDateInput[])("timeValueToTimeString(%s, %s) should return %s", (today, input, expected) => {
    expect(timeValueToDate(today, input)).toStrictEqual(expected);
  });

  it.each([
    [new Date("2022-07-28"), mockedLabelProfits, 1],
    [new Date("2021-07-28"), mockedLabelProfits, 4],
    [new Date("2022-07-27"), mockedLabelProfits, 2],
    [new Date("2022-07-26"), mockedLabelProfits, 3],
  ] as GetLabelProfitsByTimeRangeInput[])("getLabelProfitsByTimeRange(%s, %s) should return %s", (today, input, expected) => {
    expect(getLabelProfitsByTimeRange(today, input)).toHaveLength(expected);
  });

  it.each([
    [mockedLabelProfits, 16869],
    [mockedLabelProfits.slice(0, 2), 6561],
  ] as SumLabelProfitsFundsInput[])("getLabelProfitsByTimeRange(%s, %s) should return %s", (input, expected) => {
    console.log(mockedLabelProfits.slice(0, 2));
    expect(sumLabelProfitsFunds(input)).toBe(expected);
  });
});
