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
          providing you with the best possible services from Careful Loading And
          Unloading Of The Cargo, Strictly Following The Hours Of Service
          Regulations, Routine Maintenance Of Trucks And Other Vehicles,
          Detailed Recordkeeping Of Vehicle Maintenance As Well As Service
          Records.
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          In the dynamic realm of the logistics industry, where precision and
          reliability are paramount, BlueBirds stands out as a beacon of
          unwavering commitment. With a resolute pledge to excellence, BlueBirds
          has etched its mark as a trailblazer in delivering unparalleled
          logistics solutions. At the heart of our commitment lies a dedication
          to flawless execution and seamless operations. We understand the
          critical role logistics plays in the supply chain, and our promise is
          to provide a 100 percent commitment to ensuring the timely and secure
          transportation of goods.
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          At BlueBirds, trust is not just a byproduct of our operations; a
          conscious choice embedded in our corporate culture. We invest in
          cutting-edge tech and robust security measures to safeguard our
          customers' cargo, instilling confidence in the reliability of our
          logistics solutions. Our dedicated professionals understands that each
          shipment carries not just goods but the trust of our customers. From
          clear communication and real-time tracking to reliable delivery
          timelines, we ensure that our customers are well-informed and
          confident in the reliability of our services.
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
