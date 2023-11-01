import { NavLink } from "react-router-dom";
import "./CSS/ItemPage.css";
export default function ItemPage2() {
  return (
    <>
      <h1>Hello from ItemPage2</h1>
      <NavLink to="/Collection">Collections</NavLink>
      {/* image container  */}
      <div className="main_image_container">
        <img className="main_image" src="https://placehold.co/500x600?" />
      </div>
      {/* Info  */}
      <div className="item_info_container">
        <div className="object_info_container">
          <ul className="object_info">
            <li>
              <h3>Object Type: </h3>
            </li>
            <li>
              <h3>Date: </h3>
            </li>
            <li>
              <h3>Artist/Maker: </h3>
            </li>
            <li>
              <h3>Origin:</h3>
            </li>
            <li>
              <h3>Id number:</h3>
            </li>
          </ul>
        </div>
        {/* actions  */}
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
            {/* Social media  */}
            <div className="social_media_icons">
              <div className="social1">
                <a href="/Facebook">
                  <img className="social-containerf" src="/Facebook.svg" />
                </a>
              </div>
              <div className="social1">
                <a href="/Twitter">
                  <img className="social-containeri" src="/Twitter.svg" />
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
