import { Stats, StatsLabelValue } from "../../components/Stats/Stats";
import { TimeRange } from "../../components/TimeRange/TimeRange";
import { useTimeRange } from "../../components/TimeRange/useTimeRange.hook";
import { ArtistAndArtistMetrics } from "../../hook/api/types";

export const ArtistCard: React.FC<{ artist: ArtistAndArtistMetrics }> = ({ artist }) => {
  const { artist_metrics: artistMetrics } = artist;
  const { timeRangeValue, timeValueString, onChangeRangeValue, profits, revenue, salary } = useTimeRange({ artistMetrics });
  return (
    <div className="h-full w-full flex">
      <div className="card w-full shadow-xl image-full">
        <figure>
          <img src={artist.image} alt="Shoes" />
        </figure>
        <div className="card-body justify-between">
          <h2 className="card-title text-white text-3xl self-center">{artist.name}</h2>
          <div className="card-actions justify-center  items-center flex-col md:flex-row">
            <Stats timeValueString={timeValueString} value={profits} label={StatsLabelValue.PROFITS} />
            <Stats timeValueString={timeValueString} value={revenue} label={StatsLabelValue.REVENUES} />
            <Stats timeValueString={timeValueString} value={salary} label={StatsLabelValue.SALARIES} />
            <TimeRange timeRangeValue={timeRangeValue} onChangeRangeValue={onChangeRangeValue} />
          </div>
        </div>
      </div>
    </div>
  );
};
