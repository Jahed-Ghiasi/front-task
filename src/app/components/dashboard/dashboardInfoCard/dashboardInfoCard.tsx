import Icon from "src/app/components/common/icon";
import "./dashboardInfoCard.css";

interface IProps {
  icon: JSX.Element;
  title: string;
  value: any;
}

const DashboardInfoCard = ({ icon, title, value }: IProps) => {
  return (
    <div className="card-item">
      <Icon children={icon} className="icon" />
      <span className="value">{value}</span>
      <span className="card-title">{title}</span>
    </div>
  );
};

export default DashboardInfoCard;
