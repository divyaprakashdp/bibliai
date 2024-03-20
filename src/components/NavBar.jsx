import { Link } from "react-router-dom";
import appIcon from "../assets/bookQuest_logo.svg";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import { FaBook, FaBookOpen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { user, logout } = UserAuth();
  const [navBtn, setNavBtn] = useState(true);
  const navigate = useNavigate();

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
    <Link
      className={
        user
          ? `hidden`
          : `px-2 py-1 bg-blue-500 text-white rounded  hover:bg-blue-600`
      }
      to="/signIn"
    >
      Login
    </Link>
  );

  const handleLogout = async () => {
    try {
      await logout();
      await navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="h-12 items-center justify-center  bg-gradient-to-b from-slate-500 via-slate-700 to-slate-500">
      <div className="max-w-7xl mx-auto sm:px-6 ">
        <div className="flex items-center justify-center">
          <div className="flex-shrink-0">
            <a href="/">
              <img className="h-12 w-12" src={appIcon} alt="logo" />
            </a>
          </div>
          <div className="flex-1 flex justify-left">
            <a
              href={user ? "/home" : "/"}
              className="flex items-center text-white text-2xl font-logo"
            >
              BIBLIAI
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
              className="flex flex-col justify-center items-center absolute top-12 right-0 w-18 rounded-bl-lg bg-gradient-to-b from-[#112009] to-gray-800 text-white  z-10"
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
