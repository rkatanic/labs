import { getProjectBySlug, getAllProjects } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";
import { DATE_FORMAT } from "../../util/dateTimeUtils";
import { Project } from "../../types/project";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  FiGitPullRequest,
  FiArrowLeft,
  FiArrowRight,
  FiImage,
  FiFileText,
  FiCheck,
} from "react-icons/fi";

type Props = {
  project: Project;
};

const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { ...transition },
  },
};

const Project = ({ project }: Props) => {
  const router = useRouter();

  const handleGoBack = (): void => {
    router.push("/");
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "img":
        return <FiImage className="stroke-[1.25px]" />;
      case "index":
        return <FiGitPullRequest className="stroke-[1.25px]" />;
      case "file":
        return <FiFileText className="stroke-[1.25px]" />;
      default:
        return <FiFileText className="stroke-[1.25px]" />;
    }
  };

  const projectNames = project.title.split(" ");

  let height = 0;
  if (typeof document !== "undefined") {
    height = document.documentElement.clientHeight;
  }

  return (
    <motion.div
      className="single"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="relative z-10 flex flex-col gap-8 py-0 justify-center w-full max-w-3xl m-auto">
        <div className="w-full m-auto">
          <motion.div className="text-4xl font-medium -mb-4">
            <motion.span className="mr-8" variants={firstName}>
              {projectNames[0].split("").map((char) => (
                <motion.span variants={letter}>{char}</motion.span>
              ))}
            </motion.span>

            <motion.span className="mr-4" variants={lastName}>
              {projectNames[1]?.split("").map((char) => (
                <motion.span variants={letter}>{char}</motion.span>
              ))}
            </motion.span>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, ...transition },
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: project.content }}
            className="font-light text-gray-100 text-xl"
          ></div>
        </motion.div>

        <motion.div
          className="w-full bg-black"
          initial={{
            maxWidth: "64rem",
            y: `calc(${height / 2 - 33.5 * 16}px)`,
          }}
          animate={{
            maxWidth: "100%",
            width: "100vw",
            y: 0,
            transition: { delay: 0.2, ...transition },
          }}
        >
          <div className="text-white flex-1 relative">
            <div className="shader border-2 border-gray-800">
              <div className="h-16 px-4 border-b border-gray-800 flex items-end pb-3.5 justify-between">
                <span className="text-xl font-medium">Preview</span>
                <span className="text-lg font-thin">
                  <span className="mr-2"> Last modified:</span>
                  {project.modificationDate}
                </span>
              </div>
              {project.preview.map((item: any) => (
                <div className="border-t border-gray-800 flex items-center gap-2.5 h-12 px-4 font-light text-lg">
                  {getIcon(item.type)}
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="text-baseline border-b mb-0.5 h-5"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <span className="text-baseline -mb-1.5">{item.title}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        {project?.todos?.length && (
          <div className="">
            <h3 className="text-2xl mb-4">Todos</h3>
            <ul className="after:w-[2px] after:h-full after:absolute after:bg-gray-700 after:left-2 after:top-0 after:z-[-1] relative w-full py-4 flex flex-col gap-4 text-xl font-light ml-4">
              {project.todos.map((todo) => (
                <li className="flex gap-4 items-center">
                  <div className="flex items-center justify-center rounded-full h-5 w-5 border-2 border-gray-600 bg-black">
                    <FiCheck size="0.75rem" />
                  </div>
                  <span className="-mb-1.5">{todo}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* <div className="flex gap-4 justify-between w-full">
          <div className="flex gap-2 items-center">
            <FiArrowLeft />
            <span className="text-xs tracking-wider -mb-1">PREVIOUS</span>
          </div>
          <div className="uppercase text-gray-400 text-sm tracking-wider -mb-1">
            return to main
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-xs tracking-wider text-gray-100 -mb-1">
              NEXT
            </span>
            <FiArrowRight />
          </div>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Project;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const project = getProjectBySlug(params.slug, [
    "title",
    "slug",
    "creationDate",
    "modificationDate",
    "content",
    "activity",
    "preview",
    "todos",
  ]);
  const content = await markdownToHtml(project.content || "");

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const project = getAllProjects(["slug"]);

  return {
    paths: project.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
};
