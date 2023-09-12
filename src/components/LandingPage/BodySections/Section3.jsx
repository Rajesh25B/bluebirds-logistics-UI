import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Tab, Tabs, Typography } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "1em",
              letterSpacing: "-0.8px",
            }}
          >
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Section3() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab
            label="Safety Measures"
            {...a11yProps(0)}
            sx={{
              fontWeight: "600",
              fontSize: "1.25em",
              letterSpacing: "-1px",
            }}
          />
          <Tab
            label="100% Commitment"
            {...a11yProps(1)}
            sx={{
              fontWeight: "600",
              fontSize: "1.25em",
              letterSpacing: "-1px",
            }}
          />
          <Tab
            label="Trust"
            {...a11yProps(2)}
            sx={{
              fontWeight: "600",
              fontSize: "1.25em",
              letterSpacing: "-1px",
            }}
          />
        </Tabs>
      </Box>
      <hr width="60%" mt={12} />
      <Box
        pl={5}
        pr={5}
        pt={1}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <CustomTabPanel value={value} index={0}>
          Our commitment to the safety and secure passage of your package is a
          part of our DNA and we continue to be laser focused on this 24/7. We
          have a team of experienced professionals who are dedicated to
          providing you with the best possible service.
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          We are committed to 100% product delivery. We understand that your
          time and money are important, and we take pride in delivering your
          products on time and in perfect condition. We are always available to
          answer your questions and address your concerns.
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          We take pride in building trust with our customers. We are committed
          to providing you with the best possible service, and we always strive
          to exceed your expectations.
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
