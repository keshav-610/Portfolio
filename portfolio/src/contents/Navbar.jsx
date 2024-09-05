import { useTheme } from "@mui/material/styles";
import { IconButton, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    "HOME",
    "ABOUT",
    "SKILLS",
    "PROJECTS",
    "EXPERIENCE",
    "CONTACT",
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isMobile ? "space-between" : "space-evenly",
          }}
        >
          {isMobile ? (
            <>
              <Typography variant="h6" sx={{ fontFamily: "Helvetica Neue Medium" }}>
                Kesava Prakash
              </Typography>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            navItems.map((item) => (
              <Typography
                key={item}
                variant="subtitle1"
                sx={{ fontFamily: "Helvetica Neue Medium" }}
              >
                {item}
              </Typography>
            ))
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "black",
            color: "white",
            fontSize: "20px",
          },
        }}
      >
        <List>
          {navItems.map((text) => (
            <ListItem button key={text} onClick={toggleDrawer(false)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
