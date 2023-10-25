import "./CSS/ItemPage.css";
import ItemImages from "./ItemImages";
import { useParams } from "react-router-dom";

export default function ItemPage() {
  // const { id } = useParams();

  // const oneItem = data.records.find((el) => el.id == parseInt(id, 10));

  // console.log(oneItem);

  return (
    <>
      <ItemImages />
      <div className="item_info_container">
        <div className="object_info_container">
          <ul className="object_info">
            <li>Object Type: </li>
            <li>Date: </li>
            <li>Artist/Maker: </li>
            <li>Origin: </li>
            <li>Accession number: </li>
            <li>Display: </li>
          </ul>
        </div>

        <div className="actions_container">
          <ul className="action">
            <li className="action_click">Edit Item Listing</li>
            <li className="action_click">Delete Item Listing</li>
            <li className="action_click">Print Item Listing</li>
            <li className="action_click">Preview Item Listing</li>
            <li>Share on social media</li>

            <div className="social_media_icons">
              <li className="Fb"></li>
              <li className="Insta"></li>
              <li className="Twit"></li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
