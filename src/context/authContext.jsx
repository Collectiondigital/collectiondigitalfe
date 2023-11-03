import { useState, useEffect, createContext } from "react";
import { jwtDecode } from "jwt-decode";
export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [token, setToken] = useState(null);
  const decoded = token && jwtDecode(token);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    /*  console.log("storedToken", storedToken); */
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };

  console.log("IN CONTEXT DECODED", decoded);

  return (
    <AuthContext.Provider value={{ token, login, logout, decoded }}>
      {props.children}
    </AuthContext.Provider>
  );
}
