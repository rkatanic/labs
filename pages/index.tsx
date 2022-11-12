import { getAllProjects } from "../lib/api";
import { Project as ProjectType } from "../types/project";
import Project from "../components/Project";

type Props = {
  projects: ProjectType[];
};

const Home = ({ projects }: Props): JSX.Element => {
  return (
    <div className="m-auto mt-24 mb-12 max-w-5xl flex flex-col gap-12">
      <img
        src=""
        alt="my-photo"
        className="m-auto w-64 h h-64 border rounded-full"
      />
      <h1 className="text-5xl dark:text-zinc-200 font-bold m-auto text-center max-w-2xl">
        Software developer, animal lover, outdoor enthusiast.
      </h1>
      <p className="text-xl dark:text-zinc-400 font-thin text-zinc-600">
        Hey, my name is Radivoje Katanic. I am a software developer based in
        Bosnia & Herzegovina. In 2019 I graduated as an IT Engineer and few
        months later started my professional software development journey by
        attending 3 month coding bootcamp at Codecentric Bosnia ( now
        ProductDock ), after after which I got fully time employeed.
        <br />
        <br />
        Currently working at{" "}
        <a
          className="text-zinc-800 font-medium dark:font-normal dark:text-zinc-200 dark:hover:text-teal-400 hover:text-teal-500 transition-colors duration-200"
          href=""
        >
          ProductDock
        </a>{" "}
        as a web developer, mainly focused on frontend.
        <br />
        <br />
        In a free time I experiment with different technologies and craft{" "}
        <a
          className="text-zinc-800 font-medium dark:font-normal dark:text-zinc-200 dark:hover:text-teal-400 hover:text-teal-500 transition-colors duration-200"
          href="/labs"
        >
          small tools
        </a>{" "}
        my personal needs. Occasionally I also{" "}
        <a
          className="text-zinc-800 font-medium dark:font-normal dark:text-zinc-200 dark:hover:text-teal-400 hover:text-teal-500 transition-colors duration-200"
          href=""
        >
          write
        </a>{" "}
        about things I find interesting at a given moment.
        <br />
        <br /> I am also big animal lover. Fun fact - I have 10 cats around my
        house. <span className="text-md">😺</span>
      </p>
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
    "url",
  ]);

  return {
    props: {
      projects,
    },
  };
};
