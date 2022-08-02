import { useEffect, useState } from "react";
import { League } from "../hook/api/types";
import { AppContext } from "./AppContext";

export const useAppProvider = (leagues: League[]): AppContext => {
  const [currentLeague, _setCurrentLeague] = useState<League | undefined>(undefined);

  const setCurrentLeague = (league: League): void => {
    if (league) _setCurrentLeague(league);
  };

  useEffect(() => {
    if (!currentLeague && leagues) {
      setCurrentLeague(leagues[0]);
    }
  }, [currentLeague]);

  return {
    leagues,
    currentLeague,
    setCurrentLeague,
  };
};
