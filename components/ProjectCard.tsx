import Link from "next/link";

interface Props {
  id: string;
  number: string;
  title: string;
  date: string;
  description: string;
}

const ProjectCard = ({
  id,
  number,
  title,
  date,
  description,
}: Props): JSX.Element => {
  return (
    <Link href={`/projects/${id}`}>
      <div className="project-card">
        <h3 className="project-card-number">{number}</h3>
        <div>
          <h1 className="project-card-title">{title}</h1>
          <h3 className="project-card-date">{date}</h3>
          <hr />
          <p className="project-card-description">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
