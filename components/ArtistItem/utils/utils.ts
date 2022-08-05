import { ArtistMetrics } from "../../../hook/api/types";

export const getLastSalaryFromArtisAndMetrics = (artistMetrics: ArtistMetrics[]): number => {
  return artistMetrics.reduce((acc, current) => (acc.date > current.date ? acc : current)).salary;
};
