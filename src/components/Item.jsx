import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CollectionsContext } from "../context/collectionsContext";
import { AuthContext } from "../context/authContext";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
  color: "rgb(3, 200, 200)",
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
  const [item_pic, setItem_pic] = useState("");
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
    setItem_pic("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // steeeep ooone

    try {
      const formData = new FormData();
      formData.append("image", item_pic.file);

      const imgRes = await fetch("http://localhost:7070/api/upload", {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const imgData = await imgRes.json();

      if (!imgRes.ok) {
        errorNotification(imgData.error);
        return;
      }
      console.log("img data", imgData);
      const cloudinaryUrl = imgData.cloudinaryUrl;
      console.log("cloudUrl", imgData.cloudinaryUrl);

      //steeep twoo
      try {
        const itemResponse = await fetch(localAPI, {
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
            cloudinaryUrl,
          }),
        });

        const data = await itemResponse.json();

        console.log("SENT DATA", data);

        if (!itemResponse.ok) {
          errorNotification(data.error);
          return;
        }

        successfulNotification();
        resetFields();
        setFlag(!flag);

        setTimeout(() => {
          handleClose();
        }, 500);
      } catch (itemError) {
        console.error("Item Error:", itemError);
      }
    } catch (imgError) {
      console.error("Image Error:", imgError);
    }
  };

  // same as in coll
  const handleImageChange = (e) => {
    // Get the selected image file
    const file = e.target.files[0];

    // You can use FileReader to display a preview of the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        // Set the selected image and its preview
        setItem_pic({
          file,
          preview: event.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteItem = async (id) => {
    await fetch(`http://localhost:7070/items/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setFlag(!flag);
  };

  return (
    <div>
      <NavLink to="/collection">
        <span>
          <img className="arrow-image" src="/arrow-back.png" alt="back" />
        </span>
      </NavLink>
      <h1>{selectedCollection?.name}</h1>
      <button onClick={handleOpen} className="button-1">
        Add New Items
      </button>
      <h3 style={{ padding: "20px 0px", color: "whitesmoke" }}>
        <CardsContainer>
          {selectedCollectionItems?.length
            ? selectedCollectionItems.map((item) => (
                /*   <Link to={`/item/${item._id}`} key={item._id}> */
                <div>
                  {console.log("item.cloudinaryUrl", item)}
                  <Card>
                    <CardImage src={item.cloudinaryUrl} alt="item picture" />
                    <ItemName>{item.object_type}</ItemName>
                    <CardDescription>
                      Made by: {item.artist_maker}
                    </CardDescription>
                    <button onClick={() => deleteItem(item._id)}>
                      Delete Item
                    </button>
                  </Card>
                </div>
                /*  </Link> */
              ))
            : "No items in this collection yet!"}
        </CardsContainer>
      </h3>

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

            <label>
              <h3>Select an image:</h3>
              <input
                type="file"
                accept="image/*"
                name="item_pic"
                onChange={handleImageChange}
              />
              {item_pic && (
                <img
                  src={item_pic.preview}
                  alt="selected image"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              )}
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
