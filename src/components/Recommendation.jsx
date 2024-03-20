import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import { generatedRecommendedBooks } from "../utils/api_calls/gptCalls";
import ReactMarkdown from "react-markdown";
import data from "../../src/assets/recommendationList.json";

const Section = ({ category, values }) => {
  // const [topic, setTopic] = useState();
  const [openRecommendationModal, setOpenRecommendationModal] = useState(false);
  const [recommendedBookList, setRecommendedBookList] = useState();

  async function handleButtonClick(buttonLabel) {
    // setTopic(buttonLabel);
    setOpenRecommendationModal(!openRecommendationModal);

    setRecommendedBookList(await generatedRecommendedBooks(buttonLabel));
  }

  return (
    <div>
      <h5 className="text-base text-gray-800">{category}</h5>

      {values.map((value, index) => (
        <div key={index}>
          {value.map((buttonLabel, k) => (
            <button
              key={k}
              className="mr-2 mt-1 bg-green-200 text-gray-800 border border-green-400 rounded px-3 py-1"
              onClick={async () => handleButtonClick(buttonLabel)}
            >
              {buttonLabel}
            </button>
          ))}
        </div>
      ))}

      <Modal
        open={openRecommendationModal}
        onClose={() => setOpenRecommendationModal(!openRecommendationModal)}
      >
        {recommendedBookList ? (
          <ReactMarkdown>{recommendedBookList}</ReactMarkdown>
        ) : (
          <p>loading...</p>
        )}
      </Modal>
    </div>
  );
};

const TabbedView = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    document.title = "BIBLIAI | RECOMMENDATION";
  }, []);

  return (
    <div>
      <div className="bg-white">
        <div className="flex">
          {Object.keys(data).map((tabLabel, index) => (
            <button
              key={index}
              className={`${
                selectedTab === index
                  ? "bg-blue-500 text-white"
                  : "text-blue-500"
              } flex-1 py-2 px-4 border-b-2 border-transparent focus:outline-none`}
              onClick={() => handleTabChange(index)}
            >
              {tabLabel}
            </button>
          ))}
        </div>
      </div>

      {Object.values(data).map((sections, tabIndex) => (
        <div
          key={tabIndex}
          style={{ display: selectedTab === tabIndex ? "block" : "none" }}
          className="ml-10 mr-10 mt-2"
        >
          {sections.map((section, index) => (
            <Section
              key={index}
              category={Object.keys(section)[0]}
              values={Object.values(section)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const Recommendation = () => <TabbedView data={data} />;

export default Recommendation;

Section.propTypes = {
  category: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
};

TabbedView.propTypes = {
  data: PropTypes.object.isRequired,
};
