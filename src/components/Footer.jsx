import { createTheme } from "@mui/material/styles";
import {
  Box,
  List,
  Stack,
  ListItemButton,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

const footerTheme = createTheme({
  palette: {
    primary: {
      light: "#f0f8ff",
      main: "#4a6ae8",
    },
  },
});

export default function Footer() {
  return (
    <Box
      theme={footerTheme}
      sx={{
        backgroundColor: "primary.main",
        color: "primary.light",
        height: "100vh",
        fontStyle: "Roboto",
        fontSize: 20,
        fontWeight: 500,
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        pt={5}
        sx={{
          display: { xs: "flex", sm: "flex", md: "flex" },
          flexWrap: { xs: "wrap", sm: "none", md: "none" },
          flexShrink: 1,
          justifyContent: "center",
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
          <ListItemButton to="/">Dry Van</ListItemButton>
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
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        m={2}
        sx={{
          display: { xs: "flex", sm: "flex", md: "flex" },
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TextField
          label="Enter your email"
          variant="outlined"
          sx={{
            width: { xs: "30ch", sm: "40ch", md: "60ch" },
            backgroundColor: "white",
          }}
        />
        <Button variant="contained">Subscribe</Button>
      </Stack>
      <Typography
        m={5}
        sx={{ display: "flex", justifyContent: "center", fontSize: "12px" }}
      >
        <CopyrightIcon sx={{ height: "18px" }} />
        BlueBirds Logistics Pvt. Ltd. 2023. All rights reserved.
      </Typography>
    </Box>
  );
}
