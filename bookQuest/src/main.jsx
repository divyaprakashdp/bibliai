// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
// import ErrorPage from "./components/ErrorPage.jsx";
import BookOverview from "./components/BookOverview.jsx";
import NavBar from "./components/NavBar.jsx";
import Layout from "./components/Layout.jsx";

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
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/:book_Name" element={<BookOverview />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
