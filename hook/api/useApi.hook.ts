import axios from "axios";
import { Label, League, Signature } from "./types";

const BASE_URL = "http://localhost:3000";

interface UseApiOutput {
  getLabelAndLabelProfitsByLeagueId: (leagueId: number) => Promise<Label>;
  getSignaturesAndArtistsByLabelId: (labelId: number) => Promise<Signature[]>;
  getLeagues: () => Promise<League[]>;
}

export const useApi = (): UseApiOutput => {
  const getLabelAndLabelProfitsByLeagueId = async (leagueId: number): Promise<Label> => {
    const { data } = await axios.get<Label[]>(`${BASE_URL}/label/?leagueId=${leagueId}&_embed=label_profits`);
    return data[0];
  };

  const getSignaturesAndArtistsByLabelId = async (labelId: number): Promise<Signature[]> => {
    const { data } = await axios.get<Signature[]>(`${BASE_URL}/signature/?labelId=${labelId}&_embed=artist`);
    return data;
  };

  const getLeagues = async (): Promise<League[]> => {
    const { data } = await axios.get<League[]>(`${BASE_URL}/league`);
    return data ?? [];
  };

  return {
    getLabelAndLabelProfitsByLeagueId,
    getSignaturesAndArtistsByLabelId,
    getLeagues,
  };
};
