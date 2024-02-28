import OverviewTab from "./OverviewTab";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BuyOptions from "./BuyOptions";
import BookCards from "./BookCards";

import { useEffect } from "react";

const bookPreview = `T

1

The Surprising Power of Atomic Habits
HE FATE OF British Cycling changed one day in 2003. The
organization, which was the governing body for professional
cycling in Great Britain, had recently hired Dave Brailsford as its new
performance director. At the time, professional cyclists in Great Britain
had endured nearly one hundred years of mediocrity. Since 1908,
British riders had won just a single gold medal at the Olympic Games,
and they had fared even worse in cycling’s biggest race, the Tour de
France. In 110 years, no British cyclist had ever won the event.
In fact, the performance of British riders had been so
underwhelming that one of the top bike manufacturers in Europe
refused to sell bikes to the team because they were afraid that it would
hurt sales if other professionals saw the Brits using their gear.
Brailsford had been hired to put British Cycling on a new trajectory.
What made him different from previous coaches was his relentless
commitment to a strategy that he referred to as “the aggregation of
marginal gains,” which was the philosophy of searching for a tiny
margin of improvement in everything you do. Brailsford said, “The
whole principle came from the idea that if you broke down everything
you could think of that goes into riding a bike, and then improve it by 1
percent, you will get a significant increase when you put them all
together.”
Brailsford and his coaches began by making small adjustments you
might expect from a professional cycling team. They redesigned the
bike seats to make them more comfortable and rubbed alcohol on the
tires for a better grip. They asked riders to wear electrically heated
overshorts to maintain ideal muscle temperature while riding and used

biofeedback sensors to monitor how each athlete responded to a
particular workout. The team tested various fabrics in a wind tunnel
and had their outdoor riders switch to indoor racing suits, which
proved to be lighter and more aerodynamic.`;

const bookReview = `It seems there is no review available for this book as of now. Maybe you will be able to add a review once you read the book.`;

export default function BookOverview() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [bookData, setBookData] = useState();

  const { book_id } = useParams();

  useEffect(() => {
    console.log(`getting book for id - ${book_id}`);
    const savedBookData = sessionStorage.getItem("Book");
    console.log(
      "savedData",
      JSON.parse(savedBookData).find(
        (item) => item?.id === JSON.stringify(book_id)
      )
    );
    setBookData(JSON.parse(savedBookData).find((item) => item.id === book_id));
  }, []);

  useEffect(() => {
    console.log(`Books | ${bookData?.volumeInfo.title}`);
    document.title = `Books | ${bookData?.volumeInfo.title}`;
  }, [bookData]);

  const handleBuyOptions = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className="flex sm:flex-row flex-col sm:items-center sm:text-center md:items-start md:text-left bg-[#EBE9DD] md:min-h-screen text-gray-700">
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
        <div className="grid grid-cols-3 divide-x-2 border-lime-700 border-2 rounded-xl p-2 w-[50%] text-center justify-center">
          <div>Summary</div>
          <div>Review</div>
          <div>Analysis</div>
        </div>
        <div className="flex border-lime-700 border-2 rounded-xl gap-4 p-2 w-[50%] text-center justify-center">
          <button>Buy This Book</button>
        </div>
      </div>
      {/* description */}

      {/* details part */}
      <div className="md:w-2/3 mt-12">
        {/* heading */}
        <div>
          <p className="text-4xl text-inherit font-heading">{`${
            bookData?.volumeInfo?.title
          } ${
            bookData?.volumeInfo?.subtitle ? bookData?.volumeInfo?.subtitle : ""
          }`}</p>
          <p className="text-xl font-light">
            {bookData?.volumeInfo?.authors?.join(", ")}
          </p>
        </div>
        {/* review */}
        <div></div>
        {/* description */}
        <div className="pt-4 pb-4">
          {/* <p className="font-bold">Description: </p> */}
          <p>{bookData?.volumeInfo?.description}</p>
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
