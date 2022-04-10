import Link from "next/link";
import { DATE_FORMAT } from "../util/dateTimeUtils";

interface Props {
  title: string;
  slug: string;
  excerpt: string;
  creationDate: string;
  number: string;
}

const ProjectCard = ({
  title,
  slug,
  excerpt,
  creationDate,
  number,
}: Props): JSX.Element => {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="project-card">
        <h3 className="project-card-number">{number}</h3>
        <div>
          <h1 className="project-card-title">{title}</h1>
          <h3 className="project-card-date">
            {DATE_FORMAT.format(new Date(creationDate))}
          </h3>
          <hr />
          <p className="project-card-description">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
