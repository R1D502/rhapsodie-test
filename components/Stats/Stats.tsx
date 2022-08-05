interface StatsProps {
  timeValueString: string;
  label: StatsLabelValue;
  value: number;
}

export enum StatsLabelValue {
  PROFITS = "Profits",
  SALARIES = "Salaries",
  REVENUES = "Revenues",
}

export const Stats: React.FC<StatsProps> = ({ timeValueString, value, label }) => {
  return (
    <div className="stats shadow bg-primary m-1">
      <div className="stat">
        <div className="stat-title">{`${label} last ${timeValueString}`}</div>
        <div className="stat-value">{`${value} €`}</div>
      </div>
    </div>
  );
};
