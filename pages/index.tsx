import { getAllProjects } from "../lib/api";
import { Project as ProjectType } from "../types/project";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { DATE_FORMAT } from "../util/dateTimeUtils";
import ThemeSwitch from "../components/ThemeSwitch";

type Props = {
  projects: ProjectType[];
};

const Home = ({ projects }: Props): JSX.Element => (
  <div className="m-auto max-w-2xl w-full h-full flex-1 relative">
    <div className="absolute top-0 -left-28 h-full flex flex-col justify-between">
      <div className="h-4 -rotate-90 dark:text-gray-200 flex mt-10 gap-2 items-center dark:text-gray-600 text-sm text-gray-200">
        <div className="w-8 h-[1px] dark:bg-gray-600 bg-gray-200 mt-1"></div>
        scroll
      </div>
      <div className="mb-8 h-4 -rotate-90 dark:text-gray-200 flex mt-10 gap-2 items-center dark:text-gray-600 text-sm text-gray-200">
        to top
        <div className="w-8 h-[1px] dark:bg-gray-600 bg-gray-200 mt-1"></div>
      </div>
    </div>
    <div className="max-w-2xl">
      <h1 className="font-semibold text-4xl dark:text-gray-200 mb-4">
        Software developer, animal lover, outdoors enthusiast.
      </h1>
      <p className="dark:text-gray-300 text-gray-500">
        Hey, my name is Radivoje Katanic. I am a software developer based in
        Bosnia & Herzegovina. In a free time I like experimenting with different
        technologies and building small{" "}
        <Link href="/labs">
          <span className="underline text-zinc-800 font-medium dark:font-normal dark:text-zinc-200 dark:hover:text-blue-300 hover:text-blue-400 cursor-pointer">
            tools
          </span>
        </Link>{" "}
        for my personal needs.
        <br />
        <br /> I am also big animal lover. Fun fact - I have 10 cats around my
        house.<span className="text-md">😺</span>
      </p>
      <div>
        <h1 className="font-semibold text-4xl dark:text-gray-200 mt-8 mb-4">
          Career
        </h1>
        <p className="dark:text-gray-300 mb-8 text-gray-500">
          In 2019 I graduated as an IT Engineer and few months later started my
          professional software development journey by attending 3 month coding
          bootcamp at Codecentric Bosnia (now ProductDock), after which I got
          fully time employeed.
        </p>
        <div className="flex items-baseline justify-between gap-4 my-4">
          <div>
            <h3 className="dark:text-gray-200 mb-1 text-lg font-medium">
              ProductDock
            </h3>
            <p className="dark:text-gray-400 text-gray-500">
              Software Developer
            </p>
          </div>
          <span className="dark:text-gray-500 text-sm text-gray-300">
            08/2020 - Present
          </span>
        </div>
        <hr className="dark:border-gray-800 border-gray-100" />
        <div className="flex items-baseline justify-between gap-4 my-4">
          <div>
            <h3 className="dark:text-gray-200 mb-1 text-lg font-medium">
              codecentric Bosnia
            </h3>
            <p className="dark:text-gray-400 text-gray-500">Intern</p>
          </div>
          <span className="dark:text-gray-500 text-sm text-gray-300">
            02/2020 - 05/2020
          </span>
        </div>
        <hr className="dark:border-gray-800 border-gray-100" />
      </div>
      <div>
        <h1 className="font-semibold text-4xl dark:text-gray-200 mt-8 mb-4">
          This Site
        </h1>
        <p className="dark:text-gray-300 text-gray-500">
          This site is established in December 2022 after quite long
          experimentation and planning. It's built with Next.js, Tailwind CSS
          and deployed on Vercel.
          <br />
          <br /> Last time modified on January 2023.
        </p>
      </div>
    </div>
    <div className="absolute top-0 -right-16 w-0 h-full">
      <div className="sticky top-10 flex flex-col gap-2.5">
        {/* <ThemeSwitch /> */}
        <ThemeSwitch />
      </div>
    </div>
  </div>
);

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
