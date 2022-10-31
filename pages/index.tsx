import Projects from "../components/Projects";
import Slider from "../components/Slider";
import { getAllProjects } from "../lib/api";
import { Project } from "../types/project";
import Background from "../components/Background";
import { useState } from "react";
import ScrollIndicator from "../components/ScrollIndicator";

type Props = {
  projects: Project[];
};

const Home = ({ projects }: Props): JSX.Element => {
  return (
    <div className="h-screen w-screen flex ">
      <div className="m-auto z-20 pointer-events-none max-w-[50%] w-full h-screen flex flex-col justify-between py-[12vh]">
        {/* <div className="ml-4 relative tracking-wide before:absolute before:w-[1px] before:-left-4 before:top-0.5 before:h-4 before:bg-white">
          Index
        </div> */}
        <div className="m-auto">
          <div className="text-hakio z-20 m-auto text-[16.75vh] leading-[1.1] text-center tracking-wide rotate-[-3deg]">
            Radivoje Katanic
          </div>
          <div className="mt-[15vh] absolute left-1/2 text-3xl text-neutral-600">
            <span className="text-white">_ </span>Software Developer{" "}
            <span className="text-white"> </span>
          </div>
        </div>
        <ScrollIndicator />
      </div>
      {/* <div className="flex z-20 max-w-7xl w-full m-auto pointer-events-none">
        <div className="flex-1 ml-4 relative tracking-wide before:absolute before:w-[1px] before:-left-4 before:top-0.5 before:h-4 before:bg-white">
          Projects
        </div>
        <div className="flex-1 flex flex-col gap-12 mt-24">
          {projects.map((project, i) => (
            <div key={i} className="">
              <div className="-ml-9 text-neutral-600 text-sm">0{i + 1} /</div>
              <div className="text-6xl font-medium mb-4 hover:underline cursor-pointer pointer-events-auto">
                {project.title}
              </div>
              <div className="text-2xl text-neutral-500">
                {project.description}
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <Background />
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
