interface Props {
  number: string;
  title: string;
  date: string;
  description: string;
}

const ProjectCard = ({
  number,
  title,
  date,
  description,
}: Props): JSX.Element => {
  return (
    <div className="project-card">
      <h3 className="project-card-number">{number}</h3>
      <div>
        <h1 className="project-card-title">{title}</h1>
        <h3 className="project-card-date">{date}</h3>
        <hr />
        <p className="project-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
