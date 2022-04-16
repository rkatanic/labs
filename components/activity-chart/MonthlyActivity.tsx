interface Props {
  numberOfActivities: number;
  month: number;
}

const MonthlyActivity = ({ numberOfActivities, month }: Props): JSX.Element => {
  return (
    <div
      className={`monthly-activity ${
        numberOfActivities ? "monthly-activity-active" : ""
      }`}
    >
      <div className="monthly-activity-tooltip">
        {new Date(`${new Date().getFullYear()}-${month}-01`).toLocaleDateString(
          "default",
          { month: "long" }
        )}{" "}
        -{" "}
        {numberOfActivities
          ? `${numberOfActivities} update${numberOfActivities > 1 ? "s" : ""}`
          : "No updates"}
      </div>
    </div>
  );
};

export default MonthlyActivity;
