import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/components/HomePage.jsx";
import BookOverview from "../src/components/BookOverview.jsx";
import Layout from "../src/components/Layout.jsx";
import Recommendation from "../src/components/Recommendation.jsx";
import { AuthContextProvider, useAuth } from "./context/AuthContext.jsx";
import GoogleAuthButton from "./components/GoogleAuthButton.jsx";
import LandingPage from "../src/components/LandingPage.jsx";
import Challenges from "./components/Challenges.jsx";
import TermsAndPolicy from "./components/TermsAndPolicy.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export const ProtectedRoutes = ({ children }) => {
  const { user } = useAuth();
  console.log(user)
  useEffect(() => {
    if (!user) {
      toast.error("You must be logged in to access this page");
    }
  }, [user]);

  if (!user) {
    return <GoogleAuthButton />;
  }

  return children;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          } />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signIn" element={<GoogleAuthButton />} />
          <Route path="/books/:book_id" element={<BookOverview />} />
          <Route
            path="/books/:book_id"
            element={
              <ProtectedRoutes>
                <BookOverview />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/recommendation"
            element={
              <ProtectedRoutes>
                <Recommendation />
              </ProtectedRoutes>
            }
          />
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
  </AuthContextProvider>
);
