import { PROJECTS } from "../../projects";
import { Project } from "../../types/project";

const Project = ({ project }: any) => {
  return (
    <div>
      <p>{project?.title}</p>
      <p>{project?.number}</p>
    </div>
  );
};

export default Project;

export const getStaticProps = async ({ params }: any) => {
  const projects = PROJECTS.filter(({ id }: Project) => id === params.id);
  return {
    props: {
      project: projects[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = PROJECTS.map(({ id }: Project) => ({ params: { id } }));
  return { paths, fallback: false };
};
