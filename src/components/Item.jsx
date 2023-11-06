import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CollectionsContext } from "../context/collectionsContext";
import { AuthContext } from "../context/authContext";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
// Documentation for this library: https://styled-components.com/docs/basics#motivation

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  border: 2px solid white;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 250px;
  cursor: pointer;
  background: #2b2f33;
`;

const CardImage = styled.img`
  width: 100%;
  max-height: 200px;
  max-width: 180px;
  object-fit: cover;
  border-bottom: 1px solid black;
`;

const ItemName = styled.h2`
  margin: 10px 0;
`;

const CardDescription = styled.p`
  padding: 20px;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgb(60, 60, 60)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

const successfulNotification = () =>
  toast.success("Item saved successfully!", {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const errorNotification = (error) =>
  toast.error(error, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

export default function Item() {
  const [object_type, setObject_type] = useState("");
  const [artist, setArtist] = useState("");
  const [origin, setOrigin] = useState("");
  const [open, setOpen] = useState(false);
  const [itemDate, setItemDate] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { collections, flag, setFlag } = useContext(CollectionsContext);
  const { token } = useContext(AuthContext);
  const { id } = useParams();

  const deployedAPI = "https://collectiondigitalbe.onrender.com/items";
  const localAPI = "http://localhost:7070/items";

  const selectedCollection = collections?.find((c) => c._id === id);
  const selectedCollectionItems = selectedCollection?.items;

  const resetFields = () => {
    setObject_type("");
    setArtist("");
    setOrigin("");
    setItemDate("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(localAPI, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        object_type,
        artist_maker: artist,
        origin,
        primary_date: itemDate,
        collection_ID: id,
      }),
    });

    const data = await res.json();

    console.log("SENT DATA", data);

    if (!res.ok) {
      errorNotification(data.error);
    }

    if (res.ok) {
      successfulNotification();
      resetFields();
      setFlag(!flag);
    }
    setTimeout(() => {
      handleClose();
    }, 500);
  };

  return (
    <div>
      <h1>{selectedCollection?.name}</h1>
      <h3 style={{ padding: "20px 0px", color: "whitesmoke" }}>
        <CardsContainer>
          {selectedCollectionItems?.length
            ? selectedCollectionItems.map((item) => (
                <div key={item._id}>
                  <Card>
                    <CardImage />
                    <ItemName>{item.object_type}</ItemName>
                    <CardDescription>
                      Made by: {item.artist_maker}
                    </CardDescription>
                  </Card>
                </div>
              ))
            : "No items in this collection yet!"}
        </CardsContainer>
      </h3>
      <button onClick={handleOpen} className="button-1">
        Add New Items
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <label>
              <h3>Type of object:</h3>
              <input
                value={object_type}
                onChange={(e) => setObject_type(e.target.value)}
              />
            </label>
            <label>
              <h3>Artist:</h3>
              <input
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
              />
            </label>
            <label>
              <h3>Origin:</h3>
              <input
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />
            </label>
            <label>
              <h3>Item's creation date:</h3>
              <input
                value={itemDate}
                onChange={(e) => setItemDate(e.target.value)}
              />
            </label>
            <button type="submit">Save item</button>
          </form>
        </Box>
      </Modal>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
