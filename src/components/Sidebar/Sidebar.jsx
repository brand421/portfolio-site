import {
  //   Box,
  //   Toolbar,
  //   Avatar,
  IconButton,
  //   List,
  //   ListItem,
  //   ListItemIcon,
  //   ListItemText,
  //   CssBaseline,
  //   Drawer,
  //   ListItemButton,
  //   AppBar,
} from "@mui/material";
import portrait from "../../images/Brandon.jpg";
import sidebarItems from "./sidebarItems";
import { Link } from "react-router-dom";
import "./sidebar.css";

import React from "react";

export default function Sidebar() {
  return (
    <nav id="sidebar__container">
      <div className="photo__div">
        <img id="photo" src={portrait} alt="Brandan portrait" />
      </div>
      <div className="menu__items">
        {sidebarItems.map((item, index) => (
          <Link
            to={item.itemPath}
            className="menu__item"
            key={index}
          >
            <IconButton sx={{":hover": {backgroundColor:"transparent"}}}>{item.itemIcon}</IconButton>
            <h3 className="menu__text">{item.itemName}</h3>
          </Link>
        ))}
      </div>
    </nav>
  );
}

// export default function Sidebar() {
//   const listItems = [
//     {
//       listIcon: <HomeOutlined />,
//       listText: "Home",
//     },
//     {
//       listIcon: <DataObjectOutlined />,
//       listText: "Projects",
//     },
//     {
//       listIcon: <PersonOutlineOutlined />,
//       listText: "About",
//     },
//     {
//       listIcon: <EmailOutlined />,
//       listText: "Contact",
//     },
//   ];

//   const [open, setOpen] = useState(false);

//   function toggleSlider() {
//     setOpen(!open);
//   }

//   const sideList = () => {
//     <Box
//       className="menu__slider"
//       sx={{ width: 250 }}
//       onClick={() => setOpen(false)}
//     >
//       <Avatar className="avatar" src={portrait} alt="portrait of Brandan" />
//       <List>
//         {listItems.map((listItem, index) => (
//           <ListItem className="listItem" key={listItem}>
//             <ListItemButton>
//               <ListItemIcon>{listItem.listIcon}</ListItemIcon>
//               <ListItemText primary={listItem.listText} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>;
//   };

//   return (
//     <>
//       <CssBaseline />

//       <Box component="nav" className="header">
//         <AppBar
//           position="static"
//           sx={{ backgroundColor: "transparent", boxShadow: "none" }}
//         >
//           <Toolbar>
//             <IconButton
//               onClick={toggleSlider}
//               sx={{ backgroundColor: "#e0e0e0" }}
//             >
//               <Menu />
//             </IconButton>
//             <Drawer open={open} anchor="left" onClose={toggleSlider}>
//               {sideList}
//             </Drawer>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     </>
//   );
// }
