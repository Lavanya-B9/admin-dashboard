// clipboard,usersalt,package,chart,signout
import { CiHome } from "react-icons/ci";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { LuClipboardList, LuUser2, LuPackage2 } from "react-icons/lu";
import { MdAnalytics } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaClipboard } from "react-icons/fa";
import Img1 from "../../assets/se5.webp";
import Img2 from "../../assets/se4.webp";

// sidebar data
export const sidebarData = [
  {
    icon: CiHome,
    heading: "Dashboard",
  },
  {
    icon: LuClipboardList,
    heading: "Orders",
  },
  {
    icon: LuUser2,
    heading: "Customers",
  },
  {
    icon: LuPackage2,
    heading: "Products",
  },
  {
    icon: MdAnalytics,
    heading: "Analytics",
  },
];
// card data
export const cardData = [
  {
    title: "Sales",
    color: {
      background: " rgb(233, 53, 233)",
      boxshadow: "0px 10px 20px 0px #e0c6fc",
    },
    barValue: 70,
    value: "25,970",
    png: RiMoneyDollarBoxLine,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      background: "rgb(48, 236, 48)",
      boxshadow: "0px 10px 20px 0px #FDC0c7",
    },
    barValue: 80,
    value: "14,270",
    png: BiMoneyWithdraw,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      background: "rgb(234, 234, 75)",
      boxshadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: FaClipboard,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// updates data

export const UpdatesData = [
  {
    img: Img1,
    name: "Andrew",
    notification: "Has ordered Apple smart watch 2500mh battery",
    time: "25 seconds ago",
  },
  {
    img: Img2,
    name: "Joe",
    notification: "Has received samsung gadget for charging battery ",
    time: "35 minutes ago",
  },
  {
    img: Img1,
    name: "James",
    notification: "Has ordered Apple smart watch 2500mh battery",
    time: "2 hours ago",
  },
  {
    img: Img2,
    name: "Andrew",
    notification: "Has received Apple smart watch 2500mh battery",
    time: "25 seconds ago",
  },
];
