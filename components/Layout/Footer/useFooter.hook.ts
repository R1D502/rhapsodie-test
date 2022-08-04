import { useRouter } from "next/router";
import { useState } from "react";
import { setDefaultRoute } from "./utils/utils";

export enum Views {
  SIGNATURE = "/signature",
  MARKET = "/market",
  LABEL = "/",
}

interface UseBottomNavBarOutput {
  currentView: Views;
  onClickIconView: (view: Views) => () => void;
}

export const useBottomNavBar = (): UseBottomNavBarOutput => {
  const { pathname, push, query } = useRouter();
  const [currentView, setCurrentView] = useState(setDefaultRoute(pathname));
  console.log(currentView, query);
  const onClickIconView = (view: Views) => () => {
    setCurrentView(view);
    push(view);
  };

  return {
    currentView,
    onClickIconView,
  };
};
