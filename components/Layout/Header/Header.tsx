import { useApp } from "../../../context/useAppContext.hook";
import { LeagueSelector } from "./LeagueSelector";

export const Header: React.FC = () => {
  const { currentLeague, currentLabelAndLabelProfits, leagues } = useApp();
  if (!currentLeague || !leagues || !currentLabelAndLabelProfits) return null;
  console.log(currentLabelAndLabelProfits);
  return (
    <>
      <div className="navbar bg-primary w-full flex justify-between">
        <LeagueSelector leagues={leagues} currentLeague={currentLeague} />
        <div className="stats shadow">
          <div className="stat-value p-2 text-xl">{`${currentLabelAndLabelProfits.funds} €`}</div>
        </div>
      </div>
    </>
  );
};
