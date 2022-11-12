import { Project } from "../types/project";
import { DATE_FORMAT } from "../util/dateTimeUtils";
import { FiZap, FiArrowUpRight } from "react-icons/fi";

interface Props {
  project: Project;
}

const Project = ({ project }: Props): JSX.Element => (
  <a
    href={project.url}
    target="blank"
    className="w-full flex flex-col gap-4 p-6 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/30 cursor-pointer transition-colors duration-200 group"
  >
    <div className="flex justify-between items-start">
      <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700/50 mb-2 shadow-md shadow-zinc-100 dark:shadow-zinc-900/20">
        <FiZap className="stroke-teal-500" size="1.25rem" />
      </div>
      <div className="gap-1 text-sm items-center text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex">
        Open link
        <FiArrowUpRight className="stroke-teal-500" size="1rem" />
      </div>
    </div>
    <h3 className="font-bold text-lg tracking-wide dark:text-zinc-100">
      {project.title}
    </h3>
    <p className="text-zinc-500 dark:text-zinc-400">{project.description}</p>
    <div className="flex gap-3 items-center text-zinc-400 dark:text-zinc-500 text-sm font-thin">
      {DATE_FORMAT.format(new Date(project.creationDate))}
    </div>
  </a>
);

export default Project;
