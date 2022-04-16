import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { getProjectBySlug, getAllProjects } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";
import CloseIcon from "../../assets/icons/x.svg";
import IconButton from "../../components/IconButton";
import { DATE_FORMAT } from "../../util/dateTimeUtils";
import { Project } from "../../types/Project";

type Props = {
  project: Project;
};

const Project = ({ project }: Props) => {
  const button = useRef<any>();
  const router = useRouter();

  const handleGoBack = (): void => {
    router.push("/");
  };

  useEffect(() => {
    const changeButtonPosition = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (button.current) {
        button.current.style.marginTop = `${winScroll}px`;
      }
    };

    window.addEventListener("scroll", changeButtonPosition);
    return () => window.removeEventListener("scroll", changeButtonPosition);
  }, []);

  return (
    <div className="project">
      <div className="button-container" ref={button}>
        <IconButton
          onClick={handleGoBack}
          icon={<CloseIcon />}
          tooltip="Go back"
        />
      </div>
      <h1 className="project-title">{project.title}</h1>
      <h3>
        Updated on {DATE_FORMAT.format(new Date(project.modificationDate))}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: project.content }}></div>
    </div>
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

export async function getStaticPaths() {
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
}
