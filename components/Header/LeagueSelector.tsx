import { useApp } from "../../context/useAppContext.hook";
import { League } from "../../hook/api/types";

interface LeagueSelectorProps {
  leagues: League[];
  currentLeague: League;
}

export const LeagueSelector: React.FC<LeagueSelectorProps> = ({ currentLeague, leagues }) => {
  const { setCurrentLeague } = useApp();
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
              <li onClick={() => setCurrentLeague(league)}>
                <a>{league.name}</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
