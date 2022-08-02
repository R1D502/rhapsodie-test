import { useApp } from "../context/useAppContext.hook";
import { League } from "../hook/api/types";

interface HeaderProps {
  leagues: League[];
}

export const Header: React.FC<HeaderProps> = ({ leagues }) => {
  console.log("leagues", leagues);
  const { setCurrentLeague, currentLeague } = useApp();
  setCurrentLeague(leagues[0]);
  if (!currentLeague) return null;
  const currentLabel = currentLeague.label[0];
  return (
    <div className="navbar bg-primary w-full flex justify-between">
      <a className="btn btn-ghost normal-case text-xl text-white">{currentLeague.name}</a>
      <div className="stats shadow">
        <div className="stat-value p-2 text-xl">{`${currentLabel.funds} €`}</div>
      </div>
    </div>
  );
};
