import { Project } from "../types/project";
import { DATE_FORMAT } from "../util/dateTimeUtils";
import { FiZap, FiArrowUpRight } from "react-icons/fi";
import { TbTerminal2 } from "react-icons/tb";
interface Props {
  project: Project;
}

const Project = ({ project }: Props): JSX.Element => (
  <a
    href={project.link}
    target="blank"
    className="border dark:border-gray-800 w-full flex flex-col gap-4 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/30 cursor-pointer transition-colors duration-200 group"
  >
    <div className="flex justify-between items-start">
      <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/50 mb-2 shadow-md shadow-gray-100 dark:shadow-gray-900/20">
        <TbTerminal2 className="stroke-teal-500" size="1.25rem" />
      </div>
      <div className="gap-1 text-sm items-center text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex">
        Visit
        <FiArrowUpRight className="stroke-teal-500" size="1rem" />
      </div>
    </div>
    <h3 className="font-medium dark:text-gray-200">{project.name}</h3>
    <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
    <div className="flex gap-3 items-center text-gray-400 dark:text-gray-500 text-sm">
      {DATE_FORMAT.format(new Date(project.creationDate))}
    </div>
  </a>
);

export default Project;
