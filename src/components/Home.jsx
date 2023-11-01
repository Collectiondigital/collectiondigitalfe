import "./CSS/Home.css";

export default function Home() {
  return (
    <>
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
        <h3>Share your passion for collecting with others</h3>
      </div>

      <h2 style={{ marginTop: "2%", marginBottom: "2%", color: "white" }}>
        What we offer
      </h2>

      <div className="homepage_container">
        <div className="homepage_card">
          <div>
            <h2>Document</h2>
          </div>
          <div className="homepage_card_text">
            <p>
              Store your collection details and images in one place with access
              from desktop, tablet and mobile.
            </p>
          </div>
        </div>

        <div className="homepage_card">
          <div>
            <h2>Manage</h2>
          </div>
          <div className="homepage_card_text">
            <p>
              Easy to use, affordable and scalable as your collection changes.
            </p>
          </div>
        </div>

        <div className="homepage_card">
          <div>
            <h2>Share</h2>
          </div>
          <div className="homepage_card_text">
            <p>
              Share your collection with others via social media using
              integrated links.
            </p>
          </div>
        </div>
      </div>

      <h2 style={{ marginTop: "2%", marginBottom: "2%", color: "white" }}>
        New Items
      </h2>

      <div className="new_collections_card_container">
        <div className="new_collections_card">
          <div>
            <img
              className="new_collections_card_image"
              src="/AA_Ace.jpeg"
              alt="collection image"
            />
          </div>
          <div className="new_collections_card_text">
            <h3>Trading Cards</h3>
            <p>Game: One Piece</p>
            <p>Name: Portgas D.Ace</p>
            <p>Collector: KvK</p>
          </div>
        </div>

        <div className="new_collections_card">
          <div>
            <img
              className="new_collections_card_image"
              src="/IMG_3938.jpg"
              alt="collection image"
            />
          </div>
          <div className="new_collections_card_text">
            <h3>Flyer</h3>
            <p>Artist: Sonson</p>
            <p>Date: 2021</p>
            <p>Collector: Sonickaa</p>
          </div>
        </div>

        <div className="new_collections_card">
          <div>
            <img
              className="new_collections_card_image"
              src="/IMG_3937.jpg"
              alt="collection image"
            />
          </div>
          <div className="new_collections_card_text">
            <h3>Costume Book</h3>
            <p>Fashion and Fashion Plates 1800-1900</p>
            <p>James Laver: 1943</p>
            <p>Collector: jenivere</p>
          </div>
        </div>
      </div>
    </>
  );
}
