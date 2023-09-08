import React from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Divider,
  IconButton,
  TextField,
} from "@mui/material";
import HeroLayout from "./HeroLayout";
import SearchIcon from "@mui/icons-material/Search";
import Section1 from "./BodySections/Section1";
import Section2 from "./BodySections/Section2";
import Section3 from "./BodySections/Section3";
import Section4 from "./BodySections/Section4";
import Section5 from "./BodySections/Section5";

const backgroundImage =
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80";

export default function Body() {
  return (
    <>
      {/* Hero content */}
      <HeroLayout
        sxBackground={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "#7fc7d9",
          backgroundPosition: "center",
        }}
        mt={5}
      >
        <Typography
          mt={12}
          color="inherit"
          align="center"
          variant="h2"
          marked="center"
          letterSpacing="-2.0px"
        >
          Choose BlueBirds for Faster delivery.
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h6"
          letterSpacing="-0.8px"
          sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
        >
          Your package's safety is everything.
        </Typography>
        <Button
          color="primary"
          variant="contained"
          size="large"
          component="a"
          href="/"
          sx={{ minWidth: 200 }}
        >
          More Info
        </Button>
        <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
          Discover the experience
        </Typography>
      </HeroLayout>

      {/* Track package section */}
      <Container
        sx={{
          mt: 4,
          mb: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          display="flex"
          alignContent="center"
          flexDirection="column"
          flexWrap="wrap"
        >
          <TextField
            m={15}
            bgcolor="black"
            id="outlined-basic"
            label="Track your package"
            variant="outlined"
            sx={{ width: { sx: "40ch", sm: "60ch", lg: "70ch" } }}
            helperText="Please enter your consignment number"
            maxRows={1}
            InputProps={{
              endAdornment: (
                <IconButton
                  component="a"
                  href="/"
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                  position="end"
                  bgcolor="black"
                >
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <SearchIcon bgcolor="black" />
                </IconButton>
              ),
            }}
          />
        </Box>
      </Container>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
}
