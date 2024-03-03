import { useMemo } from "react";
import menuItems from "src/app/utils/menuItems";
import MenuItem from "../menuItem/menuItem";
import "./menu.css";
import { IMenuItem } from "types/index";

interface IProps {}

const Menu = ({}: IProps) => {
  const rendredMenu = useMemo(() => {
    return menuItems.map((menuItem: IMenuItem) => {
      return <MenuItem key={menuItem.link} item={menuItem} />;
    });
  }, [menuItems]);

  return <div className="menu-items">{rendredMenu}</div>;
};

export default Menu;
