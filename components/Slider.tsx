import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Project } from "../types/project";
import TextScrambler from "./TextScrambler";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const transition = { duration: 0.25, ease: [0.43, 0.13, 0.23, 0.96] };

interface Props {
  projects: Project[];
}

const Slider = ({ projects }: Props): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((state) => state + 1);
    if (currentSlide === projects.length - 1) {
      setCurrentSlide(0);
    }
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((state) => state - 1);
    if (currentSlide === 0) {
      setCurrentSlide(projects.length - 1);
    }
  };

  return (
    <div className="relative text-white m-auto max-w-5xl flex-1">
      <motion.div
        exit={{ opacity: 0 }}
        transition={transition}
        className="information"
      >
        <div className="flex gap-4 items-baseline justify-between mb-4">
          <TextScrambler
            speed={10}
            className="font-medium text-5xl tracking-wide"
            phrases={[
              projects[currentSlide].title,
              projects[currentSlide].title,
            ]}
          />
          <div className="text-xl">
            {currentSlide + 1} / {projects.length}
          </div>
        </div>
      </motion.div>
      <Link href="projects/markdown-editor">
        <div className="shader w-full h-[24rem] border-2 border-gray-800"></div>
      </Link>
      <motion.div
        exit={{ opacity: 0 }}
        transition={transition}
        className="information"
      >
        <div className="absolute w-full flex items-baseline justify-between overflow-hidden  mt-4">
          <TextScrambler
            className="text-2xl text-gray-200 max-w-xl"
            speed={2}
            phrases={[
              projects[currentSlide].description,
              projects[currentSlide].description,
            ]}
          />
          <div className="flex gap-4">
            <button onClick={handlePreviousSlide}>
              <FiArrowLeft
                size="1.5rem"
                className="stroke-gray-500 hover:stroke-white"
              />
            </button>
            <button className="" onClick={handleNextSlide}>
              <FiArrowRight
                size="1.5rem"
                className="stroke-gray-500 hover:stroke-white"
              />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Slider;
