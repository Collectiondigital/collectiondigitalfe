import { useContext, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CollectionsContext } from "../context/collectionsContext";
import { AuthContext } from "../context/authContext";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";
// Documentation for this library: https://styled-components.com/docs/basics#motivation

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 250px;
  height: 450px;
  cursor: pointer;
  background: #3c3c3c;
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
  width: "400px",
  height: "650px",
  bgcolor: "#3c3c3c",
  color: "#03c8c8",
  p: 4,
  borderRadius: "5px",
};

const successfulNotification = () =>
  toast.success("Item saved successfully!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

const errorNotification = (error) =>
  toast.error(error, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
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
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    // step one

    try {
      const formData = new FormData();
      formData.append("image", item_pic.file);

      const imgRes = await fetch(
        "https://collectiondigitalbe.onrender.com/api/upload",
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const imgData = await imgRes.json();

      if (!imgRes.ok) {
        errorNotification(imgData.error);
        setIsLoading(false);
        return;
      }
      console.log("img data", imgData);
      const cloudinaryUrl = imgData.cloudinaryUrl;
      console.log("cloudUrl", imgData.cloudinaryUrl);

      //step two
      try {
        const itemResponse = await fetch(deployedAPI, {
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
          setIsLoading(false);
          return;
        }

        successfulNotification();
        resetFields();
        setFlag(!flag);
        setIsLoading(false);
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
    await fetch(`https://collectiondigitalbe.onrender.com/items/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setFlag(!flag);
  };

  const navigate = useNavigate();

  return (
    <div>
      <span onClick={() => navigate(-1)}>
        <img className="arrow-image" src="/arrow-back.png" alt="back" />
      </span>

      <h1>Collection: {selectedCollection?.name}</h1>
      <h3 style={{ padding: "20px 0px", color: "whitesmoke" }}>
        <CardsContainer>
          {selectedCollectionItems?.length
            ? selectedCollectionItems.map((item) => (
                <Link to={`/item/${item._id}`} key={item._id}>
                  <div>
                    {console.log("item.cloudinaryUrl", item)}
                    <Card>
                      <CardImage src={item.cloudinaryUrl} alt="item picture" />
                      <ItemName>{item.object_type}</ItemName>
                      <CardDescription>{item.artist_maker}</CardDescription>
                      <button
                        className="button-delete"
                        onClick={(e) => {
                          e.preventDefault();
                          deleteItem(item._id);
                        }}
                      >
                        Delete Item
                      </button>
                    </Card>
                  </div>
                </Link>
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
          <LoadingOverlay active={isLoading} spinner text="Uploading...">
            <form onSubmit={handleSubmit}>
              <label>
                <h3>Title/Type of object:</h3>
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
                <h3>Select picture:</h3>
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
                    style={{ maxWidth: "100%", maxHeight: "100px" }}
                  />
                )}
              </label>
              <button className="save" type="submit">
                Save item
              </button>
            </form>
          </LoadingOverlay>
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
        theme="dark"
      />
    </div>
  );
}
