import { useRouter } from "next/router";
import { useApp } from "../../../context/useAppContext.hook";
import { League } from "../../../hook/api/types";

interface LeagueSelectorProps {
  leagues: League[];
  currentLeague: League;
}

const GoBackButton: React.FC<{ back: () => void }> = ({ back }) => {
  return (
    <button className="btn btn-ghost" onClick={back}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
      </svg>
    </button>
  );
};

export const LeagueSelector: React.FC<LeagueSelectorProps> = ({ currentLeague, leagues }) => {
  const { setCurrentLeague } = useApp();
  const { pathname, back } = useRouter();
  if (pathname.includes("artist")) return <GoBackButton back={back} />;
  return (
    <div className="dropdown">
      <a tabIndex={0} className="btn btn-ghost normal-case text-xl text-white">
        {currentLeague.name}
      </a>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        {leagues
          .filter(league => league.id !== currentLeague.id)
          .map(league => {
            return (
              <li key={league.id} onClick={() => setCurrentLeague(league)}>
                <a>{league.name}</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
