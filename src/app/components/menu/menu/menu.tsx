import { useMemo } from "react";
import menuItems from "src/app/utils/menuItems";
import MenuItem from "../menuItem/menuItem";
import "./menu.css";
import { IMenuItem } from "types/index";

interface IProps {
  isMinimized: boolean;
}

const Menu = ({ isMinimized }: IProps) => {
  const rendred_menu = useMemo(() => {
    return menuItems.map((menuItem: IMenuItem) => {
      return <MenuItem item={menuItem} isMinimized={isMinimized} />;
    });
  }, [menuItems, isMinimized]);

  return <div className="menu-items">{rendred_menu}</div>;
};

export default Menu;
