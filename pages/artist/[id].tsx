import { GetStaticPathsResult, GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import { Stats } from "../../components/Stats/Stats";
import { TimeRange } from "../../components/TimeRange/TimeRange";
import { useTimeRange } from "../../components/TimeRange/useTimeRange.hook";
import { ArtistAndArtistMetrics } from "../../hook/api/types";
import { useApi } from "../../hook/api/useApi.hook";

const ArtistCard: React.FC<{ artist: ArtistAndArtistMetrics }> = ({ artist }) => {
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

const Artist: NextPage<{ artist: ArtistAndArtistMetrics }> = ({ artist }) => {
  return (
    <div className="h-full w-full p-5 overflow-scroll">
      <Head>
        <title>Artist</title>
        <meta name="artist" content="Rhapsodie artist page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArtistCard artist={artist} />
    </div>
  );
};

export const getStaticPaths = async ({}): Promise<GetStaticPathsResult> => {
  const { getAllArtistIds } = useApi();
  const ids = await getAllArtistIds();

  const paths = ids.map(id => {
    return { params: { id: id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ id: string }>) => {
  const id = params?.id;
  if (!id) return;
  const { getArtistAndArtistMetricsByArtistId } = useApi();
  const artist = await getArtistAndArtistMetricsByArtistId(parseInt(id));

  return {
    props: { artist },
  };
};
export default Artist;
