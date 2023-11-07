import { useParams, useNavigate } from "react-router-dom";
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

    const navigate= useNavigate();

  console.log(foundItem);

    return (

        <div>
            <span onClick={() => navigate(-1)}>
                <img className="arrow-image" src="/arrow-back.png" alt="back" />
            </span>
            <h1>Object Type: {foundItem.object_type}</h1>

        </div>


    );
} 