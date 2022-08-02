import { useApp } from "../../context/useAppContext.hook";
import { LeagueSelector } from "./LeagueSelector";

export const Header: React.FC = () => {
  const { currentLeague, leagues } = useApp();
  if (!currentLeague || !leagues) return null;
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
