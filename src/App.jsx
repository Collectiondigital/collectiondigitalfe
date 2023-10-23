import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./context/authContext";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  const { token } = useContext(AuthContext);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route
          path="/"
          element={token ? <Home /> : <Navigate to="/user/login" />}
        />
        <Route
          path="/user/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/user/signup"
          element={!token ? <Signup /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <SearchBar />
      <Footer />
    </>
  );
}

export default App;
