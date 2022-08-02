import { useCallback, useEffect, useState } from "react";
import { League } from "../hook/api/types";
import { useApi } from "../hook/api/useApi.hook";
import { AppContext } from "./AppContext";

export const useAppProvider = (): AppContext => {
  const [currentLeague, _setCurrentLeague] = useState<League | undefined>(undefined);
  const { getLeagues } = useApi();

  const setCurrentLeague = (league: League): void => {
    if (league) _setCurrentLeague(league);
  };

  useEffect(() => {
    const getDefaultLeague = async () => {
      const leagues = await getLeagues();
      console.log("HEY", leagues);
      setCurrentLeague(leagues[0]);
    };
    if (!currentLeague) {
      getDefaultLeague();
    }
  }, [currentLeague]);

  return {
    currentLeague,
    setCurrentLeague,
  };
};
