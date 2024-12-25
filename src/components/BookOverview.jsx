import { useParams } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { useEffect } from "react";
import { generateSummary, getAvgTimeToRead, getMoviesNames } from "../utils/api_calls/gptCalls";
import Loader from "./Loader";

export default function BookOverview() {
  const [openSummary, setOpenSummary] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  const [openAnalysis, setOpenAnalysis] = useState(false);
  const [bookData, setBookData] = useState();
  const [bookSummary, setBookSummary] = useState();
  const [bookReview, setBookReview] = useState();
  const [bookAnalysis, setBookAnalysis] = useState();
  const [loading, setLoading] = useState(false);
  const [avgTimeToRead, setAvgTimeToRead] = useState("")
  const [movieNames, setMovieNames] = useState("")

  const { book_id } = useParams();

  useEffect(() => {
    const savedBookData = sessionStorage.getItem("Book");
    const book = JSON.parse(savedBookData)?.find((item) => item.id === book_id);

    if (book) {
      setBookData(book);
    }
  }, [book_id]);

  useEffect(() => {
    if (bookData?.volumeInfo?.title) {
      const title = bookData.volumeInfo.title;
      getAvgTimeToRead(title).then((time) => setAvgTimeToRead(time));
      getMoviesNames(title).then((names) => setMovieNames(names));
    }
  }, [bookData]);


  useEffect(() => {
    console.log(`Books | ${bookData?.volumeInfo.title}`);
    const title = bookData?.volumeInfo?.title;
    document.title = `Books | ${title}`;

  }, [bookData]);

  const handleSummary = async () => {
    setLoading(true)
    setOpenSummary(true);
    const summaryText = await generateSummary(
      "summary",
      bookData?.volumeInfo?.title,
      bookData?.volumeInfo?.authors?.join(", ")
    );
    console.log("Summary", summaryText);
    setBookSummary(summaryText);
    setLoading(false)
  }

  const handleReview = async () => {
    setLoading(true)
    setOpenReview(true);
    const summaryText = await generateSummary(
      "review",
      bookData?.volumeInfo?.title,
      bookData?.volumeInfo?.authors?.join(", ")
    );
    console.log("Summary for modal \n", summaryText);
    setBookReview(summaryText);
    setLoading(false)
  }

  const handleAnalysis = async () => {
    setLoading(true)
    setOpenAnalysis(true);
    const summaryText = await generateSummary(
      "analysis",
      bookData?.volumeInfo?.title,
      bookData?.volumeInfo?.authors?.join(", ")
    );
    console.log(summaryText);
    setBookAnalysis(summaryText);
    setLoading(false)
  }

  return (
    <div className="flex sm:flex-row flex-col min-h-screen sm:items-center sm:text-center md:items-start md:text-left bg-[#F9C5D1] text-gray-900 pb-4">
      {/* bookCover part */}
      <div className="md:w-1/3 flex flex-col gap-8 mt-12 items-center justify-center ">
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
        <div className="grid grid-cols-3 gap-2 divide-x-2 divide-black border-lime-900 border-2 rounded-xl px-2 py-4 md:w-[50%] font-bold">
          <button
            className="hover:bg-black/20 hover:rounded-l-lg"
            onClick={handleSummary}
          >
            Summary
          </button>
          <Modal open={openSummary} onClose={() => setOpenSummary(false)}>
            {loading ? (
              <Loader />
            ) : (
                <Markdown remarkPlugins={[remarkGfm]} className="markdown markdown-body" >{bookSummary}</Markdown>
            )}
          </Modal>
          <button
            className="hover:bg-black/20"
            onClick={handleReview}
          >
            Review
          </button>
          <Modal open={openReview} onClose={() => setOpenReview(false)}>
            {loading ? (
              <Loader />
            ) : (
                <Markdown remarkPlugins={[remarkGfm]} className="markdown markdown-body" >{bookReview}</Markdown>
            )}
          </Modal>
          <button
            className="hover:bg-black/20 rounded-r-lg"
            onClick={handleAnalysis}
          >
            Analysis
          </button>
          <Modal open={openAnalysis} onClose={() => setOpenAnalysis(false)}>
            {loading ? (
              <Loader />
            ) : (
                <Markdown remarkPlugins={[remarkGfm]} className="markdown markdown-body" >{bookAnalysis}</Markdown>
            )}
          </Modal>
        </div>
        <div className="flex border-lime-700 border-2 rounded-xl gap-4 p-2 w-[50%] text-center justify-center">
          <button>Buy This Book</button>
        </div>
      </div>

      {/* details part */}
      <div className="md:w-2/3 mt-12  text-[#2D325B] text-center md:text-left">
        {/* heading */}
        <div>
          <p className="text-5xl font-bold text-inherit font-heading">{`${
            bookData?.volumeInfo?.title
          } ${
            bookData?.volumeInfo?.subtitle
              ? `: ${bookData?.volumeInfo?.subtitle}`
              : ""
          }`}</p>
          <p className="text-2xl font-light">
            {bookData?.volumeInfo?.authors?.join(", ")}
          </p>
        </div>
        {/* review */}
        <div></div>
        {/* description */}
        <div className="p-4 md:pl-2 md:pr-8 text-justify sm:items-center sm:justify-center font-semibold text-lg text-[#2D325B]">
          <p className="font-medium underline">Overview: </p>
          <article>{bookData?.volumeInfo?.description}</article>
        </div>
        {/* Genres */}
        <div className="flex flex-row gap-4 items-center hover:cursor-pointer">
          <p className=" text-gray-900">Genres:</p>
          {bookData?.volumeInfo?.categories?.map((category) => (
            <p
              key={category}
              className="inline p-1 bg-gray-500 rounded-lg hover:bg-gray-600 text-white"
            >
              {category}
            </p>
          ))}
        </div>
        {/* avg time to read */}
        <div className="flex flex-row gap-4 mt-2 items-center hover:cursor-pointer">
          <p className=" text-gray-900">Avg time to read:</p>

          <p

            className="inline p-1 bg-gray-500 rounded-lg hover:bg-gray-600 text-white"
          >
            {avgTimeToRead ? avgTimeToRead : "NA"}
          </p>
        </div>
        {/* movieNames */}
        <div className="flex flex-row gap-4 mt-2 items-center hover:cursor-pointer">
          <p className=" text-gray-900">Movie Adaptations:</p>

          <p

            className="inline p-1 bg-gray-500 rounded-lg hover:bg-gray-600 text-white"
          >
            {movieNames}
          </p>
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
