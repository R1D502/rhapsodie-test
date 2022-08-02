import { useState } from "react";

export enum Views {
  SIGNATURE = "SIGNATURE",
  MARKET = "MARKET",
  ARTIST = "ARTIST",
  LABEL = "LABEL",
}

interface UseFooterMenuOutput {
  currentView: Views;
  onClickIconView: (view: Views) => () => void;
}

export const useFooterMenu = (): UseFooterMenuOutput => {
  const [currentView, setCurrentView] = useState(Views.LABEL);

  const onClickIconView = (view: Views) => () => {
    setCurrentView(view);
  };

  return {
    currentView,
    onClickIconView,
  };
};
