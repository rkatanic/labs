import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import IconButton from "../../components/IconButton";
import { PROJECTS } from "../../projects";
import { Project as ProjectType } from "../../types/project";
import CloseIcon from "../../assets/icons/x.svg";

const Project = ({ project }: any): JSX.Element => {
  const button = useRef<any>();
  const router = useRouter();

  const handleGoBack = (): void => {
    router.push("/");
  };

  useEffect(() => {
    const changeButtonPosition = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      button.current.style.marginTop = `${winScroll}px`;
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
      <h1 className="project-title">{project?.title}</h1>
      <h3 className="project-date">Updated on {project?.creationDate}</h3>
      <p className="project-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, pariatur
        saepe a ab voluptatem voluptatibus minus placeat hic esse optio,
        nesciunt enim accusantium dignissimos. Voluptas et aut omnis! Quos, qui.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, pariatur
        saepe a ab voluptatem voluptatibus minus placeat hic esse optio,
        nesciunt enim accusantium dignissimos. Voluptas et aut omnis! Quos, qui.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, pariatur
        saepe a ab voluptatem voluptatibus minus placeat hic esse optio,
        nesciunt enim accusantium dignissimos. Voluptas et aut omnis! Quos, qui.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, pariatur
        saepe a ab voluptatem voluptatibus minus placeat hic esse optio,
        nesciunt enim accusantium dignissimos. Voluptas et aut omnis! Quos, qui.
      </p>
      <p className="project-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, pariatur
        saepe a ab voluptatem voluptatibus minus placeat hic esse optio,
        nesciunt enim accusantium dignissimos. Voluptas et aut omnis! Quos, qui.
      </p>
      <h3 className="project-date">Todos</h3>
      <ul>
        <li>To do one</li>
        <li>To do two</li>
        <li>To do three</li>
      </ul>
      <h3 className="project-date">Preview</h3>
      <div className="project-preview">
        <a href="" className="project-preview-link">
          <span>index.html</span>
          <span>url</span>
        </a>
        <a href="" className="project-preview-link">
          <span>mockup-01</span>
          <span>img</span>
        </a>
        <a href="" className="project-preview-link">
          <span>mockup-02</span>
          <span>img</span>
        </a>
        <a href="" className="project-preview-link">
          <span>mockup-03</span>
          <span>img</span>
        </a>
        <a href="" className="project-preview-link">
          <span>mockup-04</span>
          <span>img</span>
        </a>
      </div>
    </div>
  );
};

export default Project;

export const getStaticProps = async ({ params }: any) => {
  const projects = PROJECTS.filter(({ id }: ProjectType) => id === params.id);
  return {
    props: {
      project: projects[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = PROJECTS.map(({ id }: ProjectType) => ({ params: { id } }));
  return { paths, fallback: false };
};
