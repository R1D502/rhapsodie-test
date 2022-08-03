import { useEffect, useState } from "react";
import { Label, League, Signature } from "../hook/api/types";
import { useApi } from "../hook/api/useApi.hook";
import { AppContext } from "./AppContext";

export const useAppProvider = (leagues: League[]): AppContext => {
  const { getLabelAndLabelProfitsByLeagueId, getSignaturesAndArtistsByLabelId } = useApi();
  const [currentLeague, _setCurrentLeague] = useState<League | undefined>(undefined);
  const [currentLabelAndLabelProfits, setCurrentLabelAndLabelProfits] = useState<Label | undefined>(undefined);
  const [currentSignatureAndArtist, setcurrentSignatureAndArtist] = useState<Signature[]>([]);

  const setCurrentLeague = (league: League): void => {
    if (league) _setCurrentLeague(league);
  };

  useEffect(() => {
    const setUsersData = async (currentLeagueId: number, currentLabelId: number) => {
      const labelAndLabelProfits = await getLabelAndLabelProfitsByLeagueId(currentLeagueId);
      const signatureAndArtist = await getSignaturesAndArtistsByLabelId(currentLabelId);
      setCurrentLabelAndLabelProfits(labelAndLabelProfits);
      setcurrentSignatureAndArtist(signatureAndArtist);
    };

    if (currentLeague && currentLabelAndLabelProfits) {
      setUsersData(currentLeague?.id, currentLabelAndLabelProfits.id);
    }

    if (!currentLeague && leagues.length >= 1) setCurrentLeague(leagues[0]);
  }, [currentLeague]);

  return {
    leagues,
    currentLeague,
    currentLabelAndLabelProfits,
    setCurrentLeague,
    currentSignatureAndArtist,
  };
};
