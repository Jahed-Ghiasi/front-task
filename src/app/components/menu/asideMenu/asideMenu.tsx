import Menu from "../menu/menu";
import "./asideMenu.css";
import MenuItem from "../menuItem/menuItem";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import clsx from "clsx";

const AsideMenu = () => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  return (
    <div
      className={clsx(
        "aside",
        isMinimized ? "minimized-aside" : "normal-aside"
      )}
    >
      <div className="aside-top">
        <div className="head">
          <h2>Drop</h2>
          <span
            className="minimizer-btn"
            onClick={() => {
              setIsMinimized(!isMinimized);
            }}
          >
            {!isMinimized ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </span>
        </div>
        <Menu isMinimized={isMinimized} />
      </div>
      <div className="aside-bottom">
        <MenuItem
          item={{
            title: "Setting",
            icon: <IoSettingsOutline />,
            link: "/setting",
          }}
          isMinimized={isMinimized}
        />
      </div>
    </div>
  );
};

export default AsideMenu;
