import Link from "next/link";
import { DATE_FORMAT } from "../util/dateTimeUtils";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import YearlyActivity from "./activity-chart/YearlyActivity";

interface Props {
  title: string;
  slug: string;
  creationDate: string;
  number: string;
  activity: number[];
}

const ProjectCard = ({
  title,
  slug,
  creationDate,
  number,
  activity,
}: Props): JSX.Element => {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="project-card">
        <div className="project-card-heading">
          <YearlyActivity yearlyActivity={activity} />
          <h3 className="project-card-heading-number">/{number}</h3>
        </div>
        <div>
          <h1 className="project-card-title">{title}</h1>
          <div className="project-card-footer">
            <h3 className="project-card-date">
              {DATE_FORMAT.format(new Date(creationDate))}
            </h3>
            <ArrowUpRightIcon />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
