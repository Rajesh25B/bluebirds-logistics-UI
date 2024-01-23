import { createTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  List,
  ListItemButton,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import EmailIcon from "@mui/icons-material/Email";

const theme = createTheme({
  palette: {
    primary: {
      light: "#f0f8ff",
      main: "#4a6ae8",
    },
  },
});

const MainBox = styled(Box)(({ theme }) => ({
  component: "footer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  [theme.breakpoints.down("lg")]: {
    minHeight: "60vh",
    bottom: 0,
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: "60vh",
  },
  [theme.breakpoints.down("xs")]: {
    minHeight: "40vh",
  },
}));

export default function Footer() {
  return (
    <>
      <MainBox component="footer" theme={theme} bgcolor="#4a6ae8" color="white">
        <Container
          id="box-one"
          mt={1}
          sx={{
            display: "flex",
            flexDirection: { xs: "row", sm: "row", lg: "row" },
            flexWrap: { xs: "wrap", sm: "wrap", lg: "none" },
            justifyContent: { xs: "center", sm: "center" },
            // fontSize: "1.25rem",
            // fontWeight: "500",
          }}
        >
          <List>
            <ListItemButton to="/">ABOUT BLUEBIRDS</ListItemButton>
            <ListItemButton to="/">GROUP COMPANIES</ListItemButton>
            <ListItemButton to="/">SAFETY MEASURES</ListItemButton>
            <ListItemButton to="/">OUR PRESENCE</ListItemButton>
          </List>
          <List>
            <ListItemButton to="/">FTL SERVICES</ListItemButton>
            <ListItemButton to="/">DEDICATED LOADS</ListItemButton>
            <ListItemButton to="/">EXPEDITED TEAMS</ListItemButton>
            <ListItemButton to="/">TRAILER INTERCHANGE</ListItemButton>
          </List>
          <List>
            <ListItemButton to="/">INDUSTRIES SERVED</ListItemButton>
            <ListItemButton to="/">FOODS & BEVERAGES</ListItemButton>
            <ListItemButton to="/">PAPER & PACKAGING</ListItemButton>
            <ListItemButton to="/">RETAIL</ListItemButton>
            <ListItemButton to="/">HEALTHCARE</ListItemButton>
          </List>
          <List>
            <ListItemButton to="/">TESTIMONIALS</ListItemButton>
            <ListItemButton to="/">CAREERS</ListItemButton>
            <ListItemButton to="/">PHOTO GALLERY</ListItemButton>
            <ListItemButton to="/">PRIVACY POLICY</ListItemButton>
            <ListItemButton to="/">SITEMAPS</ListItemButton>
          </List>
        </Container>
        <Box
          id="box-two"
          sx={{
            marginTop: "10px",
          }}
        >
          <Stack direction="row" spacing={2}>
            <TextField
              label="Enter your email"
              variant="filled"
              autoFocus={false}
              fullWidth
              sx={{
                width: { xs: "21ch", sm: "40ch", md: "50ch" },
                backgroundColor: "white",
                borderRadius: "15px",
                paddingRight: "10px",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              sx={{ borderRadius: "25px", backgroundColor: "#00129b" }}
            >
              Subscribe
            </Button>
          </Stack>
        </Box>
        <Box id="box-three">
          <Typography
            m={3}
            sx={{ display: "flex", justifyContent: "center", fontSize: "12px" }}
          >
            <CopyrightIcon sx={{ height: "18px" }} />
            BlueBirds Logistics Pvt. Ltd. 2024. All rights reserved.
          </Typography>
        </Box>
      </MainBox>
    </>
  );
}
