import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Project } from "../types/project";
import DistortedSphere from "./DistortedSphere";
import { motion } from "framer-motion";

interface Props {
  project: Project;
}

const Project = ({ project }: Props): JSX.Element => {
  return (
    <Link href={`projects/${project.slug}`}>
      <div className="m-auto relative flex flex-col justify-center items-center">
        <DistortedSphere />
        <div className="max-w-[36rem] ml-[36rem]">
          <AnimatePresence exitBeforeEnter>
            <motion.div key={project.title}>
              {project.title.split(" ").map((word) => (
                <>
                  <br />
                  {word.split("").map((char) => (
                    <span className="inline-block overflow-hidden title text-8xl font-semibold z-10 mb-4 h-24">
                      <motion.span
                        className="inline-block overflow-hidden"
                        animate={{ x: 0 }}
                        initial={{ x: "-100%" }}
                        exit={{ x: "-100%" }}
                        transition={{
                          duration: 0.5,
                        }}
                      >
                        {char}
                      </motion.span>
                    </span>
                  ))}
                </>
              ))}
            </motion.div>
            <motion.div key={project.description} className="h-9 max-w-sm">
              {project.description.split(" ").map((word) => (
                <div className="inline-block overflow-hidden">
                  &nbsp;&nbsp;
                  <motion.span
                    className="inline-block font-light text-3xl text-gray-200"
                    initial={{ y: "200%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "200%" }}
                    transition={{ duration: 0.5, ease: [0.8, 0.5, 0.2, 0.2] }}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Link>
  );
};

export default Project;
