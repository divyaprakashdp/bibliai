import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function OverviewTab(props) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="primary"
          >
            <Tab label="Summary" value="1" />
            <Tab label="Preview" value="2" />
            <Tab label="Review" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">{props.displayData.summary}</TabPanel>
        <TabPanel value="2">{props.displayData.preview}</TabPanel>
        <TabPanel value="3">{props.displayData.review}</TabPanel>
      </TabContext>
    </Box>
  );
}
