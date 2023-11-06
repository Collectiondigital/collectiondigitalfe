import { useState, useEffect, createContext } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
    }

    setLoading(false); // Set loading to false once the token retrieval is complete
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

  const decoded = token && jwtDecode(token);

  console.log("IN CONTEXT DECODED", decoded);

  return (
    <AuthContext.Provider value={{ token, login, logout, decoded }}>
      {loading ? (
        // Render a loading state or spinner while waiting for the token
        <div>Loading...</div>
      ) : (
        // Render the child components once the token is retrieved
        props.children
      )}
    </AuthContext.Provider>
  );
}
