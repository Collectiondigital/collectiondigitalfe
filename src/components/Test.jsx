import { useState, useEffect } from "react";

export default function Test() {
  const [isdata, setIsData] = useState([]);

  const url =
    "https://api.vam.ac.uk/v2/objects/search?q=worth%20wedding%20dress&page=1&page_size=15&year_made_from=1870&year_made_to=1900&id_category=THES49044";

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setIsData(data);
      console.log("my fetch", data);
    };
    getData();
  }, []);

  return;
}
