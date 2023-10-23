import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./CSS/Searchbar.css";

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

  console.log("QUERY: ", query);

  return (
    <>
      <div className="searchbar_container">
        <label style={{ margin: "0.4em" }}>
          <FaSearch />
        </label>
        <input
          className="searchbar"
          placeholder="Type here to search ..."
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="search_results_container">
        <h1>Search Results : </h1>
      </div>

      <div className="card_container">
        {data
          ? data.map((record) => (
            <div className="item_card" key={record.id}>
              <div className="img_card">
                <img
                  className="result_img"
                  src={`${record._images._iiif_image_base_url}/full/250,/0/default.jpg`} />
              </div>

              <div className="text_card">
                <h3>{record.objectType ? record.objectType : "Object type unknown"}</h3>
                <p>{record.name ? record.name : "Maker unknown"}</p>
                <p>{record._primaryDate ? record._primaryDate : "Date unknown"}</p>
              </div>
            </div>
          ))
          : null}
      </div>
    </>
  );
}
