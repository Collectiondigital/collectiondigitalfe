import { NavLink } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function CollectItem() {
  // heart: change color onClick
  const [color, setColor] = useState("light");

  const changeColor = () => {
    if (color !== "light") setColor("light");
    else setColor("dark");
  };

  return (
    <>
      {/* Searchbar  */}
      <h1>Hello individual Collection</h1>
      <NavLink to="/ItemPage2">Individual Item</NavLink>
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
          // value={query}
          // onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {/* results  */}
      <div className="search_results_container">
        <h1>Search Results: ... Items Found</h1>
        {/* <h1>{`Search Results: ${data.length} Items found`}</h1> */}
      </div>

      {/* Cards  */}
      <div className="card_container">
        <div className="item_card">
          <div className="img_card">
            <NavLink to="/ItemPage2">
              <img
                className="result_img"
                src="https://placehold.co/250x250?text=No+image"
              />
            </NavLink>
          </div>

          <div className="text_card">
            <h3>Object Type</h3>
            <p>Name:</p>
            <p>Date:</p>
            <p>Origin:</p>
            <p>ID:</p>
            <FaHeart className={color} onClick={changeColor} />
          </div>
        </div>
      </div>
    </>
  );
}
