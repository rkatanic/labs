import { getProjectBySlug, getAllProjects } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";
import { DATE_FORMAT } from "../../util/dateTimeUtils";
import { Project } from "../../types/project";
import { useRouter } from "next/router";

type Props = {
  project: Project;
};

const Project = ({ project }: Props) => {
  const router = useRouter();

  const handleGoBack = (): void => {
    router.push("/");
  };

  return (
    <div className="h-[95%] flex flex-wrap overflow-auto">
      <div className="flex-1 min-w-[10rem] text-gray-100">
        project preview
        {project?.preview?.map((p: any) => (
          <div>{p.title}</div>
        ))}
      </div>
      <div className="flex-1">
        <h1 className="text-gray-50 text-4xl font-medium mb-4">
          {project.title}
        </h1>
        {/*   <h3 className="text-gray-200 text-xl">
        Updated on {DATE_FORMAT.format(new Date(project.modificationDate))}
      </h3> */}
        <div
          dangerouslySetInnerHTML={{ __html: project.content }}
          className="text-gray-300 text-2xl leading-9"
        ></div>
      </div>
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
