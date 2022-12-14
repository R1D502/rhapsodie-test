import { useRouter } from "next/router";
import { useState } from "react";
import { setDefaultRoute } from "../components/Layout/Footer/utils/utils";

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
  const { pathname, push } = useRouter();
  const [currentView, setCurrentView] = useState(setDefaultRoute(pathname));
  const onClickIconView = (view: Views) => () => {
    setCurrentView(view);
    push(view);
  };

  return {
    currentView,
    onClickIconView,
  };
};
