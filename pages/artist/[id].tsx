import { GetStaticPathsResult, GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import { ArtistCard } from "../../components/ArtistCard/ArtistCard";
import { ArtistAndArtistMetrics } from "../../hook/api/types";
import { useApi } from "../../hook/api/useApi.hook";

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
