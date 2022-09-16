import Slider from "../components/Slider";
import { getAllProjects } from "../lib/api";
import { Project } from "../types/project";

type Props = {
  projects: Project[];
};

const Home = ({ projects }: Props): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Slider />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const projects = getAllProjects([
    "title",
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
