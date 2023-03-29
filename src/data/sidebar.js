import { FaTh, FaRegChartBar, FaCommentAlt,FaHamburger,FaUser } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { MdHomeFilled,MdDashboard,MdNotifications,MdSend,MdSettings } from "react-icons/md";
import { CgClipboard } from "react-icons/cg";
const menu = [
  {
    title: "Home",
    icon: <MdHomeFilled />,
    path: "/home",
  },
  // {
  //   title: "Dashboard",
  //   icon: <MdDashboard />,
  //   path: "/dashboard",
  // },
  {
    title: "Order",
    icon: <CgClipboard />,
    path: "/orderDeatils",
  },
  {
    title: "Product",
    icon: <FaHamburger />,
    path: "/product",
  },
  {
    title: "Notification",
    icon: <MdNotifications />,
    path: "/notification",
  },
  {
    title: "Customer",
    icon: <FaUser />,
    path: "/customer",
  },
  // {
  //   title: "Message",
  //   icon: <MdSend />,
  //   path: "/msg",
  // },
  {
    title: "Setting",
    icon: <MdSettings />,
    path: "/setting",
  },
  // {
  //   title: "Add Product",
  //   icon: <BiImageAdd />,
  //   path: "/add-product",
  // },
  // {
  //   title: "Account",
  //   icon: <FaRegChartBar />,
  //   childrens: [
  //     {
  //       title: "Profile",
  //       path: "/profile",
  //     },
  //     {
  //       title: "Edit Profile",
  //       path: "/edit-profile",
  //     },
  //     {
  //       title: "Change Password",
  //       path: "/changePassword",
  //     },
  //   ],
  // },
  // {
  //   title: "Report Bug",
  //   icon: <FaCommentAlt />,
  //   path: "/contact-us",
  // },
];

export default menu;