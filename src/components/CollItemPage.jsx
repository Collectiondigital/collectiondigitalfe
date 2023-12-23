import { useParams, useNavigate } from "react-router-dom";
import { CollectionsContext } from "../context/collectionsContext";
import { useContext } from "react";
import "./CSS/CollItemPage.css";

export default function CollItemPage() {
  const { collections } = useContext(CollectionsContext);
  console.log("collections inside item page", collections);
  const { id } = useParams();

  let foundItem = null;

  if (collections) {
    for (const collection of collections) {
      if (collection.items && Array.isArray(collection.items)) {
        for (const item of collection.items) {
          if (item._id === id) {
            foundItem = item;
            break;
          }
        }
      }

      if (foundItem) {
        break;
      }
    }
  }

  const navigate = useNavigate();

  console.log(foundItem);

  return (
    <>
      <div className="collitempage_container">
        <div>
          <span onClick={() => navigate(-1)}>
            <img className="arrow-image" src="/arrow-back.png" alt="back" />
          </span>
        </div>
        <div className="card_image">
          <img
            src={foundItem.cloudinaryUrl}
            alt="image album cover" />
        </div>
        <div className="item_card_container">
          <div className="card">
            <ul className="card_text">
              <li><h3 className="item_name"> Title/Object Type :</h3>{foundItem.object_type}</li>
              <li><h3 className="card_description">Artist/Maker : </h3>{foundItem.artist_maker}</li>
              <li><h3 className="card_description">Origin : </h3>{foundItem.origin}</li>
              <li><h3 className="card_description">Date : </h3>{foundItem.primary_date}</li>
            </ul>
          </div>

          <div className="actions_container">
            <button className="button-2" type="submit">Edit Item</button>
            <button className="button-2" type="submit">Print</button>
            <button className="button-2" type="submit">Preview</button>
            <hr />
            <li>Share on your social media</li>

            <div className="social_media_icons">
              <div className="social1">
                <a href="/Facebook">
                  <img className="social-containerf" src="/Facebook.svg" />
                </a>
              </div>
              <div className="social1">
                <a href="/Twitter">
                  <img className="social-containert" src="/Twitter.svg" />
                </a>
              </div>
              <div className="social1">
                <a href="/Instagram">
                  <img className="social-containeri" src="/Instagram.svg" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
