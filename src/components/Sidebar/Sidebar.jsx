import {
  HomeOutlined,
  DataObjectOutlined,
  Menu,
  PersonOutlineOutlined,
  EmailOutlined,
} from "@mui/icons-material";
import {
  Box,
  Toolbar,
  Avatar,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Drawer,
  ListItemButton,
} from "@mui/material";
import portrait from "../../images/Brandon.jpg";
import "./sidebar.css";
import { useState } from "react";

export default function Sidebar() {
  const listItems = [
    {
      listIcon: <HomeOutlined />,
      listText: "Home",
    },
    {
      listIcon: <DataObjectOutlined />,
      listText: "Projects",
    },
    {
      listIcon: <PersonOutlineOutlined />,
      listText: "About",
    },
    {
      listIcon: <EmailOutlined />,
      listText: "Contact",
    },
  ];

  const [open, setOpen] = useState(false);

  function toggleSlider() {
    setOpen(!open);
  }

  const sideList = () => {
    <Box className="menu__slider" component="div">
      <Avatar className="avatar" src={portrait} alt="portrait of Brandan" />
      <List>
        {listItems.map((listItem, index) => (
          <ListItemButton className="listItem" key={index}>
            <ListItemIcon className="listItem">
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText primary={listItem.listText} />
          </ListItemButton>
        ))}
      </List>
    </Box>;
  };

  return (
    <>
      <CssBaseline />

      <Box
        component="nav"
        className="header"
        sx={{ backgroundColor: "#e0e0e0" }}
      >
        <Toolbar>
          <IconButton onClick={toggleSlider} color="grey">
            <Menu />
          </IconButton>
          <Drawer open={open} anchor="right" onClose={toggleSlider}>
            {sideList()}
          </Drawer>
        </Toolbar>
      </Box>
    </>
  );
}
