import { Views } from "../useFooter.hook";

export const isViewActive = (currentView: Views, view: Views): string | null => {
  if (currentView === view) return "active";
  return null;
};

export const getRouterUrlFromView = (currentView: Views): string => {
  if (currentView === Views.SIGNATURE) return "/signature";
  return "/";
};

export const setDefaultRoute = (pathname: string): Views => {
  if (pathname === "/signature") return Views.SIGNATURE;
  return Views.LABEL;
};
