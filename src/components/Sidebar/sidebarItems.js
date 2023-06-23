import {
  HomeOutlined,
  DataObjectOutlined,
  PersonOutlineOutlined,
  EmailOutlined,
} from "@mui/icons-material";

const sidebarItems = [
  {
    itemName: "Home",
    itemIcon: <HomeOutlined sx={{ color: "white" }} />,
    itemPath: "/home",
  },
  {
    itemName: "About",
    itemIcon: <PersonOutlineOutlined sx={{ color: "white" }} />,
    itemPath: "/about",
  },
  {
    itemName: "Projects",
    itemIcon: <DataObjectOutlined sx={{ color: "white" }} />,
    itemPath: "/projects",
  },
  {
    itemName: "Contact",
    itemIcon: <EmailOutlined sx={{ color: "white" }} />,
    itemPath: "/contact",
  },
];

export default sidebarItems;
