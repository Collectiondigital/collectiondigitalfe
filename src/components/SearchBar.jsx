import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <>
      <div className="search">
        <FaSearch id="search_icon" />
        <input
          className="search_bar"
          placeholder="Type here for your search..."
        />
        <button className="submit" type="submit">
          Search
        </button>
      </div>
    </>
  );
}
