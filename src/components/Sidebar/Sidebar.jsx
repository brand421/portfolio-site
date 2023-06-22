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
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Drawer,
  ListItemButton,
  AppBar,
} from "@mui/material";
import portrait from "../../images/Brandon.jpg";
import "./sidebar.css";
import React, { useState } from "react";

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
    <Box className="menu__slider" sx={{ width: 250 }} onClick={toggleSlider}>
      <Avatar className="avatar" src={portrait} alt="portrait of Brandan" />
      <List>
        {listItems.map((listItem, index) => (
          <ListItem className="listItem" key={listItem}>
            <ListItemButton>
              <ListItemIcon>{listItem.listIcon}</ListItemIcon>
              <ListItemText primary={listItem.listText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>;
  };

  return (
    <>
      <CssBaseline />

      <Box component="nav" className="header">
        <AppBar
          position="static"
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <IconButton
              onClick={toggleSlider}
              sx={{ backgroundColor: "#e0e0e0" }}
            >
              <Menu />
            </IconButton>
            <Drawer open={open} anchor="left" onClose={toggleSlider}>
              {sideList}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
