import { useApp } from "../../context/useAppContext.hook";
import { League } from "../../hook/api/types";
import { LeagueSelector } from "./LeagueSelector";

interface HeaderProps {
  leagues: League[];
}

export const Header: React.FC<HeaderProps> = ({ leagues }) => {
  const { currentLeague } = useApp();
  if (!currentLeague) return null;
  const currentLabel = currentLeague.label[0];
  return (
    <>
      <div className="navbar bg-primary w-full flex justify-between">
        <LeagueSelector leagues={leagues} currentLeague={currentLeague} />
        <div className="stats shadow">
          <div className="stat-value p-2 text-xl">{`${currentLabel.funds} €`}</div>
        </div>
      </div>
    </>
  );
};
