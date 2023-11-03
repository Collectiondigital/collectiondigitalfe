import { NavLink } from "react-router-dom";
import "./CSS/Collection.css";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useEffect } from "react";

export default function Collection() {
  const [selectedColl, setSelectedColl] = useState(null);
  const [selectedOne, setSelectedOne] = useState({});
  const { token } = useContext(AuthContext);

  const getColls = async () => {
    const res = await fetch(`http://localhost:7070/collection/name/`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    setSelectedColl(data);
  };
  const handleClick = (item) => {
    console.log(item._id);
    const getOne = async () => {
      const res = await fetch(
        `http://localhost:7070/collection/name/${item._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setSelectedOne(data);
      console.log(data);
    };
    getOne();
  };
  useEffect(() => {
    getColls();
  }, []);

  console.log("selected coll", selectedColl);
  console.log("selected One", selectedOne);
  return (
    <>
      <div className="collection_header">
        <div className="heading">
          <h1>Welcome to your collections</h1>
          {selectedColl?.collections[0].name}
          <ul>
            {selectedColl?.collections.map((item) => (
              <li key={item.id} onClick={() => handleClick(item)}>
                {item.name}
              </li>
            ))}
          </ul>
          <div className="collection_buttons">
            <button className="button-1">Add New Collection</button>
          </div>
        </div>
      </div>

      <NavLink to="/CollectionItem">to specific collection</NavLink>
    </>
  );
}
