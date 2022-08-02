import { useState } from "react";
import { League } from "../hook/api/types";
import { AppContext } from "./AppContext";

export const useAppProvider = (): AppContext => {
  const [currentLeague, _setCurrentLeague] = useState<League | undefined>(undefined);

  const setCurrentLeague = (league: League): void => {
    _setCurrentLeague(league);
  };

  return {
    currentLeague,
    setCurrentLeague,
  };
};
