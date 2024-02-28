import { NavLink } from "react-router-dom";
import "./menuItem.css";
import { IMenuItem } from "types/index";
import { useAppContext } from "src/app/utils/context";

interface IProps {
  item: IMenuItem;
}

const MenuItem = ({ item }: IProps) => {
  const { icon, link, title } = item;
  const { isMinimizedAsideMenu } = useAppContext();

  return (
    <NavLink className="menuItem" to={link}>
      <span className="identifier" />
      <span className="icon">{icon}</span>
      {!isMinimizedAsideMenu ? <span className="title">{title}</span> : null}
    </NavLink>
  );
};

export default MenuItem;
