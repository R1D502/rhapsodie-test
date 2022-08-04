import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useApp } from "../../context/useAppContext.hook";
import { Signature } from "../../hook/api/types";

const SignatureItem: React.FC<{ signature: Signature }> = ({ signature }) => {
  const { artist } = signature;
  return (
    <div className="w-4/6 flex flex-col items-center justify-between bg-primary rounded-xl p-2">
      <div className="avatar">
        <div className="w-24 rounded-xl">
          <img src={artist.image} />
        </div>
      </div>
      <div className="stat-value text-xl">{artist.name}</div>
      <div className="rating">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      </div>
    </div>
  );
};

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
              <SignatureItem signature={signature} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Signature;
