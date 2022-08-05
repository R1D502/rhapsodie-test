import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ArtistSignatureItem } from "../../components/ArtistItem/ArtistItem";
import { useApp } from "../../context/useAppContext.hook";

const Signature: NextPage = () => {
  const { currentSignatureAndArtist } = useApp();
  const router = useRouter();
  if (!currentSignatureAndArtist.length) return null;
  return (
    <div className="h-full w-full p-5 overflow-scroll">
      <Head>
        <title>Signature</title>
        <meta name="signature" content="Rhapsodie signature page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-between h-full">
        {currentSignatureAndArtist.map(signature => {
          return (
            <button
              key={signature.id}
              className="w-full btn h-2/6 my-3"
              onClick={() => router.push("/artist/[id]", `/artist/${signature.artistId}`)}
            >
              <ArtistSignatureItem artist={signature.artist} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Signature;
