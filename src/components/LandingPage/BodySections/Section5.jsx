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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
            marginLeft: { xs: "15px", sm: "200px" },
            marginBottom: { xs: "180px", sm: "120px" },
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider", marginTop: "30px" }}
          >
            <Tab
              label="North America"
              {...a11yProps(0)}
              sx={{
                fontWeight: "600",
                fontSize: "1.25em",
                letterSpacing: "-1px",
              }}
            />
            <Tab
              label="Asia"
              {...a11yProps(1)}
              sx={{
                fontWeight: "600",
                fontSize: "1.25em",
                letterSpacing: "-1px",
              }}
            />
            <Tab
              label="EU"
              {...a11yProps(2)}
              sx={{
                fontWeight: "600",
                fontSize: "1.25em",
                letterSpacing: "-1px",
              }}
            />
            <Tab
              label="UK"
              {...a11yProps(3)}
              sx={{
                fontWeight: "600",
                fontSize: "1.25em",
                letterSpacing: "-1px",
              }}
            />
            <Tab
              label="Coming soon.."
              {...a11yProps(4)}
              sx={{
                fontWeight: "600",
                fontSize: "1.25em",
                letterSpacing: "-1px",
              }}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Card sx={{ display: "flex", marginTop: "5px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    New York, USA
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Opening soon on IMPERIAL LAKE DR BRAMPTON, ON L6P 2V3
                  </Typography>
                </CardContent>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Pennstate, USA
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Opening soon on Harrisburg, PA, United States | Closes 5 pm
                    On-site services
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                ></Box>
              </Box>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Card sx={{ display: "flex", marginTop: "5px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Hyderabad, India
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Near Metro station, Jubilee Hills, Hyderabad, Telangana
                  </Typography>
                </CardContent>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Chennai, Tamilnadu, India
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Opening soon in Chennai
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Card sx={{ display: "flex", marginTop: "5px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Collaboration with <b>United Parcel Service</b>
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Germany
                  </Typography>
                </CardContent>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Collabartion with <b>FedEx</b> updates soon..
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  ></Typography>
                </CardContent>
              </Box>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Card sx={{ display: "flex", marginTop: "5px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Opening soon
                  </Typography>
                </CardContent>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Opening soon
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Opening soon in London
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Card sx={{ display: "flex", marginTop: "5px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Coming soon in other areas,
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Until we reach last mile on this planet..
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </TabPanel>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
