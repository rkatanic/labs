import { getProjectBySlug, getAllProjects } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";
import { DATE_FORMAT } from "../../util/dateTimeUtils";
import { Project } from "../../types/project";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

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
  const projectNames = project.title.split(" ");
  let height = 0;
  if (typeof document === "undefined") {
    // during server evaluation
  } else {
    // during client's browser evaluation
    console.log(document.documentElement.clientHeight);
    height = document.documentElement.clientHeight;
  }

  return (
    <motion.div
      className="single"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full m-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1.2, ...transition },
            }}
          >
            <div className="flex gap-4 justify-between">
              <span>{project.creationDate}</span>
            </div>
          </motion.div>
          <motion.div className="model overflow-hidden">
            <motion.span className="mr-8" variants={firstName}>
              {projectNames[0].split("").map((char) => (
                <motion.span variants={letter}>{char}</motion.span>
              ))}
            </motion.span>

            <motion.span className="mr-4" variants={lastName}>
              {projectNames[1].split("").map((char) => (
                <motion.span variants={letter}>{char}</motion.span>
              ))}
            </motion.span>
          </motion.div>
        </div>

        <motion.div
          className="w-full"
          initial={{
            maxWidth: "64rem",
            y: `calc(${height / 2 - 33.5 * 16}px)`,
          }}
          animate={{
            maxWidth: "100%",
            y: 0,
            transition: { delay: 0.2, ...transition },
          }}
        >
          <div className="text-white flex-1 relative">
            <div className="h-[24rem] shader border-2 border-gray-800"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, ...transition },
          }}
        >
          <div className="flex gap-16 mt-8 max-w-5xl">
            <div
              dangerouslySetInnerHTML={{ __html: project.content }}
              className=" text-gray-200 text-xl"
            ></div>
          </div>
        </motion.div>
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
