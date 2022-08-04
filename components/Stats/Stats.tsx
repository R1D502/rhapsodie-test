interface StatsProps {
  timeValueString: string;
  value: number;
}

export const Stats: React.FC<StatsProps> = ({ timeValueString, value }) => {
  return (
    <div className="stats shadow bg-primary m-5">
      <div className="stat">
        <div className="stat-title">{`Profits last ${timeValueString}`}</div>
        <div className="stat-value">{`${value} €`}</div>
      </div>
    </div>
  );
};
