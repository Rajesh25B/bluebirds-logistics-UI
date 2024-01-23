import React, { useState } from "react";
import {
  Box,
  createTheme,
  ThemeProvider,
  Tab,
  Tabs,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import PropTypes from "prop-types";

const theme = createTheme({
  palette: {
    primary: {
      light: "#e91e62",
      main: "#e91e62",
      dark: "#b00039",
      contrastText: "#fff",
    },
    secondary: {
      light: "#4d6a78",
      main: "#223f4c",
      dark: "#001924",
      contrastText: "#fff",
    },
  },
});

function CustomCard({ backgroundCardImg, content1, content2 }) {
  return (
    <Card
      sx={{
        backgroundImage: `url(https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1254&q=80)`,
        backgroundColor: "yellow",
        display: "flex",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography fontWeight="600" fontSize="1em" letterSpacing="-1px">
            {content1}
          </Typography>
        </CardContent>

        <hr width="100%" />
        <CardContent>
          <Typography fontWeight="600" fontSize="1em" letterSpacing="-1px">
            {content2}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Section5() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography
          variant="h5"
          component="div"
          letterSpacing="-1.25px"
          fontWeight="500"
          fontSize="2em"
          ml={3}
        >
          Our Current Locations
        </Typography>
      </Box>
      <Box width="100vw">
        <Box
          // ml={15}
          sx={{
            bgcolor: "background.paper",
            display: "flex",
            justifyContent: "flex-start",
            height: 250,
            marginLeft: { xs: "40px", sm: "80px", lg: "100px", xl: "150px" },
            marginBottom: { xs: "110px", sm: "80px", lg: "60px" },
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: "divider",
              marginTop: "30px",
              overflow: "revert",
            }}
          >
            <Tab
              label="New Delhi"
              {...a11yProps(0)}
              sx={{
                fontWeight: "600",
                fontSize: "1.25em",
                letterSpacing: "-1px",
              }}
            />
            <Tab
              label="Mumbai"
              {...a11yProps(1)}
              sx={{
                fontWeight: "600",
                fontSize: "1.25em",
                letterSpacing: "-1px",
              }}
            />
            <Tab
              label="HYDERABAD"
              {...a11yProps(2)}
              sx={{
                fontWeight: "600",
                fontSize: "1.25em",
                letterSpacing: "-1px",
              }}
            />
            <Tab
              label="CHENNAI"
              {...a11yProps(3)}
              sx={{
                fontWeight: "600",
                fontSize: "1.25em",
                letterSpacing: "-1px",
              }}
            />
            <Tab
              label="PUNE"
              {...a11yProps(4)}
              sx={{
                fontWeight: "600",
                fontSize: "1.25em",
                letterSpacing: "-1px",
              }}
            />
            <Tab
              label="COMING SOON.."
              {...a11yProps(5)}
              sx={{
                fontWeight: "600",
                fontSize: "1.25em",
                letterSpacing: "-1px",
              }}
            />
          </Tabs>

          <TabPanel value={value} index={0}>
            <CustomCard
              content1="Green Park Extension, New Delhi, Delhi 110016"
              content2="MOHAN SINGH MARKET, D-9, RKPURAM, New Delhi, 110022"
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <CustomCard
              content1="
          Navpada, Vile Parle East, Vile Parle, Mumbai,
                    Maharashtra 400047"
              content2="Vishnu Prasad Society, Mumbai, Maharashtra 400057"
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <CustomCard
              content1="Parvathi Nagar, Madhapur
              Hyderabad, Telangana 500018"
              content2="Phase I, Kukatpally, Hyderabad, Telangana 500085"
            />
          </TabPanel>

          <TabPanel value={value} index={3}>
            <CustomCard
              content1="Paruthippattu, Avadi, Chennai, Tamil Nadu 600071"
              content2="215, Mount Poonamallee Rd, Porur, Chennai, Tamil Nadu 600116"
            />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <CustomCard
              content1="Shop no 90/91 Parmar nagar Phase 5, Pune, Maharashtra 411013"
              content2="AKD PLAZA, JI, Vijay-Mahal Society, Pune, Maharashtra 411037"
            />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <CustomCard content1="Opening more branches soon across INDIA" />
          </TabPanel>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
