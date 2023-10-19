import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [objs, setObjs] = useState();

  const url = "http://localhost:7070/objects";
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setObjs(data);
    };
    getData();
  }, []);
  console.log(objs);
  return (
    <>
      <h1>heyy {}</h1>
    </>
  );
}

export default App;
