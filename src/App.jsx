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
import IndItemPage from "./components/IndItemPage";
import SearchResults from "./components/SearchResults";

function App() {
  const { token } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={token ? <Home /> : <Navigate to="/" />} />
        <Route
          path="/user/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/user/signup"
          element={!token ? <Signup /> : <Navigate to="/" />}
        />
        <Route path="/IndItemPage" element={<IndItemPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <br />
      <SearchBar />
      {/* <SearchResults /> */}
      <Footer />
    </>
  );
}

export default App;
