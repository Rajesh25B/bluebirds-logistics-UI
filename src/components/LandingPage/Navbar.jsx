import { createTheme } from "@mui/material/styles";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import MainLogo from "/src/assets/styles/svg/MainLogo";
import styled from "@emotion/styled";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";

const theme = createTheme({
  palette: {
    primary: {
      light: "#f2eeed",
      main: "#4a6ae8",
    },
  },
});

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-around",
});

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <AppBar
          theme={theme}
          position="fixed"
          sx={{
            display: { sm: "flex" },
            height: {
              sm: 80, //upto 600px
            },
          }}
        >
          <CustomToolbar>
            <Box>
              <IconButton
                aria-label="home"
                edge="start"
                variant="text"
                disableRipple
                component="a"
                href="/"
              >
                <MainLogo />
              </IconButton>
            </Box>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: { xs: "none", sm: "flex", md: "flex" },
                paddingLeft: { xs: "none", sm: "none", md: 30, lg: 60 },
              }}
            >
              <Button color="inherit" component="a" href="/">
                Track your package
              </Button>
              <Button color="inherit" component="a" href="/">
                ABOUT
              </Button>
              <Button color="inherit" component="a" href="/">
                Services
              </Button>
              <Button color="inherit" component="a" href="/">
                Login
              </Button>
              <Button color="inherit" component="a" href="/">
                Register
              </Button>
            </Stack>

            <IconButton
              color="inherit"
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              disableRipple
              sx={{
                display: { xs: "flex", sm: "none", md: "none" },
                paddingLeft: { xs: "none", sm: "none", md: 30, lg: 40 },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              color="inherit"
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Button color="inherit" component="a" href="/">
                  Track your package
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button color="inherit" component="a" href="/">
                  ABOUT
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button color="inherit" component="a" href="/">
                  Login
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button color="inherit" component="a" href="/">
                  Register
                </Button>
              </MenuItem>
            </Menu>
          </CustomToolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
