import { useEffect, useRef, useState } from "react";
import IconButton from "../components/IconButton";
import ProjectsSlider from "../components/ProjectsSlider";
import ArrowRightIcon from "../assets/icons/arrow-right.svg";
import SendIcon from "../assets/icons/send.svg";
import DateTime from "../components/DateTime";
import { getAllProjects } from "../lib/api";
import { Project } from "../types/Project";

type Props = {
  projects: Project[];
};

const MAX_SCROLL_AMOUNT = 210;

const Home = ({ projects }: Props): JSX.Element => {
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
      if (button.current) {
        button.current.style.marginTop = `${
          winScroll > MAX_SCROLL_AMOUNT ? MAX_SCROLL_AMOUNT : winScroll
        }px`;
      }
      if (winScroll > MAX_SCROLL_AMOUNT) {
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
        <h3 className="home-headline-title">LABS</h3>
        <p className="home-headline-desc">
          This place serves as an archive for personal tools and experiments.
        </p>
      </div>
      <ProjectsSlider projects={projects} sliderRef={sliderRef} />

      <DateTime />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const projects = getAllProjects([
    "title",
    "slug",
    "creationDate",
    "number",
    "activity",
  ]);

  return {
    props: { projects },
  };
};
