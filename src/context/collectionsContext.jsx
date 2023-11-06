import { useState, useEffect, createContext, useContext } from "react";
import { AuthContext } from "./authContext";

export const CollectionsContext = createContext();

export default function CollectionsContextProvider(props) {
  const { token } = useContext(AuthContext);

  console.log("TOKEN IN COLL CONT", token);

  const [collections, setCollections] = useState(null);
  const [flag, setFlag] = useState(false);

  const getCollections = async () => {
    try {
      const res = await fetch(`http://localhost:7070/collections/`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        // Handle unauthorized access
        console.error("Unauthorized access");
        return;
      }

      const data = await res.json();
      setCollections(data.collections);
    } catch (error) {
      console.error("Error fetching collections:", error);
    }
  };

  useEffect(() => {
    getCollections();
  }, [token, flag]);

  return (
    <CollectionsContext.Provider value={{ collections, setFlag, flag }}>
      {props.children}
    </CollectionsContext.Provider>
  );
}
