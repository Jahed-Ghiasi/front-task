import { NavLink } from "react-router-dom";
import "./menuItem.css";
import { IMenuItem } from "types/index";

interface IProps {
  item: IMenuItem;
  isMinimized?: boolean;
}

const MenuItem = ({ item, isMinimized }: IProps) => {
  const { icon, link, title } = item;

  return (
    <NavLink className="menuItem" to={link}>
      <span className="identifier" />
      <span className="icon">{icon}</span>
      {!isMinimized ? <span className="title">{title}</span> : null}
    </NavLink>
  );
};

export default MenuItem;
