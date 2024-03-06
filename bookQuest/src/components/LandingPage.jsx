import React from "react";
import { FaGoogle } from "react-icons/fa";
import booksLanding from "../assets/booksLanding.jpg";

const LandingPage = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-[url('${booksLanding}')]`}
    >
      {/* <header className="py-6 w-full bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Welcome to BookQuest!</h1>
          <nav>
            <ul className="flex">
              <li className="mr-4">
                <a href="#search" className="text-gray-700 hover:text-gray-900">
                  Search
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="#recommendations"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Recommendations
                </a>
              </li>
              <li className="mr-4">
                <a href="#about" className="text-gray-700 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            <FaGoogle className="inline-block mr-2" />
            Login
          </button>
        </div>
      </header> */}
      <section className={`py-12 text-center `}>
        <h2 className="text-4xl font-bold mb-4">
          Discover a World of Books with Ease
        </h2>
        <p className="text-lg text-gray-700">
          Welcome to BookQuest, your gateway to a vast universe of literature!
          Whether you're seeking your next page-turner or delving into the
          depths of literary analysis, we've got you covered.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Unlock a multitude of features designed to enhance your reading
          experience:
        </p>
        <ul className="text-left mt-4">
          <li className="mb-2">Search and Recommendation</li>
          <li className="mb-2">Comprehensive Insights</li>
          <li className="mb-2">Preview and Purchase</li>
          <li>Genre-Specific Recommendations</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          To embark on your bookish adventure, simply log in using your Google
          account and unlock the full potential of BookQuest. Your next literary
          escapade awaits!
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded mt-8 hover:bg-blue-600">
          Log in Now
        </button>
      </section>
      <footer className="bg-gray-900 text-white py-6 w-full">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; 2024 BookQuest. All rights reserved.</p>
          <nav className="mt-4">
            <ul className="flex justify-center">
              <li className="mr-4">
                <a href="#about" className="text-white hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li className="mr-4">
                <a href="#contact" className="text-white hover:text-gray-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-white hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
