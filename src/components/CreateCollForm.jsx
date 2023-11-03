import "./CSS/CreateCollForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Collection from "./Collection";

export default function CreateCollForm({ collections }) {
  //   const [collections, setCollections] = useState("");
  const [newCollectionName, setNewCollectionName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const createNewCollection = async () => {
    const response = await fetch("http://localhost:7070/collection/name", {
      headers: { "Content-type": "application/json; charset=UTF-8" },
      method: "POST",
      body: JSON.stringify({
        name: newCollectionName,
        description: newDescription,
        owner: newCollectionOwner,
      }),
    });
    setNewCollectionName("");
    setNewDescription("");
  };

  useEffect(() => {
    createNewCollection();
  }, []);

  return (
    <>
      <div className="form_wrapper">
        <h1>Create New Collection</h1>
        <div className="form_container">
          {collections.map((collection) =>
            collection.name === collection ? (
              <div className="collection_container" key={collection.id}>
                <Link to={collection.urlname}>
                  {<Collection collection={collection} />}
                </Link>
              </div>
            ) : (
              ""
            )
          )}
        </div>

        <div className="create_new-collection">
          <h2>Create New Collection</h2>
          <div className="input-wrapper">
            <label htmlFor="name">Collection Name:</label>
            <input
              id="name"
              value={newCollectionName}
              onChange={(e) => setNewCollectionName(e.target.value)}
              placeholder="Collection Name"
            />

            <label htmlFor="description">Object Type:</label>
            <textarea
              id="description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="ex: Trading cards, Comic Books, Records etc."
            />
            <button onClick={createNewCollection}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
