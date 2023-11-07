import { useParams } from "react-router-dom";
import { CollectionsContext } from "../context/collectionsContext";
import { useContext, useState } from "react";
import "./CSS/CollItemPage.css";

export default function CollItemPage() {
  const { collections } = useContext(CollectionsContext);
  console.log("collections inside item page", collections);
  const { id } = useParams();

  let foundItem = null;

  for (const collection of collections) {
    if (collection.items && Array.isArray(collection.items)) {
      for (const item of collection.items) {
        if (item._id === id) {
          foundItem = item;
          break;
        }
      }
    }

    if (foundItem) {
      break;
    }
  }

  console.log(foundItem);

  return (
    <div>
      <h1>Object Type: {foundItem.object_type}</h1>
      <h1>Second Type: {foundItem.object_type}</h1>
    </div>
  );
}
