import { useContext, createContext, useEffect, useState } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
const client_id = import.meta.env.VITE_CLIENT_ID;

import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <GoogleOAuthProvider clientId={client_id}  >
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>

    </GoogleOAuthProvider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};