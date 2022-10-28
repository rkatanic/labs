import Projects from "../components/Projects";
import Slider from "../components/Slider";
import { getAllProjects } from "../lib/api";
import { Project } from "../types/project";
import Background from "../components/Background";

type Props = {
  projects: Project[];
};

const Home = ({ projects }: Props): JSX.Element => {
  return (
    <div className="h-screen w-screen flex">
      {/* <div className="z-[20] m-auto text-[5vh] w-full max-w-[50%]">
        <div className="flex-1 mb-8">
          <div>That's it for now. More stuff is coming soon.</div>
          <div className="text-neutral-600">rkatanic@outlook.com</div>
        </div>
        <div className="flex">
          <div className="flex-1"></div>
          <form className="flex-1 text-[2vh] flex flex-col gap-8">
            <input
              type="text"
              required
              placeholder="Name"
              className="border-b border-b-2 border-neutral-700 py-3 placeholder-neutral-600 bg-transparent focus:outline-0 focus:border-neutral-300 w-full"
            />
            <input
              type="text"
              required
              placeholder="E-mail"
              className="border-b border-b-2 border-neutral-700 py-3 placeholder-neutral-600 bg-transparent focus:outline-0 focus:border-neutral-300 w-full"
            />
            <input
              type="text"
              required
              placeholder="Subject"
              className="border-b border-b-2 border-neutral-700 py-3 placeholder-neutral-600 bg-transparent focus:outline-0 focus:border-neutral-300 w-full"
            />
            <textarea
              required
              rows={5}
              placeholder="Message"
              className="bg-transparent border-b-2 border-neutral-700 placeholder-neutral-600 focus:outline-0 focus:border-neutral-300 w-full resize-none"
            />
            <button
              type="submit"
              className="border-b-2 font-medium border-white p-2 max-w-fit"
            >
              Send
            </button>
          </form>
        </div>
      </div> */}
      <Background />
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
