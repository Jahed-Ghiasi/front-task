import clsx from "clsx";
import SectionHead from "src/app/components/common/sectionHead";
import "./statisticsCard.css";

interface IProps {
  title: string;
  value: number;
  percent: number;
}

const StatisticsCard = ({ value, percent, title }: IProps) => {
  return (
    <div className="card">
      <SectionHead title={title} />
      <div className="result">
        <span className="number">{value}</span>
        <span className={clsx(percent > 0 ? "increase" : "decrease")}>
          {percent > 0 && "+"}
          {percent}%
        </span>
      </div>
    </div>
  );
};

export default StatisticsCard;
