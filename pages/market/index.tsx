import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ArtistMarketItem } from "../../components/ArtistItem/ArtistItem";
import { ArtistAndArtistMetrics } from "../../hook/api/types";
import { useApi } from "../../hook/api/useApi.hook";

interface MarketProps {
  artistAndArtistMetrics: ArtistAndArtistMetrics[];
}

const Market: NextPage<MarketProps> = ({ artistAndArtistMetrics }) => {
  const { push } = useRouter();
  return (
    <div className="h-full w-full p-5 overflow-scroll">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-between h-full">
        {artistAndArtistMetrics.map(artistAndArtistMetric => {
          return (
            <button
              key={artistAndArtistMetric.id}
              className="w-full btn h-2/6 my-3"
              onClick={() => push("/artist/[id]", `/artist/${artistAndArtistMetric.id}`)}
            >
              <ArtistMarketItem artist={artistAndArtistMetric} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const { getAllArtistAndArtistMetrics } = useApi();
  const artistAndArtistMetrics = await getAllArtistAndArtistMetrics();

  return {
    props: { artistAndArtistMetrics },
  };
};

export default Market;
