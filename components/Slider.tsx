import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Project } from "../types/project";
import TextScrambler from "./TextScrambler";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import ShaderPlane from "./ShaderPlane";
import { CgEditContrast } from "react-icons/cg";

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
    <div className="relative flex gap-16 text-white m-auto max-w-5xl flex-1 h-full">
      <div className="m-auto -ml-2 pt-16">
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl">{currentSlide + 1}</div>
          <div className="my-2 bg-white w-4 h-[2px]"></div>
          <div className="text-2xl">{projects.length}</div>
        </div>
      </div>
      <div className="flex-1 m-auto">
        <motion.div
          exit={{ opacity: 0 }}
          transition={transition}
          className="information"
        >
          <TextScrambler
            speed={10}
            className="text-5xl mb-4"
            phrases={[
              projects[currentSlide].title,
              projects[currentSlide].title,
            ]}
          />
        </motion.div>
        <Link href={`projects/${projects[currentSlide].slug}`}>
          <div className="shader w-full h-[24rem] border-2 border-gray-800 bg-black"></div>
        </Link>
        <motion.div
          exit={{ opacity: 0 }}
          transition={transition}
          className="information"
        >
          <div className="absolute w-full flex items-baseline justify-between overflow-hidden  mt-4">
            <TextScrambler
              className="font-light text-2xl text-gray-100 max-w-4xl"
              speed={2}
              phrases={[
                projects[currentSlide].description,
                projects[currentSlide].description,
              ]}
            />
          </div>
        </motion.div>
      </div>
      <div className="flex relative">
        <div className="-mr-[5px] before:absolute before:w-3 before:h-[2px] before:bg-gray-700 before:-left-[5px] after:bottom-0 after:absolute after:w-3 after:h-[2px] after:bg-gray-800 after:-left-[5px] relative w-[2px] bg-gray-900 h-full"></div>

        <div className="mt-24 -mr-8 -ml-3 flex flex-col gap-4 z-10">
          <button className="flex items-center justify-center w-8 h-8 rounded-full border-2 bg-black">
            <CgEditContrast size="1rem" className="stroke-white" />
          </button>
          <button
            className="flex items-center justify-center w-8 h-8 rounded-full border-2 bg-black"
            onClick={handleNextSlide}
          >
            <FiArrowRight size="1rem" className="stroke-white" />
          </button>
          <button
            className="flex items-center justify-center w-8 h-8 rounded-full border-2 bg-black"
            onClick={handlePreviousSlide}
          >
            <FiArrowLeft size="1rem" className="stroke-white" />
          </button>
        </div>

        <div className="m-auto -mr-[5px] pt-16 z-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`${
                i === currentSlide ? "bg-white" : "bg-gray-800"
              } w-2 h-2 rounded-full my-10 transition-all duration-500`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
