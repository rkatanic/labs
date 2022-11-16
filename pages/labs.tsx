import { getAllProjects } from "../lib/api";
import { Project as ProjectType } from "../types/project";
import Project from "../components/Project";

// type Props = {
//   projects: ProjectType[];
// };

const PROJECTS = [
  {
    name: "Color Scale",
    description: "Tool for generating color shades palette. Based on HSL.",
    creationDate: "2022-10-10",
    link: "https://github.com/rkatanic",
  },
  {
    name: "Markdown Editor",
    description: "Simple markdown notes editor for personal needs.",
    creationDate: "2022-03-15",
    link: "https://github.com/rkatanic",
  },
  {
    name: "Image To Text Converter",
    description: "Extracts texts from images. Supports 50+ languages.",
    creationDate: "2021-11-06",
    link: "https://github.com/rkatanic",
  },
];

const Labs = (): JSX.Element => (
  <div className="m-auto max-w-5xl flex-1">
    <div className="m-auto max-w-2xl">
      <h1 className="text-4xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Collection of small personal tools & experiments.
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-lg">
        In a free time I play around with different tools in order to strengthen
        my development skills. These apps are results of that experimentation.
      </p>
    </div>
    <div className="mt-8 flex flex-col gap-4">
      {PROJECTS.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  </div>
);

export default Labs;

// export const getStaticProps = async () => {
//   const projects = getAllProjects([
//     "title",
//     "description",
//     "slug",
//     "creationDate",
//     "url",
//   ]);

//   return {
//     props: {
//       projects,
//     },
//   };
// };
