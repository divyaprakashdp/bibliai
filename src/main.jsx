import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/components/HomePage.jsx";
import BookOverview from "../src/components/BookOverview.jsx";
import Layout from "../src/components/Layout.jsx";
import Recommendation from "../src/components/Recommendation.jsx";
import LandingPage from "../src/components/LandingPage.jsx";
import Challenges from "./components/Challenges.jsx";
import TermsAndPolicy from "./components/TermsAndPolicy.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/books/:book_id" element={<BookOverview />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/terms" element={<TermsAndPolicy />} />
      </Route>
    </Routes>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      theme="dark"
    />
  </BrowserRouter>
);
