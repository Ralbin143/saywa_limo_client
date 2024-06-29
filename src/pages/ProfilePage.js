import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProfileandRides from "./ProfileandRides";
import ProfileUpdate from "./ProfileUpdate";

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

export default function ProfilePage() {
  const profileIndex = parseInt(sessionStorage.getItem("ordertabindex"));
  const [value, setValue] = React.useState(profileIndex || 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <Box
        className="profileTabsContainer"
        // sx={{
        //   // flexGrow: 1,
        //   bgcolor: "background.paper",
        //   display: "flex",
        //   //   height: 224,
        // }}
      >
        <Tabs
          orientation={window.innerWidth < 700 ? "horizontal" : "vertical"}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Profile Tabs"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab
            label="Profile"
            {...a11yProps(0)}
            style={{ fontSize: "15px", fontWeight: "900" }}
          />
          <Tab
            label="Trips"
            {...a11yProps(1)}
            style={{ fontSize: "15px", fontWeight: "900" }}
          />
        </Tabs>
        <TabPanel value={value} index={0} className="w-100">
          <ProfileUpdate />
        </TabPanel>
        <TabPanel value={value} index={1} className="w-100">
          <ProfileandRides />
        </TabPanel>
      </Box>
    </div>
  );
}
