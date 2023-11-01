import { NavLink } from "react-router-dom";
import "./CSS/Collection.css";

export default function Collection() {
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
              <h3>Object Type: Collection Card</h3>
              <p>Name:</p>
              <p>Date:</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
