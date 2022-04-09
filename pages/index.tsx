import type { InferGetStaticPropsType } from "next";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IconButton from "../components/IconButton";
import ProjectsSlider from "../components/ProjectsSlider";
import { PROJECTS } from "../projects";
import ArrowRightIcon from "../assets/icons/arrow-right.svg";
import SendIcon from "../assets/icons/send.svg";
import DateTime from "../components/DateTime";

const Home = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
    <>
      <div className="grid"></div>
      <div className="main">
        <Header />
        <div className="sphere">
          <div className="sphere-one inner"></div>
          <div className="sphere-two inner"></div>
          <div className="sphere-three inner"></div>
          <div className="sphere-four inner"></div>
          <div className="sphere-five inner"></div>
          <div className="sphere-six inner"></div>
        </div>
        <div className="line line-left">
          <div className="cross cross-top"></div>
          <div className="cross cross-bottom"></div>
          <p className="scroll-text scroll-text-top">SCROLL</p>
          <p className="scroll-text scroll-text-bottom">TO TOP</p>
        </div>
        <div className="line line-right">
          <div className="cross cross-top"></div>
          <div className="cross cross-bottom"></div>
          <div className="button-container" ref={button}>
            <IconButton
              onClick={scrolled ? handleNextSlide : handleMailTo}
              icon={scrolled ? <ArrowRightIcon /> : <SendIcon />}
              tooltip={scrolled ? "Next slide" : "Send e-mail"}
            />
          </div>
        </div>

        <div className="content">
          <div className="home-headline">
            <h3 className="home-headline-title">Labs</h3>
            <p className="home-headline-desc">
              This place serves as an archive <br /> to small personal projects
              and experiments.
            </p>
          </div>
          <ProjectsSlider sliderRef={sliderRef} />
          <DateTime />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  return {
    props: {
      projects: PROJECTS,
    },
  };
};
