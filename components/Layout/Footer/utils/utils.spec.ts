import { Views } from "../useFooter.hook";
import { isViewActive } from "./utils";

describe("isViewActive", () => {
  it.each([
    [Views.LABEL, Views.LABEL, "active"],
    [Views.MARKET, Views.MARKET, "active"],
    [Views.SIGNATURE, Views.LABEL, null],
  ])("isViewActive(%s, %s) should return %s", (currentView, clickedView, expected) => {
    expect(isViewActive(currentView, clickedView)).toBe(expected);
  });
});
