import { useState } from "react";
import { Project } from "../types/project";
import ProjectCard from "./ProjectCard";

interface Props {
  projects: Project[];
  sliderRef: any;
}

const ProjectsSlider = ({ sliderRef, projects }: Props): JSX.Element => {
  const [slides, setSlides] = useState(projects);

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
          ({ title, slug, excerpt, creationDate, number }: Project) => (
            <ProjectCard
              key={slug}
              slug={slug}
              number={number}
              title={title}
              creationDate={creationDate}
              excerpt={excerpt}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProjectsSlider;
