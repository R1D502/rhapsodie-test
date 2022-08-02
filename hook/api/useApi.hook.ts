import axios from "axios";
import { Label, League } from "./types";

const BASE_URL = "http://localhost:3000";

interface UseApiOutput {
  getLabelAndLabelProfitsByLeagueId: (leagueId: number) => Promise<Label>;
  getLeagues: () => Promise<League[]>;
}

export const useApi = (): UseApiOutput => {
  const getLabelAndLabelProfitsByLeagueId = async (leagueId: number): Promise<Label> => {
    const { data } = await axios.get<Label>(`${BASE_URL}/label/${leagueId}?_embed=label_profits`);
    return data;
  };

  const getLeagues = async (): Promise<League[]> => {
    const { data } = await axios.get<League[]>(`${BASE_URL}/league?_embed=label`);
    return data ?? [];
  };

  return {
    getLabelAndLabelProfitsByLeagueId,
    getLeagues,
  };
};
