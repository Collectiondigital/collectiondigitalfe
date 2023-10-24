import "./CSS/IndItemPage.css";
import "./CSS/IndItemInfo.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import IndItemInfo from "./IndItemInfo";

export default function IndItemPage() {
  return (
    <>
      <Navbar />
      <div className="main_image_container">
        <img className="main_image" src="https://placehold.co/400x500" alt="placeholder" />
      </div>

      <div className="thumbnails_container">
        <div className="thumbnail">

        </div>
        <div className="thumbnail">

        </div>
        <div className="thumbnail">

        </div>
      </div>

      <IndItemInfo />
      <Footer />
    </>
  );
}
