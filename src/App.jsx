import { useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/authContext";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ItemPage from "./components/ItemPage";
import Home from "./components/Home";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Collection from "./components/Collection";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Item from "./components/Item";
import CollItemPage from "./components/CollItemPage";

function App() {
  const { token } = useContext(AuthContext);
  // const [selectedColl, setSelectedColl] = useState(null);

  const [data, setData] = useState([]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/search"
          element={
            token ? (
              <Search data={data} setData={setData} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/collection"
          element={token ? <Collection /> : <Navigate to="/" />}
        />

        <Route
          path="/collection/:id"
          element={token ? <Item /> : <Navigate to="/" />}
        />
        <Route
          path="/item/:id"
          element={token ? <CollItemPage /> : <Navigate to="/" />}
        />

        <Route
          path="/item/:id"
          element={token ? <CollItemPage /> : <Navigate to="/" />}
        />

        <Route
          path="/user/login"
          element={!token ? <Login /> : <Navigate to="/collection" />}
        />

        <Route
          path="/user/signup"
          element={!token ? <Signup /> : <Navigate to="/collection" />}
        />

        {data.length > 0 && (
          <Route
            path="/itempage/:systemNumber"
            element={
              token ? <ItemPage data={data} /> : <Navigate to="/search" />
            }
          />
        )}

        <Route path="/pricing" element={<Pricing />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
