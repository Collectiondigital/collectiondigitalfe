import { useState, useEffect } from 'react';
import "./CSS/Search.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";

function CardComponent({ record, favorites, setFavorites }) {
  const addToFavorites = async () => {
    let foundCard = await favorites.find(favorite => favorite === record.systemNumber);

    if (!foundCard) setFavorites([...favorites, record.systemNumber]);
  };

  const removeFavorite = async () => {
    let foundCard = await favorites.find(id => id === record.systemNumber);
    if (foundCard) setFavorites(favorites.filter(id => id !== record.systemNumber));
  };

  /* console.log(favorites); */
  
  return (
    <div className="item_card" >
      <div className="img_card">
        <NavLink to={`/itempage/${record.systemNumber}`}>
          <img
            className="result_img"
            src={`${record._images._iiif_image_base_url}/full/250,/0/default.jpg`}
          />
        </NavLink>
      </div>

      <div className="text_card">
        <h3>
          {record.objectType ? record.objectType : "Object type unknown"}
        </h3>
        <p>{record.name ? record.name : "Maker unknown"}</p>
        <p>
          {record._primaryDate ? record._primaryDate : "Date unknown"}
        </p>
        {
          favorites.includes(record.systemNumber) ?
          <FaHeart className="favorite" onClick={removeFavorite} /> :
          <FaHeart className="white" onClick={addToFavorites} />
        }
      </div>

    </div>
  );
}

export default CardComponent;