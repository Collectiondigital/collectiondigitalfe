import "./CSS/Collection.css";

export default function Collection() {
  return (
    <>
      {/* header and buttons */}
      <div className="collection_header">
        <div className="heading">
          <h1>Welcome to your collection</h1>
          <div className="collection_buttons">
            <button className="button-1">Add</button>
            <button className="button-1">Delete</button>
          </div>
        </div>
      </div>
      {/* all collections */}
      <div className="collection">
        <div className="card_container">
          <div className="item_card">
            <div className="img_card">
              <a href="#">
                <img
                  className="result_img"
                  src="https://placehold.co/250x250?text=No+image"
                  alt="Holder"
                />
              </a>
            </div>
            <div className="text_card">
              <h3>Name:</h3>
              <p>description:</p>
              <p>owner:</p>
            </div>
          </div>
        </div>
        {/* second card  */}
        <div className="card_container">
          <div className="item_card">
            <div className="img_card">
              <a href="#">
                <img
                  className="result_img"
                  src="https://placehold.co/250x250?text=No+image"
                  alt="Holder"
                />
              </a>
            </div>
            <div className="text_card">
              <h3>Name:</h3>
              <p>description:</p>
              <p>owner:</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
