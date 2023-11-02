import { NavLink } from "react-router-dom";
import "./CSS/Collection.css";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useEffect } from "react";

export default function Collection() {
  const [selectedColl, setSelectedColl] = useState("");
  const { token } = useContext(AuthContext);

  const getColls = async () => {
    const res = await fetch("http://localhost:7070/collection/name", {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setSelectedColl(data);
  };

  useEffect(() => {
    getColls();
  }, []);

  console.log("selected coll", selectedColl);
  return (
    <>
      {/* header and buttons */}
      <div className="collection_header">
        <div className="heading">
          <h1>Welcome to your collections</h1>
          <div className="collection_buttons">
            <button className="button-1">+ Collection</button>
          </div>
        </div>
      </div>
      {/* all collections */}
      <div className="collection">
        <div className="card_container">
          <div className="item_card">
            <div className="img_card">
              <NavLink to="/CollectionItem">
                <img
                  className="result_img"
                  src="https://placehold.co/250x250?text=No+image"
                  alt="Holder"
                />
              </NavLink>
            </div>
            <div className="text_card">

              <h3>name:</h3>
              <p>description:</p>
              <p>owner:</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
