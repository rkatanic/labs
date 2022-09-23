import Link from "next/link";
import { Project } from "../types/project";

interface Props {
  project: Project;
  index: number;
}

const Project = ({ project, index }: Props): JSX.Element => {
  return (
    <Link href={`projects/${project.slug}`}>
      <div className="border-2 border-gray-900 bg-black w-full max-w-3xl h-80 p-4 z-10 flex justify-between flex-col gap-4 relative">
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
