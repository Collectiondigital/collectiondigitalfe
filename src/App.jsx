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
import { useState } from "react";
import Error from "./components/Error";

function App() {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState([]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search"
          element={<Searchbar data={data} setData={setData} />}
        />

        <Route path="/" element={token ? <Home /> : <Navigate to="/" />} />
        <Route
          path="/user/login"
          element={!token ? <Login /> : <Navigate to="/search" />}
        />
        <Route
          path="/user/signup"
          element={!token ? <Signup /> : <Navigate to="/" />}
        />
        {data.length > 0 && (
          <Route
            path="/itempage/:systemNumber"
            element={!token ? <ItemPage data={data} /> : <Navigate to="/" />}
          />
        )}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
