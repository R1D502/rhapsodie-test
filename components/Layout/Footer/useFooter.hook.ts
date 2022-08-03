import { useRouter } from "next/router";
import { useState } from "react";
import { getRouterUrlFromView } from "./utils/utils";

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
  const { push } = useRouter();

  const onClickIconView = (view: Views) => () => {
    setCurrentView(view);
    push(getRouterUrlFromView(view));
  };

  return {
    currentView,
    onClickIconView,
  };
};
