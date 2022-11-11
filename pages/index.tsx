import { getAllProjects } from "../lib/api";
import { Project as ProjectType } from "../types/project";
import Project from "../components/Project";

type Props = {
  projects: ProjectType[];
};

const Home = ({ projects }: Props): JSX.Element => {
  return (
    <div className="m-auto mt-24 mb-12 max-w-5xl">
      <div className="m-auto text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">
          Collection of small personal tools & experiments.
        </h1>
        <p className="text-zinc-400 text-xl font-light">
          In a free time I play around with different tools in order to
          strengthen my development skills. These apps are results of that
          experimentation.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 mt-16">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
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
