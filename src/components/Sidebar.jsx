import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import InboxIcon from "@mui/icons-material/Inbox";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import PaymentIcon from "@mui/icons-material/Payment";
import BarChartIcon from "@mui/icons-material/BarChart";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SecurityIcon from "@mui/icons-material/Security";
import { Badge, styled } from "@mui/material";
import BalanceIcon from "@mui/icons-material/Balance";
import Orders from "./Orders";
import Inbox from "./Inbox";

const CustomTabs = styled(Tabs)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    orientation: "horizontal",
    display: "flex",
  },
}));

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

export default function Sidebar() {
  const [value, setValue] = React.useState(0);

  const dispatch = useDispatch();

  const { isAuthenticated, user, isLoading, error } = useSelector(
    (state) => state.user
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const shipperTabs = (
    <>
      <CustomTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Orders" {...a11yProps(0)} icon={<LocalShippingIcon />} />
        <Tab label="Inbox" {...a11yProps(1)} icon={<InboxIcon />} />
        <Tab label="Transactions" {...a11yProps(2)} icon={<BarChartIcon />} />
        <Tab label="Breakdown" {...a11yProps(3)} icon={<BalanceIcon />} />
        <Tab label="Dispatchers" {...a11yProps(4)} icon={<FireTruckIcon />} />
        <Tab label="Payment options" {...a11yProps(5)} icon={<PaymentIcon />} />
        <Tab
          label="Login & Security"
          {...a11yProps(6)}
          icon={<PaymentIcon />}
        />
        <Tab
          label="Settings"
          {...a11yProps(7)}
          icon={<SettingsApplicationsIcon />}
        />
      </CustomTabs>
      <TabPanel value={value} index={0}>
        <Orders />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Your Messages
      </TabPanel>
      <TabPanel value={value} index={2}>
        Transaction Details
      </TabPanel>
      <TabPanel value={value} index={3}>
        Cost Breakdown
      </TabPanel>
      <TabPanel value={value} index={4}>
        Dispatchers of your branch
      </TabPanel>
      <TabPanel value={value} index={5}>
        Edit or add payment options
      </TabPanel>
      <TabPanel value={value} index={6}>
        Edit login, name, mobile number and add Two-Factor Authentication
        support
      </TabPanel>
      <TabPanel value={value} index={7}>
        Settings
      </TabPanel>
    </>
  );

  const customerTabs = (
    <>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          display: "flex",
          borderRight: 2,
          borderColor: "divider",
        }}
      >
        <Tab
          label="Your Orders"
          {...a11yProps(0)}
          icon={<LocalShippingIcon />}
          // onClick={() => console.log("first")}
        />

        <Tab
          label="Inbox"
          {...a11yProps(1)}
          icon={
            <Badge badgeContent={2} color="error">
              <InboxIcon />
            </Badge>
          }
        />
        <Tab label="Addresses" {...a11yProps(2)} icon={<ContactMailIcon />} />
        <Tab
          label="Login & Security"
          {...a11yProps(3)}
          icon={<SecurityIcon />}
        />
        <Tab label="Payment options" {...a11yProps(4)} icon={<PaymentIcon />} />
        <Tab
          label="Settings"
          {...a11yProps(5)}
          icon={<SettingsApplicationsIcon />}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Orders />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Inbox />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Your Address
      </TabPanel>
      <TabPanel value={value} index={3}>
        Edit login, name, mobile number and add Two-Factor Authentication
        support
      </TabPanel>
      <TabPanel value={value} index={4}>
        Edit or add payment options
      </TabPanel>
      <TabPanel value={value} index={5}>
        Settings
      </TabPanel>
    </>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        height: "350px",
      }}
    >
      {user.type === "SHIPPER" ? shipperTabs : customerTabs}
    </Box>
  );
}
