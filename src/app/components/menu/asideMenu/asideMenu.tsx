import Menu from "../menu/menu";
import "./asideMenu.css";
import MenuItem from "../menuItem/menuItem";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";
import { useAppContext } from "src/app/utils/context";

const AsideMenu = () => {
  const { isMinimizedAsideMenu, setIsMinimizedAsideMenu } = useAppContext();

  const toggleAsideMenu = () => {
    setIsMinimizedAsideMenu(!isMinimizedAsideMenu);
  }

  return (
    <div
      className={clsx(
        "aside",
        isMinimizedAsideMenu ? "minimized-aside" : "normal-aside"
      )}
    >
      <div className="aside-top">
        <div className="head">
          <h2>Drop</h2>
          <span
            className="minimizer-btn"
            onClick={toggleAsideMenu}
          >
            {!isMinimizedAsideMenu ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </span>
        </div>
        <Menu />
      </div>
      <div className="aside-bottom">
        <MenuItem
          item={{
            title: "Setting",
            icon: <IoSettingsOutline />,
            link: "/setting",
          }}
        />
      </div>
    </div>
  );
};

export default AsideMenu;
