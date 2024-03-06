import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PropTypes from "prop-types";
import { Paper, styled, Typography } from "@mui/material";

const PaperPane = styled(Paper)({
  padding: 30,
  height: 480,
  width: "100%",
  textAlign: "left",
  overflowY: "auto",
  background: "#a7aaad",
  color: "1d2327",
});

export default function OverviewTab(props) {
  const { description, summary, review } = props;
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ typography: "body1", width: "90%", color: "#800000" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="primary"
          >
            <Tab label="Description" value="1" />
            <Tab label="Summary" value="2" />
            <Tab label="Review" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <PaperPane>
            <Typography>{description}</Typography>
          </PaperPane>
        </TabPanel>
        <TabPanel value="2">
          <PaperPane>
            <Typography>{summary}</Typography>
          </PaperPane>
        </TabPanel>
        <TabPanel value="3">
          <PaperPane>
            <Typography>{review}</Typography>
          </PaperPane>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

OverviewTab.propTypes = {
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};
