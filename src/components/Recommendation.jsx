import { useState, useEffect } from "react";
import { Paper, Button, Box, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import reccomendationList from "../../src/assets/recommendationList.json";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import Modal from "./Modal";
import { generatedRecommendedBooks } from "../utils/api_calls/gptCalls";
import ReactMarkdown from "react-markdown";

const Section = ({ category, values }) => {
  const [topic, setTopic] = useState();
  const [openRecommendationModal, setOpenRecommendationModal] = useState(false);
  const [recommendeBookList, setRecommendedBookList] = useState();

  return (
    <div>
      <Typography variant="h5" color={"#483223"}>
        {category}
      </Typography>

      {values.map((value) =>
        value.map((buttonLabel, k) => (
          <Button
            key={k}
            sx={{ mr: 2, mt: 1, background: "#bfe0c5", color: "#3a2d28" }}
            disabled={false}
            size="medium"
            variant="outlined"
            onClick={async () => {
              setTopic(buttonLabel);
              setRecommendedBookList(await generatedRecommendedBooks(topic));
              setOpenRecommendationModal(true);
            }}
          >
            {buttonLabel}
          </Button>
        ))
      )}
      {/* todo fix modal ui issue */}
      <Modal
        open={openRecommendationModal}
        onClose={() => setOpenRecommendationModal(false)}
      >
        {recommendeBookList ? (
          <ReactMarkdown>{recommendeBookList}</ReactMarkdown>
        ) : (
          "loading..."
        )}
      </Modal>
      <br />
    </div>
  );
};

const TabbedView = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    document.title = "BIBLIAI | RECOMMENDATION";
  }, []);

  return (
    <Box>
      <Paper>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {Object.keys(data).map((tabLabel, index) => (
            <Tab key={index} label={tabLabel} />
          ))}
        </Tabs>
      </Paper>

      {Object.values(data).map((sections, tabIndex) => (
        <Box
          key={tabIndex}
          sx={{ display: selectedTab === tabIndex ? "block" : "none" }}
          ml={10}
          mr={10}
          mt={2}
        >
          {sections.map((section, index) => (
            <Section
              key={index}
              category={Object.keys(section)[0]}
              values={Object.values(section)}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};

const Recommendation = () => <TabbedView data={reccomendationList} />;

export default Recommendation;

Section.propTypes = {
  category: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
};

TabbedView.propTypes = {
  data: PropTypes.object.isRequired,
};
