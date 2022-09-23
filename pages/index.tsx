import Project from "../components/Project";
import Projects from "../components/Projects";
import Slider from "../components/Slider";
import { getAllProjects } from "../lib/api";
import { Project as ProjectType } from "../types/project";

type Props = {
  projects: ProjectType[];
};

const Home = ({ projects }: Props): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-between items-center gap-8">
      <div className="flex flex-col justify-center items-center h-full text-center">
        <div className="sm:text-6xl text-4xl font-semibold tracking-widest">
          LABS
        </div>
        <div className="sm:text-3xl text-xl font-light text-gray-100 max-w-md">
          Space for ideas to grow, small personal tools & experiments.
        </div>
      </div>
      <Project index={1} project={projects[0]} />
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
