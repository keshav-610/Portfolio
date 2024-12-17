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
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "EDUCATION", href: "#education" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleScroll = (id) => (event) => {
    event.preventDefault();
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "black",
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
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Helvetica Neue Medium",
                  color: "white",
                }}
              >
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
                key={item.label}
                variant="subtitle1"
                sx={{
                  fontFamily: "Helvetica Neue Medium",
                  color: "inherit",
                  cursor: "pointer",
                }}
                onClick={handleScroll(item.href)}
              >
                {item.label}
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
            backgroundColor: "#030302",
            fontSize: "20px",
            textDecoration: "none",
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.label}
              onClick={handleScroll(item.href)}
            >
              <ListItemText primary={item.label} sx={{ color: "white" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
