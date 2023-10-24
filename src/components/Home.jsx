import "./CSS/Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          borderBottom: "1px solid grey",
          paddingBottom: "2%",
          color: "white",
        }}
      >
        <h1 style={{ marginBottom: "2%" }}>Welcome to Collection Digital</h1>
        <h4>Share your passion for collecting with others</h4>
      </div>

      <h3 style={{ marginTop: "2%", marginBottom: "2%", color: "white" }}>
        What we offer
      </h3>

      <div className="test">
        <div className="homepage_card">
          <div className="homepage_h5">
            <h5>Document</h5>
            <p>
              Store your collection details and images in one place with access
              from desktop, tablet and mobile.
            </p>
          </div>
        </div>

        <div className="homepage_card">
          <div className="homepage_h5">
            <h5>Manage</h5>
            <p>
              Easy to use, affordable and scalable as your collection changes.
            </p>
          </div>
        </div>
        <div className="homepage_card">
          <div className="homepage_h5">
            <h5>Share</h5>
            <p>
              Share your collection with others via social media using
              integrated links.
            </p>
          </div>
        </div>
      </div>

      <h3 style={{ marginTop: "2%", marginBottom: "2%", color: "white" }}>
        New Collections
      </h3>

      <div className="new_collections_card">
        <img src="" alt="" />
        <h5>name of collection</h5>
        <p>short description of collection</p>
      </div>

      <Footer />
    </>
  );
}
