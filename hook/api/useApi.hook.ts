import axios from "axios";
import { Artist, Label, League, Signature } from "./types";

const BASE_URL = "http://localhost:3000";

interface UseApiOutput {
  getLabelAndLabelProfitsByLeagueId: (leagueId: number) => Promise<Label>;
  getSignaturesAndArtistsByLabelId: (labelId: number) => Promise<Signature[]>;
  getArtistAndArtistMetricsByArtistId: (artistId: number) => Promise<Artist>;
  getAllArtistIds: () => Promise<number[]>;
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
    return signatureAndArtist;
  };

  const getArtistAndArtistMetricsByArtistId = async (artistId: number): Promise<Artist> => {
    const { data } = await axios.get<Artist>(`${BASE_URL}/artist/${artistId}?_embed=artist_metrics`);
    console.log("ARTIST", data);
    return data;
  };

  const getAllArtistIds = async (): Promise<number[]> => {
    const { data } = await axios.get<Artist[]>(`${BASE_URL}/artist`);
    const artistIds = data.map(artist => artist.id);
    console.log("ARTIST ID ", artistIds);
    return artistIds;
  };

  const getLeagues = async (): Promise<League[]> => {
    const { data } = await axios.get<League[]>(`${BASE_URL}/league`);
    return data ?? [];
  };

  return {
    getLabelAndLabelProfitsByLeagueId,
    getSignaturesAndArtistsByLabelId,
    getArtistAndArtistMetricsByArtistId,
    getAllArtistIds,
    getLeagues,
  };
};
