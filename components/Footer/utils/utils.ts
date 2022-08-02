import { Views } from "../useFooter.hook";

export const isViewActive = (currentView: Views, view: Views): string | null => {
  if (currentView === view) return "active";
  return null;
};
