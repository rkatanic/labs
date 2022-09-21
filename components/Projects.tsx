import { Project as ProjectType } from "../types/project";
import Project from "./Project";

interface Props {
  projects: ProjectType[];
}

const Projects = ({ projects }: Props): JSX.Element => {
  return (
    <div className="relative flex">
      <div>
        <div className="flex gap-64">
          <Project index={1} project={projects[0]} />
          <Project index={2} project={projects[1]} />
        </div>
        <div className="flex gap-64 ml-64">
          <Project index={3} project={projects[2]} />
          <Project index={4} project={projects[3]} />
        </div>
        <div className="flex gap-64">
          <Project index={1} project={projects[0]} />
          <Project index={2} project={projects[1]} />
        </div>
      </div>
      {/* <div className="absolute right-32 z-10 before:absolute before:w-3 before:h-[2px] before:bg-gray-700 before:-left-[5px] after:bottom-0 after:absolute after:w-3 after:h-[2px] after:bg-gray-800 after:-left-[5px] w-[2px] bg-gray-800 h-[48rem]"></div> */}
    </div>
  );
};

export default Projects;
