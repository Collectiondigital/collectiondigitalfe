import "./CSS/ItemPage.css";
import { useParams } from "react-router-dom";

export default function ItemPage({ data }) {
  const { systemNumber } = useParams();
  console.log(systemNumber, data);

  const oneItem = data.find((el) => el.systemNumber === systemNumber);

  console.log(oneItem);

  return (
    <>
      <div className="main_image_container">
        <img
          className="main_image"
          src={`${oneItem._images._iiif_image_base_url}/full/500,/0/default.jpg`}
        />
      </div>

      <div className="item_info_container">
        <div className="object_info_container">
          <ul className="object_info">
            <li><h3>Object Type: </h3>{oneItem.objectType ? oneItem.objectType : "object type unknown"}</li>
            <li><h3>Date: </h3>{oneItem.Date ? oneItem.Date : "date unknown"}</li>
            <li><h3>Artist/Maker: </h3>{oneItem.name ? oneItem.name : "artist/maker unknown"} </li>
            <li><h3>Origin:</h3>{oneItem._primaryPlace ? oneItem._primaryPlace : "location unknown"}</li>
            <li><h3>Accession number:</h3>{oneItem.accessionNumber ? oneItem.accessionNumber : "Accession Number unknown"}</li>
            <li><h3>Display:</h3>{oneItem.onDisplay ? oneItem.onDisplay : "display status unknown"}</li>
          </ul>
        </div>

        <div className="actions_container">
          <ul className="action">
            <li className="action_click">Edit Item Listing</li>
            <hr />
            <li className="action_click">Delete Item Listing</li>
            <hr />
            <li className="action_click">Print Item Listing</li>
            <hr />
            <li className="action_click">Preview Item Listing</li>
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
          </ul>
        </div>
      </div>
    </>
  );
}
