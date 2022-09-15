import GeometryGroup from "../components/GeometryGroup";
import ImageSlider from "../components/ImageSlider";
import { getAllProjects } from "../lib/api";
import { Project } from "../types/project";

type Props = {
  projects: Project[];
};

const Home = ({ projects }: Props): JSX.Element => {
  return (
    <div>
      <ImageSlider />
      {/* <GeometryGroup /> */}
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
