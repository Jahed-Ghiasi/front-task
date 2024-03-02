import { IMeeting } from "types/dashboard.types";
import "./dashboardMeetingCard.css";
import { dateString } from "src/app/utils/index";

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
      <span>{dateString(date)}</span>
    </div>
  );
};

export default DashboardMeetingCard;
