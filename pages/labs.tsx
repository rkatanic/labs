import Project from "../components/Project";

const PROJECTS = [
  {
    name: "Color Scale",
    description: "Tool for generating color shades palette. Based on HSL.",
    creationDate: "2022-10-10",
    link: "https://colors-rkatanic.vercel.app/",
  },
  {
    name: "Markdown Editor",
    description: "Simple markdown notes editor for personal needs.",
    creationDate: "2022-03-15",
    link: "https://github.com/rkatanic",
    badgeLabel: "under construction",
  },
  {
    name: "Image To Text Converter",
    description: "Extracts texts from images. Supports 50+ languages.",
    creationDate: "2021-11-06",
    link: "https://image-to-text-converter.vercel.app/",
  },
];

const Labs = (): JSX.Element => (
  <div className="m-auto max-w-5xl flex-1">
    <div className="m-auto max-w-2xl mb-12">
      <h1 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Small personal tools & experiments
      </h1>
      <p className="text-gray-500 dark:text-gray-300">
        In a free time I play around with different tools in order to strengthen
        my development skills. These apps are results of that experimentation.
      </p>
    </div>
    <div className="flex flex-col gap-6">
      {PROJECTS.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  </div>
);

export default Labs;
