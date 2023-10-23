import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const API = `https://api.vam.ac.uk/v2/objects/search?q=${query}&page=1&page_size=15`;

  const fetchData = async () => {
    const res = await fetch(API);
    const data = await res.json();
    console.log("DATA: ", data.records);
    setData(data.records);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  console.log("QUERY: ", query);

  return (
    <div>
      <label style={{ margin: "0.4em" }}>
        <FaSearch />
      </label>
      <input
        className="searcher"
        placeholder="Type here to search ..."
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <div className="searched">
        {data
          ? data.map((record) => (
              <div key={record.accessionNumber} className="results">
                <h5>
                  {record._primaryTitle ? record._primaryTitle : "No name"}
                </h5>
                <img
                  className="result_pic"
                  src={`${record._images._iiif_image_base_url}/full/900,/0/default.jpg`}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
