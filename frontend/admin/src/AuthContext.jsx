import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [islogin, setlogin] = useState(false);
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    setlogin(!!token)
  }, []);
  // login fuctioni
  const login = (token) => {
    setlogin(true);
    sessionStorage.setItem("token", token);
  };
  const logout = () => {
    setlogin(false);
    sessionStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ islogin, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
