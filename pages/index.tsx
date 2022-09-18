import Slider from "../components/Slider";
import { getAllProjects } from "../lib/api";
import { Project } from "../types/project";

type Props = {
  projects: Project[];
};

const Home = ({ projects }: Props): JSX.Element => {
  return (
    <div className="flex h-[calc(100vh-16rem)]">
      <Slider projects={projects} />
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
