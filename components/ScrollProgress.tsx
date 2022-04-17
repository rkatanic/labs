import { useEffect, useRef, useState } from "react";
import Line from "./Line";

const ScrollProgress = (): JSX.Element => {
  const tooltip = useRef<any>();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const trackScrollProgress = (): void => {
      tooltip.current.style.opacity = "1";

      setTimeout(() => {
        tooltip.current.style.opacity = "0";
      }, 400);
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const maxHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = Math.round((winScroll / maxHeight) * 100);
      setScrollProgress(scrollPercent);

      if (scrollPercent === 0) {
        tooltip.current.style.opacity = "0";
      }
    };

    window.addEventListener("scroll", trackScrollProgress);

    return () => window.removeEventListener("scroll", trackScrollProgress);
  }, []);
  return (
    <div className="scroll-progress">
      <Line orientatiton="vertical" />
      <div className="scroll-progress-content">
        <a className="scroll-progress-content-text" href="#bottom">
          SCROLL
        </a>
        <a className="scroll-progress-content-text" href="#">
          TO TOP
        </a>
      </div>
      <div className="scroll-progress-tooltip" ref={tooltip}>
        {scrollProgress}%
      </div>
    </div>
  );
};

export default ScrollProgress;
