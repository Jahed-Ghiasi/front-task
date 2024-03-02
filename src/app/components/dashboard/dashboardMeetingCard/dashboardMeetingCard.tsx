import { IMeeting } from "types/dashboard.types";
import "./dashboardMeetingCard.css";

interface IProps {
  meeting: IMeeting;
}

const DashboardMeetingCard = ({ meeting }: IProps) => {
  const { date, image, name, subject } = meeting;

  return (
    <div className="meeting-item">
      <img src={image} alt={name} />
      <span>{name}</span>
      <span>{subject}</span>
      <span>{`${new Date(date).toLocaleString("default", {
        month: "short",
        day: "numeric",
      })} at ${new Date(date).toLocaleString("default", {
        hour: "2-digit",
      })}`}</span>
    </div>
  );
};

export default DashboardMeetingCard;
