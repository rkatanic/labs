import DistortedSphere from "../components/DistortedSphere";
import Project from "../components/Project";
import Projects from "../components/Projects";
import Slider from "../components/Slider";
import { getAllProjects } from "../lib/api";
import { Project as ProjectType } from "../types/project";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  projects: ProjectType[];
};

const Home = ({ projects }: Props): JSX.Element => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prevState) => prevState + 1);
    if (current == projects.length - 1) {
      setCurrent(0);
    }
  };

  const handlePrevious = () => {
    setCurrent((prevState) => prevState - 1);
    if (current === 0) {
      setCurrent(projects.length - 1);
    }
  };

  return (
    <div className="flex  items-center w-full m-auto">
      <div className="flex flex-col items-center text-2xl ml-[6vw]">
        <span>{current + 1}</span>
        <div className="my-6 w-4 h-[2px] bg-gray-600"></div>
        <span>{projects.length}</span>
      </div>
      <Project project={projects[current]} />
      <div className="flex flex-col gap-16 mr-[6vw]">
        <FiChevronUp
          size="2rem"
          onClick={handlePrevious}
          className="cursor-pointer"
        />
        <FiChevronDown
          size="2rem"
          onClick={handleNext}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const projects = getAllProjects([
    "title",
    "description",
    "slug",
    "creationDate",
    "number",
    "activity",
  ]);

  return {
    props: {
      projects,
    },
  };
};
