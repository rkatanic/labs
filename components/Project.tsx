import Link from "next/link";
import { Project } from "../types/project";
import { DATE_FORMAT } from "../util/dateTimeUtils";
import { FiZap, FiArrowUpRight } from "react-icons/fi";

interface Props {
  project: Project;
}

const Project = ({ project }: Props): JSX.Element => (
  <div className="w-full flex flex-col gap-4 p-6 rounded-xl hover:bg-zinc-800/30 cursor-pointer transition-colors duration-200 group">
    <div className="flex justify-between items-start">
      <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-zinc-800 border-zinc-700/50 mb-2">
        <FiZap className="stroke-teal-500" size="1.25rem" />
      </div>
      <div className="gap-1 text-sm items-center text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex">
        Open link
        <FiArrowUpRight className="stroke-teal-500" size="1rem" />
      </div>
    </div>
    <h3 className="font-bold text-lg">{project.title}</h3>
    <p className="text-zinc-400">{project.description}</p>
    <div className="flex gap-3 items-center text-zinc-500 text-sm">
      {DATE_FORMAT.format(new Date(project.creationDate))}
    </div>
  </div>
);

export default Project;
