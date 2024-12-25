import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import appIcon from "../assets/bookQuest_logo.svg";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { FaBook, FaBookOpen } from "react-icons/fa6";
import { LiaRandomSolid } from "react-icons/lia";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

export default function NavBar() {
  const { user, login, logout } = useAuth();
  const [navBtn, setNavBtn] = useState(true);
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    const userData = jwtDecode(credentialResponse.credential);
    login(userData);
    toast.success(`Logged in as ${userData.name}`);
  };

  const handleLogout = () => {
    googleLogout();
    logout();

    navigate("/");
    toast.success("Logged out succeessfully!");
  };

  const handleLogin = () => {
    loginNotification();
  };

  const NavButtonForUSer = () => {
    const navBarData = [
      {
        name: "Search",
        link: "/search",
        func: "",
      },
      {
        name: "Recommendation",
        link: "/recommendation",
        func: "",
      },
      {
        name: "Challenges",
        link: "/challenges",
        func: "",
      },
      {
        name: user ? "Logout" : "Login",
        link: "",
        func: user ? handleLogout : handleLogin,
      },
    ];
    return (
      <>
        {navBarData.map((menu) => (
          <button
            key={menu.name}
            className="group relative inline-block overflow-hidden md:border-[1px] border-[#2D325B] p-1 md:font-medium font-bold font-[Markpro] text-4xl md:text-sm text-[#2D325B] "
          >
            <span className="absolute mb-0 flex h-full left-0 top-0 w-0 hover:origin-top transform bg-[#5D325B]  opacity-90 transition-all duration-500 ease-out group-hover:w-full"></span>
            {menu.link ? (
              <Link to={menu.link} className="relative group-hover:text-white">
                {menu.name}
              </Link>
            ) : (
              <button
                onClick={menu.func}
                className="relative group-hover:text-white"
              >
                {menu.name}
              </button>
            )}
          </button>
        ))}
      </>
    );
  };

  const GoogleLoginButton = () => {
    return (
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => console.log("Login Failed")}
      />
    );
  };

  const loginNotification = () =>
    toast(<GoogleLoginButton />, {
      position: "top-left",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <header className="h-18 flex items-center justify-between bg-[#F9C5D1] px-6 py-2">
      {/* Left Section */}
      <div className="hidden md:flex items-center gap-4">
        <NavButtonForUSer />
      </div>

      {/* Center Section */}
      <div className="flex items-left">
        <Link to="/">
          <img className="h-12 w-12" src={appIcon} alt="logo" />
        </Link>
        <div className="hidden md:flex items-center ml-2">
          <Link
            to={"/"}
            className="text-[#2D325B] text-2xl font-logo"
          >
            bibliai
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center">
        <div className="hidden md:block" title="Random Book">
          <LiaRandomSolid size={30} />
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden" onClick={() => setNavBtn(!navBtn)}>
          {navBtn ? <FaBook size={30} /> : <FaBookOpen size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {!navBtn && (
        <div
          className="absolute top-12 right-0 flex flex-col items-center w-18 rounded-bl-lg text-white z-10 bg-[#F9C5D1] w-full h-screen"
          onClick={() => setNavBtn(!navBtn)}
        >
          <NavButtonForUSer />
        </div>
      )}
    </header>
  );
}
