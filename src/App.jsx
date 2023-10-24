import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./context/authContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import IndItemPage from "./components/IndItemPage";
import Home from "./components/Home";
import Searchbar from "./components/SearchBar";


function App() {
  const { token } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Searchbar />}/>

        <Route path="/" element={token ? <Home /> : <Navigate to="/" />} />
        <Route
          path="/user/login"
          element={!token ? <Login /> : <Navigate to="/search" />}
        />
        <Route
          path="/user/signup"
          element={!token ? <Signup /> : <Navigate to="/" />}
        />
        <Route path="/IndItemPage" element={<IndItemPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
