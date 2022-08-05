import { Stats } from "../../components/Stats/Stats";
import { TimeRange } from "../../components/TimeRange/TimeRange";
import { useTimeRange } from "../../components/TimeRange/useTimeRange.hook";
import { ArtistAndArtistMetrics } from "../../hook/api/types";

export const ArtistCard: React.FC<{ artist: ArtistAndArtistMetrics }> = ({ artist }) => {
  const { artist_metrics: artistMetrics } = artist;
  const { timeRangeValue, timeValueString, onChangeRangeValue, profits } = useTimeRange({ artistMetrics });
  return (
    <div className="h-full w-full flex">
      <div className="card w-full shadow-xl image-full">
        <figure>
          <img src={artist.image} alt="Shoes" />
        </figure>
        <div className="card-body justify-between">
          <h2 className="card-title text-white text-3xl self-center">{artist.name}</h2>
          <div className="card-actions justify-around h-3/6">
            <Stats timeValueString={timeValueString} value={profits} />
            <TimeRange timeRangeValue={timeRangeValue} onChangeRangeValue={onChangeRangeValue} />
          </div>
        </div>
      </div>
    </div>
  );
};
