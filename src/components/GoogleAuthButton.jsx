import React from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "./../context/AuthContext";

const GoogleAuthButton = () => {
  const { user, login, logout } = useAuth();

  const handleLoginSuccess = (credentialResponse) => {
    const userData = jwtDecode(credentialResponse.credential);
    login(userData);
  };

  const handleLogout = () => {
    googleLogout();
    logout();
  };

  return (
    <div className="h-screen items-center justify-center bg-[#F9C5D1] p-40 rounded-md">
      {/* {user ? (
        <div>
          <h3>Welcome, {user.name}</h3>
          <img src={user.picture} alt="profile" />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => console.log("Login Failed")}
        />
      )} */}
      <div className="w-[30%] items-center m-auto">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => console.log("Login Failed")}
        />
      </div>
    </div>
  );
};

export default GoogleAuthButton;
