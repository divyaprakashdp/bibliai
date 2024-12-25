import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import { generatedRecommendedBooks } from "../utils/api_calls/gptCalls";
import ReactMarkdown from "react-markdown";
import data from "../../src/assets/recommendationList.json";
import Loader from "./Loader";

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
    <div className="mb-8">
      <p className="text-xl uppercase text-gray-800">{category}</p>

      {values.map((value, index) => (
        <div key={index}>
          {value.map((buttonLabel, k) => (
            <button
              key={k}
              className="mr-2 mt-1 bg-[#264E70] text-white shadow-lg hover:scale-95 shadow-black rounded px-3 py-1"
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
            <Loader />
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
      <div className="">
        <div className="flex">
          {Object.keys(data).map((tabLabel, index) => (
            <button
              key={index}
              className={`${
                selectedTab === index
                ? " bg-[#264E70] text-white underline shadow-lg shadow-black"
                : "bg-[#68A492] text-[#264E70]"
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
          className="h-screen bg-[#F9C5D1] px-6 py-4"
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
