import { TimeRangeValue } from "./useTimeRange.hook";

interface TimeRangeProps {
  timeRangeValue: TimeRangeValue;
  onChangeRangeValue: (value: TimeRangeValue) => void;
}

export const TimeRange: React.FC<TimeRangeProps> = ({ timeRangeValue, onChangeRangeValue }) => {
  return (
    <>
      <input
        type="range"
        min="0"
        max="100"
        className="range range-primary mb-2 "
        step="25"
        value={timeRangeValue}
        onChange={e => {
          const value = parseInt(e.target.value) as TimeRangeValue;
          onChangeRangeValue(value);
        }}
      />
      <div className="w-full flex justify-between text-xs px-5">
        <span>Year</span>
        <span>3 Months</span>
        <span> Month </span>
        <span> Week </span>
        <span> Day </span>
      </div>
    </>
  );
};
