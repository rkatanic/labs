import { useState } from "react";
import { PROJECTS } from "../projects";
import ProjectCard from "./ProjectCard";
import { Project } from "../types/project";

interface Props {
  sliderRef: any;
}

const ProjectsSlider = ({ sliderRef }: Props): JSX.Element => {
  const [slides, setSlides] = useState(PROJECTS);

  const handleNextSlide = () => {
    sliderRef.current.style.transition = `transform 0s`;
    sliderRef.current.style.transform = `translateX(0)`;
    const _slides = [...slides, ...slides.slice(0, 1)].slice(-slides.length);
    setSlides(_slides);
  };

  return (
    <div onTransitionEnd={handleNextSlide} className="projects-slider">
      <div ref={sliderRef} className="projects-slider-content">
        {slides.map(
          ({ id, number, title, creationDate, description }: Project) => (
            <ProjectCard
              key={id}
              number={number}
              title={title}
              date={creationDate}
              description={description}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProjectsSlider;
