import { mockedArtistMetrics } from "../../LabelProfits/utils/utils.fixtures";
import { getLastSalaryFromArtisAndMetrics } from "./utils";

describe("getLastSalaryFromArtisAndMetrics", () => {
  it("should get the last salary of artist", () => {
    expect(getLastSalaryFromArtisAndMetrics(mockedArtistMetrics)).toStrictEqual(922);
  });
});
