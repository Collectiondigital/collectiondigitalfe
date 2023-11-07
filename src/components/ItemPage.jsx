import "./CSS/ItemPage.css";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function ItemPage({ data }) {
  const { systemNumber } = useParams();
  console.log(systemNumber, data);

  const oneItem = data.find((el) => el.systemNumber === systemNumber);

  console.log(oneItem);

  return (
    <>
      <NavLink to="/search">
        <span>
          <img className="arrow-image" src="/arrow-back.png" alt="back" />
        </span>
      </NavLink>
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
            <li><h3>Id number:</h3>{oneItem.accessionNumber ? oneItem.accessionNumber : "Accession Number unknown"}</li>

          </ul>
        </div>
      </div>
    </>
  );
}
