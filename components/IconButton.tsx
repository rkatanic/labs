import { useEffect, useRef } from "react";

interface Props {
  onClick: () => void;
  icon: JSX.Element;
  tooltip?: string;
}

const IconButton = ({ onClick, icon, tooltip }: Props): JSX.Element => {
  const button = useRef<any>();
  const iconRef = useRef<any>();

  useEffect(() => {
    button.current.addEventListener("mousemove", handleButtonMove);

    return () =>
      button.current.removeEventListener("mousemove", handleButtonMove);
  }, []);

  const handleButtonMove = (e: any): void => {
    const position = button.current.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y =
      e.pageY -
      document.documentElement.scrollTop -
      position.top -
      position.height / 2;

    console.log({ x, y });

    button.current.style.transform = `translate(${x * 0.25}px,${y * 0.3}px)`;

    iconRef.current.style.transform = `translate(${x * 0.15}px,${y * 0.17}px)`;
  };

  const handleMouseLeave = (): void => {
    button.current.style.transform = `translate(0,0)`;
    iconRef.current.style.transform = `translate(0,0)`;
  };

  return (
    <button
      onMouseEnter={(e) => handleButtonMove(e)}
      onMouseLeave={handleMouseLeave}
      ref={button}
      className="icon-button"
      type="button"
      onClick={onClick}
    >
      <div className="icon-button-icon" ref={iconRef}>
        {icon}
      </div>
      {tooltip && <div className="icon-button-tooltip">{tooltip}</div>}
    </button>
  );
};

export default IconButton;
