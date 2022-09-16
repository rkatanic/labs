import { getProjectBySlug, getAllProjects } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";
import { DATE_FORMAT } from "../../util/dateTimeUtils";
import { Project } from "../../types/project";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

type Props = {
  project: Project;
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

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
    transition: { duration: 2, ...transition },
  },
};

const Project = ({ project }: Props) => {
  const router = useRouter();

  const handleGoBack = (): void => {
    router.push("/");
  };
  const projectNames = project.title.split(" ");

  return (
    <motion.div
      className="single"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2, ...transition },
            }}
          >
            <div className="flex gap-4 justify-between">
              <span>{project.creationDate}</span>
            </div>
          </motion.div>
          <motion.div className="model overflow-hidden">
            <motion.span className="mr-4" variants={firstName}>
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
          initial={{
            width: "24rem",
          }}
          animate={{
            width: "100vw",
            transition: { delay: 0.2, ...transition },
          }}
        >
          <div className="text-white flex-1 relative">
            <motion.div
              initial={{
                height: "32rem",
              }}
              animate={{
                height: "32rem",
                transition: { delay: 0.2, ...transition },
              }}
            >
              <div className="shader h-full border-2 border-gray-800"></div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            // y: "100px",
            opacity: 0,
          }}
          animate={{
            // y: "0",
            opacity: 1,
            transition: { delay: 1.6, ...transition },
          }}
        >
          <div className="flex gap-16 mt-8">
            <div className="text-2xl font-medium tracking-wide text-gray-50">
              Synopsis
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: project.content }}
              className="max-w-5xl text-gray-200 text-xl"
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
