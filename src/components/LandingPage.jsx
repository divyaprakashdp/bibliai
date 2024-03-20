import React from "react";
import { FaGoogle } from "react-icons/fa";
import booksLanding from "../assets/booksLanding_alternate.png";
import { GiBookshelf } from "react-icons/gi";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { GiSpy } from "react-icons/gi";
import { GiMaterialsScience } from "react-icons/gi";
import { BsRobot } from "react-icons/bs";
import { BiAnalyse } from "react-icons/bi";
import { VscOpenPreview } from "react-icons/vsc";
import { CiSquareMore } from "react-icons/ci";

const LandingPage = () => {
  return (
    <div>
      <div className="flex sm:flex-row flex-col min-h-screen items-center px-8 bg-gradient-to-br from-blue-300 via-blue to-blue-600">
        <div className={`flex flex-col px-0`}>
          <section className={`pt-0 text-center `}>
            <h1 className="text-6xl md:text-9xl font-logo mb-4 bg-clip-text text-transparent bg-gradient-to-br from-gray-500 to-black">
              BIBLIAI
            </h1>
            <h2 className="text-4xl md:text-6xlfont-bold mb-4">
              Discover a World of Books with Ease
            </h2>
            <p className="text-xl md:text-2xl text-gray-700">
              Welcome to BIBLIAI, your gateway to a vast universe of literature!
              Whether you're seeking your next page-turner or delving into the
              depths of literary analysis, we've got you covered.
            </p>
          </section>
        </div>
        <div>
          <img
            className="sm:px-6 px-0"
            src={booksLanding}
            alt="books"
            width="1600"
          />
        </div>
      </div>
      <div className="flex flex-col min-h-screen text-center px-8 bg-gradient-to-tr from-blue-300 via-blue to-blue-600">
        <p className="text-2xl font-bold text-gray-900 px-12  ">
          Unlock a multitude of features designed to enhance your reading
          experience:
        </p>

        <ul className="text-center items-center justify-center mt-4 flex sm:flex-row flex-col  gap-4 ">
          <li className="mb-2 border-4 border-red-900 p-4 w-[80%] md:w-[20%] h-52 ">
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg text-red-900">Search a book</p>
              <GiBookshelf size={150} />
            </div>
          </li>
          <li className="mb-2 border-4 border-red-900 p-4 w-[80%] md:w-[20%] h-52">
            <div className="flex flex-col items-center justify-center">
              <span className="text-lg text-red-900">
                Genre-Specific Recommendations
              </span>
              <div className="flex flex-wrap items-center justify-center">
                <MdOutlineSelfImprovement size={70} />
                <GiSpy size={70} />
                <GiMaterialsScience size={60} />
              </div>
            </div>
          </li>
          <li className="mb-2 border-4 border-red-900 p-4 w-[80%] md:w-[20%] h-52">
            <div className="flex flex-col items-center justify-center">
              <span className="text-lg text-red-900">AI generated Summary</span>
              <BsRobot size={130} />
            </div>
          </li>
          <li className="mb-2 border-4 border-red-900 p-4 w-[80%] md:w-[20%] h-52">
            <div className="flex flex-col items-center justify-center">
              <span className="text-lg text-red-900">
                Insights and Analysis
              </span>
              <BiAnalyse size={130} />
            </div>
          </li>
          <li className="mb-2 border-4 border-red-900 p-4 w-[80%] md:w-[20%] h-52">
            <div className="flex flex-col items-center justify-center">
              <span className="text-lg text-red-900">Preview and Purchase</span>
              <VscOpenPreview size={130} />
            </div>
          </li>
          <li className="mb-2 border-4 border-red-900 p-4 w-[80%] md:w-[20%] h-52">
            <div className="flex flex-col items-center justify-center">
              <span className="text-lg text-red-900">And many more</span>
              <CiSquareMore size={150} />
            </div>
          </li>
        </ul>
      </div>
      {/* <div>
        <p className="text-lg text-gray-700 mt-4">
          To embark on your bookish adventure, simply log in using your Google
          account and unlock the full potential of BIBLIAI. Your next literary
          escapade awaits!
        </p>
      </div> */}
    </div>
  );
};

export default LandingPage;
