import { Views } from "../useFooter.hook";
import { getRouterUrlFromView, isViewActive } from "./utils";

describe("isViewActive", () => {
  it.each([
    [Views.ARTIST, Views.LABEL, null],
    [Views.LABEL, Views.LABEL, "active"],
    [Views.MARKET, Views.MARKET, "active"],
    [Views.SIGNATURE, Views.LABEL, null],
  ])("isViewActive(%s, %s) should return %s", (currentView, clickedView, expected) => {
    expect(isViewActive(currentView, clickedView)).toBe(expected);
  });

  it.each([
    [Views.MARKET, "/"],
    [Views.LABEL, "/"],
    [Views.SIGNATURE, "/signature"],
  ])("isViewActive(%s, %s) should return %s", (clickedView, expected) => {
    expect(getRouterUrlFromView(clickedView)).toBe(expected);
  });
});
