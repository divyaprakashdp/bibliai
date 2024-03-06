// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/components/HomePage.jsx";
// import ErrorPage from "./components/ErrorPage.jsx";
import BookOverview from "../src/components/BookOverview.jsx";
import Layout from "../src/components/Layout.jsx";
import Recommendation from "../src/components/Recommendation.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import SignIn from "../src/components/SignIn.jsx";
import LandingPage from "../src/components/LandingPage.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "overview/:book_Name",
//     element: <BookOverview />,
//     errorElement: <ErrorPage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/:book_id" element={<BookOverview />} />
          <Route path="/recommendation" element={<Recommendation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthContextProvider>
);
