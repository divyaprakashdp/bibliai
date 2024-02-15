import { Link } from "react-router-dom";
import appIcon from "../assets/bookQuest_logo.svg";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import { FaBook, FaBookOpen } from "react-icons/fa6";

export default function NavBar() {
  const { user, logout } = UserAuth();
  const [navBtn, setNavBtn] = useState(true);

  //TODO
  const NavButtonForUSer = () => {
    return (
      <>
        <Link to="/recommendation">RECOMMENDATIONS</Link>
        <Link> MY BOOKS</Link>
        <button onClick={handleLogout}>LOGOUT</button>
      </>
    );
  };
  //TODO
  const LoginBtn = () => (
    <Link className={user ? `hidden` : `px-8 py-2`} to="/signIn">
      Login
    </Link>
  );

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="bg-[#112009]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-purple-500 drop-shadow-2xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/">
              <img className="h-12 w-12" src={appIcon} alt="logo" />
            </a>
          </div>
          <div className="flex-1 flex justify-left">
            <a
              href="/"
              className="flex items-center text-white text-4xl font-inconsolata "
            >
              BOOKQUEST
            </a>
          </div>
          <div className="hidden  md:flex items-center text-xl text-white gap-4">
            {user?.displayName ? <NavButtonForUSer /> : <LoginBtn />}
          </div>
          <div className="md:hidden " onClick={() => setNavBtn(!navBtn)}>
            {navBtn ? <FaBook size={30} /> : <FaBookOpen size={30} />}
          </div>
          {!navBtn && (
            <div
              className="flex flex-col justify-center items-center absolute top-16 right-0 w-18 rounded-bl-lg bg-gradient-to-b from-[#112009] to-gray-800 text-white"
              onClick={() => setNavBtn(!navBtn)}
            >
              {user?.displayName ? <NavButtonForUSer /> : <LoginBtn />}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
