import OverviewTab from "./OverviewTab";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BuyOptions from "./BuyOptions";
import BookCards from "./BookCards";
import Modal from "./Modal";
import ReactMarkdown from "react-markdown";

import { useEffect } from "react";
import { generateSummary } from "../utils/api_calls/gptCalls";

const bookReview = `It seems there is no review available for this book as of now. Maybe you will be able to add a review once you read the book.`;

export default function BookOverview() {
  const [openSummary, setOpenSummary] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  const [openAnalysis, setOpenAnalysis] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [bookData, setBookData] = useState();
  const [bookSummary, setBookSummary] = useState();
  const [bookReview, setBookReview] = useState();
  const [bookAnalysis, setBookAnalysis] = useState();

  const { book_id } = useParams();

  useEffect(() => {
    const savedBookData = sessionStorage.getItem("Book");
    setBookData(JSON.parse(savedBookData).find((item) => item.id === book_id));
  }, [book_id]);

  useEffect(() => {
    console.log(`Books | ${bookData?.volumeInfo.title}`);
    document.title = `Books | ${bookData?.volumeInfo.title}`;
  }, [bookData]);

  useEffect(() => {
    (async function () {
      try {
        const summaryText = await generateSummary(
          "summary",
          bookData?.volumeInfo?.title,
          bookData?.volumeInfo?.authors?.join(", ")
        );
        const reviewText = await generateSummary(
          "review",
          bookData?.volumeInfo?.title,
          bookData?.volumeInfo?.authors?.join(", ")
        );
        const analysisText = await generateSummary(
          "analysis",
          bookData?.volumeInfo?.title,
          bookData?.volumeInfo?.authors?.join(", ")
        );
        console.log(summaryText);
        setBookSummary(summaryText);
        setBookReview(reviewText);
        setBookAnalysis(analysisText);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [bookData]);

  return (
    <div className="flex sm:flex-row flex-col min-h-screen sm:items-center sm:text-center md:items-start md:text-left bg-[#EBE9DD] text-gray-700 pb-4">
      {/* bookCover part */}
      <div className="md:w-1/3 flex flex-col gap-8 mt-12 items-center justify-center">
        <div className="relative h-96 w-60 rounded-r-lg overflow-hidden group shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)]">
          <div className="absolute top-0 left-0 w-full h-full transform transition duration-500 ease-in-out group-hover:translate-z-50 group-hover:rotate-y-90 backface-hidden">
            {bookData?.volumeInfo?.imageLinks?.thumbnail ? (
              <img
                src={bookData?.volumeInfo?.imageLinks?.thumbnail}
                alt={bookData?.volumeInfo?.title}
                className="w-full h-full object-cover"
                style={{ perspective: "100px" }}
                loading="eager"
              />
            ) : (
              <div className="flex justify-center items-center h-full text-lime-300 text-xl text-center bg-gradient-to-bl from-orange-500 via-purple-500 to-blue-500">
                {bookData?.volumeInfo?.title}
              </div>
            )}
          </div>
          <div className="absolute top-0 right-0 w-4 h-full transform translate-z-25 rotate-y-90 backface-hidden hover:transform hover:translate-z-25 hover:rotate-y(0) group-hover:translate-z-25 group-hover:rotate-y(0) duration-500 ease-in-out"></div>
        </div>
        <div className="grid grid-cols-3 divide-x-2 divide-black border-lime-700 border-2 rounded-xl p-2 w-[50%] ">
          <button
            className="hover:bg-black/20 p-1"
            onClick={() => setOpenSummary(true)}
            data-te-ripple-init
          >
            Summary
          </button>
          <Modal open={openSummary} onClose={() => setOpenSummary(false)}>
            {bookSummary ? (
              <ReactMarkdown>{bookSummary}</ReactMarkdown>
            ) : (
              "loading..."
            )}
          </Modal>
          <button
            className="hover:bg-black/20 p-1"
            onClick={() => setOpenReview(true)}
          >
            Review
          </button>
          <Modal open={openReview} onClose={() => setOpenReview(false)}>
            {bookReview ? (
              <ReactMarkdown>{bookReview}</ReactMarkdown>
            ) : (
              "loading..."
            )}
          </Modal>
          <button
            className="hover:bg-black/20 p-1"
            onClick={() => setOpenAnalysis(true)}
          >
            Analysis
          </button>
          <Modal open={openAnalysis} onClose={() => setOpenAnalysis(false)}>
            {bookAnalysis ? (
              <ReactMarkdown>{bookAnalysis}</ReactMarkdown>
            ) : (
              "loading..."
            )}
          </Modal>
        </div>
        <div className="flex border-lime-700 border-2 rounded-xl gap-4 p-2 w-[50%] text-center justify-center">
          <button>Buy This Book</button>
        </div>
      </div>

      {/* details part */}
      <div className="md:w-2/3 mt-12">
        {/* heading */}
        <div>
          <p className="text-4xl text-inherit font-heading">{`${
            bookData?.volumeInfo?.title
          } ${
            bookData?.volumeInfo?.subtitle
              ? `: ${bookData?.volumeInfo?.subtitle}`
              : ""
          }`}</p>
          <p className="text-xl font-light">
            {bookData?.volumeInfo?.authors?.join(", ")}
          </p>
        </div>
        {/* review */}
        <div></div>
        {/* description */}
        <div className="py-4 pr-8 text-justify sm:items-center sm:justify-center">
          {/* <p className="font-bold">Description: </p> */}
          <article>{bookData?.volumeInfo?.description}</article>
        </div>
        {/* Genres */}
        <div className="flex flex-row gap-4 items-center hover:cursor-pointer">
          <p className=" text-gray-500">Genres:</p>
          {bookData?.volumeInfo?.categories?.map((category) => (
            <p
              key={category}
              className="inline p-1 bg-gray-400 rounded-lg hover:bg-gray-500"
            >
              {category}
            </p>
          ))}
        </div>
        {/* pages and publisher */}
        <div className="flex flex-row gap-2 text-gray-500 pt-4">
          <p>{`${bookData?.volumeInfo?.pageCount} pages,`}</p>
          <p>{`Published by ${
            bookData?.volumeInfo?.publisher
              ? bookData?.volumeInfo?.publisher
              : "unknown"
          }`}</p>
        </div>
      </div>
    </div>
  );
}
