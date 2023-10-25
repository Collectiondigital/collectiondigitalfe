import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./context/authContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ItemPage from "./components/ItemPage";
import Home from "./components/Home";
import Searchbar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const { token } = useContext(AuthContext);
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Searchbar />} />

        <Route path="/" element={token ? <Home /> : <Navigate to="/" />} />
        <Route
          path="/user/login"
          element={!token ? <Login /> : <Navigate to="/search" />}
        />
        <Route
          path="/user/signup"
          element={!token ? <Signup /> : <Navigate to="/" />}
        />
        <Route path="/itempage/:id" element={<ItemPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
