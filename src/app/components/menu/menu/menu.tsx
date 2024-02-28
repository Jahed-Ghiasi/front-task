import { useMemo } from "react";
import menuItems from "src/app/utils/menuItems";
import MenuItem from "../menuItem/menuItem";
import "./menu.css";
import { IMenuItem } from "types/index";

interface IProps {}

const Menu = ({}: IProps) => {
  const rendred_menu = useMemo(() => {
    return menuItems.map((menuItem: IMenuItem) => {
      return <MenuItem item={menuItem} />;
    });
  }, [menuItems]);

  return <div className="menu-items">{rendred_menu}</div>;
};

export default Menu;
