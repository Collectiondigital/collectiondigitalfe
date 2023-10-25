import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./CSS/Searchbar.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const API = `https://api.vam.ac.uk/v2/objects/search?q=${query}&page=1&page_size=15`;

  const fetchData = async () => {
    const res = await fetch(API);
    const data = await res.json();
    console.log("DATA: ", data.records);
    setData(data.records);
  };
  
  useEffect(() => {
    fetchData();
  }, [query]);
  const [a, rest] = query;
  console.log("QUERY: ", query);

  return (
    <>
      <Navbar />
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
        <h1>{`Search Results : ${data.length} Items found`} </h1>
      </div>

      <div className="card_container">
        {data
          ? data.map((record) => (
              <div className="item_card" key={record.id}>
                <div className="img_card">
                  <NavLink to="/IndItemPage">
                    <img
                      className="result_img"
                      src={`${record._images._iiif_image_base_url}/full/250,/0/default.jpg`}
                    />
                  </NavLink>
                </div>

                <div className="text_card">
                  <h3>
                    {record.objectType
                      ? record.objectType
                      : "Object type unknown"}
                  </h3>
                  <p>{record.name ? record.name : "Maker unknown"}</p>
                  <p>
                    {record._primaryDate ? record._primaryDate : "Date unknown"}
                  </p>
                </div>
              </div>
            ))
          : null}
      </div>
      <Footer />
    </>
  );
}
