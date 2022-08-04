import { ArtistMetrics, LabelProfits } from "../../../hook/api/types";
import { TimeRangeValue } from "../../TimeRange/useTimeRange.hook";
import {
  getArtistMetricsByTimeRange,
  getLabelProfitsByTimeRange,
  sumArtistMetricsFunds,
  sumLabelProfitsFunds,
  timeValueToDateFromToday,
  timeValueToTimeString,
} from "./utils";
import { mockedArtistMetrics, mockedLabelProfits, TODAY } from "./utils.fixtures";

type TimeValueToTimeStringInput = [TimeRangeValue, string];

type TimeValueToDateInput = [Date, TimeRangeValue, Date];

type GetLabelProfitsByTimeRangeInput = [Date, LabelProfits[], number];

type GetArtistMetricsByTimeRangeInput = [Date, ArtistMetrics[], number];

type SumLabelProfitsFundsInput = [LabelProfits[], number];

type SumArtistMetricsFundsInput = [ArtistMetrics[], number];
describe("LabelProfits", () => {
  it.each([
    [0, "Year"],
    [25, "3 Months"],
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
    expect(timeValueToDateFromToday(today, input)).toStrictEqual(expected);
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
    [new Date("2022-07-23"), mockedArtistMetrics, 3],
    [new Date("2022-07-25"), mockedArtistMetrics, 2],
    [new Date("2022-07-26"), mockedArtistMetrics, 1],
  ] as GetArtistMetricsByTimeRangeInput[])("getArtistMetricsByTimeRange(%s, %s) should return %s", (today, input, expected) => {
    expect(getArtistMetricsByTimeRange(today, input)).toHaveLength(expected);
  });

  it.each([
    [mockedLabelProfits, 16869],
    [mockedLabelProfits.slice(0, 2), 6561],
  ] as SumLabelProfitsFundsInput[])("getLabelProfitsByTimeRange(%s, %s) should return %s", (input, expected) => {
    expect(sumLabelProfitsFunds(input)).toBe(expected);
  });

  it.each([
    [mockedArtistMetrics, -262],
    [mockedArtistMetrics.slice(0, 2), -248],
  ] as SumArtistMetricsFundsInput[])("getArtistMetricsByTimeRange(%s, %s) should return %s", (input, expected) => {
    expect(sumArtistMetricsFunds(input)).toBe(expected);
  });
});
