import { useEffect, useState } from "react";
import { FaSearch, FaHeart } from "react-icons/fa";
import "./CSS/Search.css";
import "./CSS/Pagination.css";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useJwt } from "react-jwt";
import CardComponent from "./CardComponent";

export default function Search({ data, setData }) {
  const [query, setQuery] = useState("");
  const { token } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  //pagi pagiii
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // nr of items per page

  const API = `https://api.vam.ac.uk/v2/objects/search?q=${query}&page=1&page_size=30`;

  console.log("data length", data.length);

  const goToNextPage = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const fetchData = async () => {
    const res = await fetch(API);
    const responseData = await res.json();
    console.log("DATA: ", responseData.records);
    setData(responseData.records);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  // Calculate itemsToDisplay after fetching the data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = data.slice(startIndex, endIndex);

  const { decodedToken } = useJwt(token);
  console.log("decoded TOKEN", decodedToken);
  console.log(favorites);

  return (
    <>
      {token !== null && (
        <>
          <h1 className="hello">Hello, {decodedToken?.name}!</h1>
        </>
      )}
      <div className="searchbar_container">
        <label
          style={{
            display: "flex",
            margin: "0px",
            padding: "0px",
          }}
        >
          <button
            style={{
              height: "100%",
              width: "100%",
              padding: "15px",
              borderRadius: "0",
              border: "none",
            }}
          >
            <FaSearch />
          </button>
        </label>
        <input
          style={{
            height: "100%",
            width: "100%",
            margin: "0",
            paddingLeft: "15px",
            borderRadius: "0",
            outline: "none",
          }}
          className="searchbar"
          placeholder="Type here to search ..."
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="search_results_container">
        <h1>{`Most Popular : ${data.length} Items found`}</h1>
      </div>

      <div className="card_container">
        {itemsToDisplay.map((record) => (
          <CardComponent
            key={record.systemNumber}
            record={record}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
      </div>
      {data.length === 0 && (
        <h3 style={{ color: "white" }}>No results found for "{query}".</h3>
      )}
      <div className="pagination">
        <button
          className="pagi-button"
          onClick={goToPrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="pagi-button"
          onClick={goToNextPage}
          disabled={itemsToDisplay.length < itemsPerPage}
        >
          Next
        </button>
      </div>
    </>
  );
}
