interface Props {
  onClick: () => void;
  icon: JSX.Element;
  tooltip?: string;
}

const IconButton = ({ onClick, icon, tooltip }: Props): JSX.Element => {
  return (
    <button className="icon-button" type="button" onClick={onClick}>
      {icon}
      {tooltip && <div className="icon-button-tooltip">{tooltip}</div>}
    </button>
  );
};

export default IconButton;
