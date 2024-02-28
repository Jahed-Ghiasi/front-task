import { RxDashboard } from "react-icons/rx";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BsBank } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { BsCardList } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { IMenuItem } from "types/index";

const menuItems: IMenuItem[] = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <RxDashboard />,
  },
  {
    title: "Report",
    link: "/report",
    icon: <HiOutlineDocumentReport />,
  },
  {
    title: "Bank",
    link: "/bank",
    icon: <BsBank />,
  },
  {
    title: "Email",
    link: "/email",
    icon: <MdOutlineMail />,
  },
  {
    title: "Group",
    link: "/group",
    icon: <GrGroup />,
  },
  {
    title: "List",
    link: "/list",
    icon: <BsCardList />,
  },
  {
    title: "Finance",
    link: "/finance",
    icon: <AiOutlineDollar />,
  },
];

export default menuItems;
