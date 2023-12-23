import "./CSS/Home.css";

export default function Home() {
  return (
    <>
      <div className="home_title_section"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "2%",
          color: "white",
        }}
      >
        <h1 style={{ marginBottom: "2%" }}>Welcome to Collection Digital</h1>
        <h3>Share your passion for collecting with others</h3>
      </div>

      <h2 className="homepage_card_section_header" style={{ marginTop: "2%", marginBottom: "2%", color: "white" }}>
          What we offer
        </h2>

      <div className="homepage_card_container">
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

      <h2 className="homepage_card_section_header" style={{ marginTop: "2%", marginBottom: "2%", color: "white" }}>
        New Items
      </h2>

      <div className="homepage_card_container">
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
            <p>Collector: KvK</p>
            <p>Date: August 2023</p>
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
            <h3>Flyers</h3>
            <p>Collector: Sonickaa</p>
            <p>Date: February 2022</p>
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
            <h3>Costume Books</h3>
            <p>Collector: jenivere</p>
            <p>Date: October 2021</p>

          </div>
        </div>
      </div>
    </>
  );
}
