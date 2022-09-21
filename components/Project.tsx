import Link from "next/link";
import { Project } from "../types/project";

interface Props {
  project: Project;
  index: number;
}

const Project = ({ project, index }: Props): JSX.Element => {
  return (
    <Link href={`projects/${project.slug}`}>
      <div className="w-64 h-64 p-4 z-10 flex justify-between flex-col gap-4 hover:bg-lime-100 hover:text-black relative">
        <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-gray-50"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-gray-50"></div>
        <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-l border-b border-gray-50"></div>
        <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-r border-b border-gray-50"></div>

        <div className="text-xl text-gray-100">{index}</div>
        <div>
          <div className="text-3xl font-medium mb-2">{project.title}</div>
          <div className="font-light text-xl invert-0 hover:text-gray-500">
            {project.description}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;
