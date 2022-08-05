import { Views } from "../useFooter.hook";

export const isViewActive = (pathname: string, view: Views): string | null => {
  if (pathname === view) return "active";
  return null;
};

export const setDefaultView = (pathname: Views): Views => {
  switch (pathname) {
    case Views.LABEL:
      return Views.LABEL;
    case Views.SIGNATURE:
      return Views.SIGNATURE;
    case Views.MARKET:
      return Views.MARKET;
    default:
      const never: never = pathname;
      return never;
      break;
  }
};

export const getRouterUrlFromView = (currentView: Views): string => {
  if (currentView === Views.SIGNATURE) return "/signature";
  return "/";
};

export const setDefaultRoute = (pathname: string): Views => {
  if (pathname === "/signature") return Views.SIGNATURE;
  if (pathname === "/market") return Views.MARKET;
  return Views.LABEL;
};
