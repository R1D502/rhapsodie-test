interface LabelProfitsProps {
  timeValueString: string;
  profits: number;
}

export const LabelProfits: React.FC<LabelProfitsProps> = ({ timeValueString, profits }) => {
  return (
    <div className="stats shadow bg-primary m-5">
      <div className="stat">
        <div className="stat-title">{`Profits last ${timeValueString}`}</div>
        <div className="stat-value">{`+ ${profits} €`}</div>
      </div>
    </div>
  );
};
