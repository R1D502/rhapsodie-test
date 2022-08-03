import axios from "axios";
import { Artist, Label, League, Signature } from "./types";

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
    const { data: signatures } = await axios.get<Omit<Signature, "artist">[]>(`${BASE_URL}/signature/?labelId=${labelId}`);
    const signatureAndArtist = Promise.all(
      signatures.map(async signature => {
        return {
          ...signature,
          artist: (await axios.get<Artist[]>(`${BASE_URL}/artist/?id=${signature.artistId}`)).data[0],
        };
      })
    );
    console.log("DAT", signatureAndArtist);
    return signatureAndArtist;
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
