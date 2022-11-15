import { getAllProjects } from "../lib/api";
import { Project as ProjectType } from "../types/project";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

type Props = {
  projects: ProjectType[];
};

const Home = ({ projects }: Props): JSX.Element => {
  return (
    <div className="m-auto my-32 max-w-5xl flex items-start gap-20 flex-wrap">
      {/* <img
        src=""
        alt="my-photo"
        className="m-auto w-64 h h-64 border rounded-full"
      /> */}
      <div className="flex-1">
        <h1 className="text-5xl dark:text-zinc-200 font-bold max-w-2xl mb-8">
          Software developer, animal lover, outdoor enthusiast.
        </h1>
        <p className="dark:text-zinc-400 font text-zinc-500 leading-7">
          Hey, my name is Radivoje Katanic. I am a software developer based in
          Bosnia & Herzegovina. In 2019 I graduated as an IT Engineer and few
          months later started my professional software development journey by
          attending 3 month coding bootcamp at Codecentric Bosnia ( now
          ProductDock ), after after which I got fully time employeed.
          <br />
          <br />
          Currently working at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline text-zinc-800 font-medium dark:font-normal dark:text-zinc-200 dark:hover:text-teal-400 hover:text-teal-500"
            href="https://productdock.com/"
          >
            ProductDock
          </a>{" "}
          as a web developer, mainly focused on frontend.
          <br />
          <br />
          In a free time I experiment with different technologies and craft
          small{" "}
          <Link href="/labs">
            <span className="underline text-zinc-800 font-medium dark:font-normal dark:text-zinc-200 dark:hover:text-teal-400 hover:text-teal-500 cursor-pointer">
              tools
            </span>
          </Link>{" "}
          for my personal needs.
          <br />
          <br /> I am also big animal lover. Fun fact - I have 10 cats around my
          house. <span className="text-md">😺</span>
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-8">
        <div className="w-full h-96 bg-[black] rounded-3xl m-auto rotate-3" />
        <div className="flex flex-col gap-6">
          <a
            className="flex gap-4 group cursor-pointer whitespace-nowrap max-w-min"
            href="https://github.com/rkatanic"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              className="fill-zinc-500 group-hover:fill-teal-500 dark:group-hover:fill-teal-400"
              size="1.25rem"
            />
            <div className="dark:text-zinc-200 group-hover:text-teal-500 dark:group-hover:text-teal-400">
              Follow on GitHub
            </div>
          </a>
          <a
            className="flex gap-4 group cursor-pointer whitespace-nowrap max-w-min"
            href="https://www.linkedin.com/in/radivoje-katanic"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              className="fill-zinc-500 group-hover:fill-teal-500 dark:group-hover:fill-teal-400"
              size="1.25rem"
            />
            <div className="dark:text-zinc-200 group-hover:text-teal-500 dark:group-hover:text-teal-400">
              Follow on LinkedIn
            </div>
          </a>
          <hr className="dark:border-zinc-800" />
          <a
            href="mailto:rkatanic@outlook.com"
            className="flex gap-4 items-center group cursor-pointer max-w-min"
          >
            <MdEmail
              className="fill-zinc-500 group-hover:fill-teal-500 dark:group-hover:fill-teal-400"
              size="1.25rem"
            />
            <div className="dark:text-zinc-200 group-hover:text-teal-500 dark:group-hover:text-teal-400">
              rkatanic@outlook.com
            </div>
          </a>
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
    "url",
  ]);

  return {
    props: {
      projects,
    },
  };
};
