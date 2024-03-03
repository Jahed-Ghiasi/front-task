import Icon from "src/app/components/common/icon";
import "./styles.css";
import { LuCalendarDays } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";

const NotificationBar = () => {
  return (
    <div className="notification-bar">
      <Icon isButton>
        <LuCalendarDays />
      </Icon>
      <Icon isButton>
        <>
          <IoNotificationsOutline />
          <span className="notif">1</span>
        </>
      </Icon>
      <Icon isButton>
        <>
          <TfiCommentAlt />
          <span className="comments">0</span>
        </>
      </Icon>
      <img src="images/avatar.png" alt="" />
      <Icon isButton>
        <IoIosArrowDown />
      </Icon>
    </div>
  );
};

export default NotificationBar;
