import { Artist, ArtistAndArtistMetrics } from "../../hook/api/types";
import { getLastSalaryFromArtisAndMetrics } from "./utils/utils";

export const ArtistSignatureItem: React.FC<{ artist: Artist }> = ({ artist }) => {
  return (
    <div className="w-4/6 flex flex-col items-center justify-between bg-primary rounded-xl p-2">
      <div className="avatar">
        <div className="w-24 rounded-xl">
          <img src={artist.image} />
        </div>
      </div>
      <div className="stat-value text-xl">{artist.name}</div>
      <>
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
      </>
    </div>
  );
};

export const ArtistMarketItem: React.FC<{ artist: ArtistAndArtistMetrics }> = ({ artist }) => {
  return (
    <div className="w-4/6 flex flex-col items-center justify-between bg-primary rounded-xl p-2">
      <div className="avatar">
        <div className="w-24 rounded-xl">
          <img src={artist.image} />
        </div>
      </div>
      <div className="stat-value text-xl">{artist.name}</div>
      <div className="stat-value text-xl">{`${getLastSalaryFromArtisAndMetrics(artist.artist_metrics)} €`}</div>
    </div>
  );
};
