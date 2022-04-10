import { useEffect, useRef, useState } from "react";
import IconButton from "../components/IconButton";
import ProjectsSlider from "../components/ProjectsSlider";
import ArrowRightIcon from "../assets/icons/arrow-right.svg";
import SendIcon from "../assets/icons/send.svg";
import DateTime from "../components/DateTime";

const Home = () => {
  const button = useRef<any>();
  const sliderRef = useRef<any>();

  const [scrolled, setScrolled] = useState(false);

  const handleNextSlide = (): void => {
    sliderRef.current.style.transition = `transform 0.35s`;
    sliderRef.current.style.transform = `translateX(-21rem)`;
  };

  const handleMailTo = (): void => {
    window.location.href = "mailto:k.rade313@gmail.com";
  };

  useEffect(() => {
    const changeButtonPosition = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      button.current.style.marginTop = `${winScroll > 230 ? 230 : winScroll}px`;
      if (winScroll > 165) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", changeButtonPosition);
    return () => window.removeEventListener("scroll", changeButtonPosition);
  }, []);

  return (
    <div className="home">
      <div className="button-container" ref={button}>
        <IconButton
          onClick={scrolled ? handleNextSlide : handleMailTo}
          icon={scrolled ? <ArrowRightIcon /> : <SendIcon />}
          tooltip={scrolled ? "Next slide" : "Send e-mail"}
        />
      </div>
      <div className="home-headline">
        <h3 className="home-headline-title">Labs</h3>
        <p className="home-headline-desc">
          This place serves as an archive <br /> to small personal projects and
          experiments.
        </p>
      </div>
      <ProjectsSlider sliderRef={sliderRef} />

      <DateTime />
    </div>
  );
};

export default Home;
