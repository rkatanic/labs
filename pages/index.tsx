import Projects from "../components/Projects";
import Slider from "../components/Slider";
import { getAllProjects } from "../lib/api";
import { Project } from "../types/project";

type Props = {
  projects: Project[];
};

const Home = ({ projects }: Props): JSX.Element => {
  return (
    <div className="max-w-5xl m-auto relative h-full">
      <div className="absolute flex flex-col gap-64 v-lines">
        <div className="w-screen h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-gray-transparent -ml-[calc(2rem_+_2rem)"></div>
        <div className="w-screen h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        <div className="w-screen h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        <div className="w-screen h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        <div className="w-screen h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        <div className="w-screen h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>
      <div className="absolute flex gap-64 h-full">
        <div className="h-full w-[1px] bg-gradient-to-t from-transparent via-gray-700 to-transparent -ml-[calc(2rem_+_2rem)"></div>
        <div className="h-full w-[1px] bg-gradient-to-t from-transparent via-gray-700 to-transparent"></div>
        <div className="h-full w-[1px] bg-gradient-to-t from-transparent via-gray-700 to-transparent"></div>
        <div className="h-full w-[1px] bg-gradient-to-t from-transparent via-gray-700 to-transparent"></div>
        <div className="h-full w-[1px] bg-gradient-to-t from-transparent via-gray-700 to-transparent"></div>
      </div>
      <div className="flex flex-col justify-center items-center h-64 text-center">
        <div className="mt-8 float-left absolute w-64 left-0 text-center rotate-[-90deg] uppercase">
          {"<"}- <span className="ml-2">scroll</span>
        </div>
        <div className="text-6xl font-semibold tracking-widest mb-2">LABS</div>
        <div className="text-3xl font-light text-gray-100 max-w-md">
          Space for ideas to grow, small personal tools & experiments.
        </div>
      </div>
      <Projects projects={projects} />
      <div>
        <div className="h-64 flex items-center justify-center">
          <div className="rounded-full border border-gray-700 py-2 pl-6 pr-3 flex justify-center items-end gap-4 uppercase">
            <div>page load time: 340 MS</div>
            <div className="w-8 h-8 border-2 rounded-full"></div>
          </div>
        </div>
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
