interface Props {
  orientatiton?: "horizontal" | "vertical";
}

const Line = ({ orientatiton = "horizontal" }: Props): JSX.Element => (
  <div className={`line-${orientatiton}`}>
    <div className={`line-${orientatiton}-end`}></div>
    <div className={`line-${orientatiton}-end`}></div>
  </div>
);

export default Line;
