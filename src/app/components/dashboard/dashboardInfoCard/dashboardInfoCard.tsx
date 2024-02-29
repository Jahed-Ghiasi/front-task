import "./dashboardInfoCard.css";

interface IProps {
  icon: JSX.Element;
  title: string;
  value: any;
}

const DashboardInfoCard = ({ icon, title, value }: IProps) => {
  return (
    <div className="card-item">
      <span className="icon">{icon}</span>
      <span className="value">{value}</span>
      <span className="card-title">{title}</span>
    </div>
  );
};

export default DashboardInfoCard;
