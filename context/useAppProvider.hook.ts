import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useFooterMenu, Views } from "../components/Layout/Footer/useFooter.hook";
import { Label, League, Signature } from "../hook/api/types";
import { useApi } from "../hook/api/useApi.hook";
import { AppContext } from "./AppContext";

export const useAppProvider = (leagues: League[]): AppContext => {
  const { currentView, onClickIconView } = useFooterMenu();
  const { getLabelAndLabelProfitsByLeagueId, getSignaturesAndArtistsByLabelId } = useApi();
  const [currentLeague, _setCurrentLeague] = useState<League | undefined>(undefined);
  const [currentLabelAndLabelProfits, setCurrentLabelAndLabelProfits] = useState<Label | undefined>(undefined);
  const [currentSignatureAndArtist, setcurrentSignatureAndArtist] = useState<Signature[]>([]);
  const { pathname, push, query } = useRouter();

  const setCurrentLeague = (league: League): void => {
    if (league) _setCurrentLeague(league);
  };

  useEffect(() => {
    const setUserLabelAndLabelProfits = async (currentLeagueId: number) => {
      const labelAndLabelProfits = await getLabelAndLabelProfitsByLeagueId(currentLeagueId);
      setCurrentLabelAndLabelProfits(labelAndLabelProfits);
    };

    const setUserSignatureAndArtist = async (currentLabelId: number) => {
      const signatureAndArtist = await getSignaturesAndArtistsByLabelId(currentLabelId);
      setcurrentSignatureAndArtist(signatureAndArtist);
    };

    if (currentLeague) {
      setUserLabelAndLabelProfits(currentLeague?.id);
    }

    if (currentLabelAndLabelProfits && currentView === Views.SIGNATURE) {
      setUserSignatureAndArtist(currentLabelAndLabelProfits.id);
    }

    if (!currentLeague && leagues.length >= 1) setCurrentLeague(leagues[0]);
  }, [currentLeague, currentView]);

  return {
    leagues,
    currentLeague,
    currentLabelAndLabelProfits,
    currentSignatureAndArtist,
    setCurrentLeague,
    currentView,
    onClickIconView,
  };
};
