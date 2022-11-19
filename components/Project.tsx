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
    className="border dark:border-gray-800 border-gray-100 w-full flex flex-col gap-4 p-6 rounded-xl hover:bg-gray-50/50 dark:hover:bg-gray-800/30 cursor-pointer group"
  >
    <div className="flex justify-between">
      <h3 className="flex gap-3 items-baseline font-medium dark:text-gray-200 text-xl font-medium">
        {project.name}
        {project.badgeLabel && (
          <div className="whitespace-nowrap text-xs rounded-full bg-blue-50/50 dark:bg-blue-800/20 border border-blue-300 text-blue-600 dark:text-blue-300 max-w-min px-1.5">
            {project.badgeLabel}
          </div>
        )}
      </h3>
      <div className="flex gap-3 items-center text-gray-300 dark:text-gray-600 text-sm">
        {DATE_FORMAT.format(new Date(project.creationDate))}
      </div>
    </div>
    <p className="text-gray-500 dark:text-gray-300 mb-2">
      {project.description}
    </p>

    <hr className="border-gray-100 dark:border-gray-800" />
    <div className="gap-1 text-sm items-center text-gray-300 dark:text-gray-600 group-hover:text-blue-400 dark:group-hover:text-blue-300 flex">
      Go to link
      <FiArrowUpRight
        className="stroke-gray-300 dark:stroke-gray-600 group-hover:stroke-blue-400 dark:group-hover:stroke-blue-300"
        size="1rem"
      />
    </div>
  </a>
);

export default Project;
