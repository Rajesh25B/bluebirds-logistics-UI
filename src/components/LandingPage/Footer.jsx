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
            <ListItemButton to="/">About BlueBirds</ListItemButton>
            <ListItemButton to="/">Group Companies</ListItemButton>
            <ListItemButton to="/">Safety Measures</ListItemButton>
            <ListItemButton to="/">Our Presence</ListItemButton>
          </List>
          <List>
            <ListItemButton to="/">FTL Services</ListItemButton>
            <ListItemButton to="/">Dedicated Loads</ListItemButton>
            <ListItemButton to="/">Expedited Teams</ListItemButton>
            <ListItemButton to="/">Trailer Interchange</ListItemButton>
          </List>
          <List>
            <ListItemButton to="/">Industries Served</ListItemButton>
            <ListItemButton to="/">Foods & Beverages</ListItemButton>
            <ListItemButton to="/">Paper & Packaging</ListItemButton>
            <ListItemButton to="/">Retail</ListItemButton>
            <ListItemButton to="/">Healthcare</ListItemButton>
            <ListItemButton to="/">Industrial Goods</ListItemButton>
          </List>
          <List>
            <ListItemButton to="/">Testimonials</ListItemButton>
            <ListItemButton to="/">Careers</ListItemButton>
            <ListItemButton to="/">Photo Gallery</ListItemButton>
            <ListItemButton to="/">Privacy Policy</ListItemButton>
            <ListItemButton to="/">Sitemap</ListItemButton>
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
            BlueBirds Logistics Pvt. Ltd. 2023. All rights reserved.
          </Typography>
        </Box>
      </MainBox>
    </>
  );
}
