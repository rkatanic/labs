import MonthlyActivity from "./MonthlyActivity";

interface Props {
  yearlyActivity: number[];
}

const YearlyActivity = ({ yearlyActivity }: Props): JSX.Element => {
  return (
    <div className="yearly-activity">
      {yearlyActivity.map((monthlyActivityCount, i) => (
        <MonthlyActivity
          key={i}
          numberOfActivities={monthlyActivityCount}
          month={i + 1}
        />
      ))}
    </div>
  );
};

export default YearlyActivity;
