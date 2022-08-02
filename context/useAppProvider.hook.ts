import { useEffect, useState } from "react";
import { Label, League } from "../hook/api/types";
import { useApi } from "../hook/api/useApi.hook";
import { AppContext } from "./AppContext";

export const useAppProvider = (leagues: League[]): AppContext => {
  const { getLabelAndLabelProfitsByLeagueId } = useApi();
  const [currentLeague, _setCurrentLeague] = useState<League | undefined>(undefined);
  const [currentLabelAndLabelProfits, setCurrentLabelAndLabelProfits] = useState<Label | undefined>(undefined);

  const setCurrentLeague = (league: League): void => {
    if (league) _setCurrentLeague(league);
  };

  useEffect(() => {
    const setUsersData = async (currentLeagueId: number) => {
      const labelAndLabelProfits = await getLabelAndLabelProfitsByLeagueId(currentLeagueId);
      setCurrentLabelAndLabelProfits(labelAndLabelProfits);
    };

    if (currentLeague) {
      setUsersData(currentLeague?.id);
    }

    if (!currentLeague && leagues.length >= 1) setCurrentLeague(leagues[0]);
  }, [currentLeague]);

  return {
    leagues,
    currentLeague,
    currentLabelAndLabelProfits,
    setCurrentLeague,
  };
};
