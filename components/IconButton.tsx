import { useEffect, useRef } from "react";

interface Props {
  onClick: () => void;
  icon: JSX.Element;
  tooltip?: string;
}

const IconButton = ({ onClick, icon, tooltip }: Props): JSX.Element => {
  return (
    <button className="icon-button" type="button" onClick={onClick}>
      <div className="icon-button-icon">{icon}</div>
      <div className="orbit-small"></div>
      <div className="orbit-medium"></div>
      {tooltip && <div className="icon-button-tooltip">{tooltip}</div>}
    </button>
  );
};

export default IconButton;
