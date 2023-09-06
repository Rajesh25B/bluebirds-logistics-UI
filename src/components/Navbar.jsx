import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import MainLogo from "../assets/styles/svgs/MainLogo";
import styled from "@emotion/styled";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
          position="sticky"
          sx={{
            display: { sm: "flex" },
            height: {
              sm: 80, //upto 600px
            },
          }}
        >
          <CustomToolbar>
            <Box>
              <IconButton aria-label="home" edge="start" variant="text">
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
              <Button color="inherit">Track your package</Button>
              <Button color="inherit">ABOUT</Button>
              <Button color="inherit">Services</Button>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Register</Button>
            </Stack>

            <IconButton
              color="inherit"
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              sx={{
                display: { xs: "flex", sm: "none", md: "none" },
                paddingLeft: { xs: 15, sm: "none", md: 40, lg: 50 },
              }}
            >
              <MoreVertIcon />
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
                <Button color="inherit">Track your package</Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button color="inherit">ABOUT</Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button color="inherit">Login</Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button color="inherit">Register</Button>
              </MenuItem>
            </Menu>
          </CustomToolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
