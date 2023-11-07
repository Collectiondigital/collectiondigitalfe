import { Link } from "react-router-dom";
import "./CSS/Collection.css";
import { useContext, useState } from "react";
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

const CollectionName = styled.h2`
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

export default function Collection() {
  const { collections, setFlag, flag } = useContext(CollectionsContext);
  const { token } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [collection_pic, setCollection_pic] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deployedAPI = "https://collectiondigitalbe.onrender.com/collections";
  const localAPI = "http://localhost:7070/collections";

  const resetFields = () => {
    setName("");
    setDescription("");
    setCollection_pic("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      /////////////////////// Step 1: Send request for image upload///////////////////////////////
      const formData = new FormData();
      formData.append("image", collection_pic.file);

      const imageResponse = await fetch("http://localhost:7070/api/upload", {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const imageData = await imageResponse.json();

      if (!imageResponse.ok) {
        errorNotification(imageData.error);
        return;
      }

      // Set the Cloudinary URL
      const cloudinaryUrl = imageData.cloudinaryUrl;
      /////////////////////// END OF STEP 1 ///////////////////////////////

      /////////////////////// Step 2: Send request for collection details ////////////////////////
      try {
        const collectionResponse = await fetch(localAPI, {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name, description, cloudinaryUrl }),
        });

        const collectionData = await collectionResponse.json();

        console.log("COLL RES", collectionData);

        if (!collectionResponse.ok) {
          errorNotification(collectionData.error);
          return;
        }

        /////////////////////// END OF STEP 2 ////////////////////////

        setFlag(!flag);
        successfulNotification();
        resetFields();
        handleClose();
      } catch (collectionError) {
        console.error("Collection Error:", collectionError);
      }
    } catch (imageError) {
      console.error("Image Error:", imageError);
    }
  };

  const handleImageChange = (e) => {
    // Get the selected image file
    const file = e.target.files[0];

    // You can use FileReader to display a preview of the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        // Set the selected image and its preview
        setCollection_pic({
          file,
          preview: event.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  console.log("@@@@@@@@@@", collections);

  const deleteCollection = async (id) => {
    await fetch(`http://localhost:7070/collections/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setFlag(!flag);
  };

  return (
    <>
      <div className="collection_header">
        <div className="heading">
          <h1>Welcome to your collections</h1>
          <CardsContainer>
            {collections ? (
              collections.map((collection) => (
                <Link to={`/collection/${collection._id}`} key={collection._id}>
                  <Card>
                    <CardImage
                      src={collection.cloudinaryUrl}
                      alt="image desc"
                    />
                    <CollectionName>{collection.name}</CollectionName>
                    <CardDescription>{collection.description}</CardDescription>
                    <button onClick={() => deleteItem(item._id)}>
                      Delete Collection
                    </button>
                  </Card>
                </Link>
              ))
            ) : (
              <h2 style={{ color: "white" }}>
                Click on the button down below to create a new collection!
              </h2>
            )}
          </CardsContainer>

          <div className="collection_buttons">
            <button className="button-1" onClick={handleOpen}>
              Add New Collection
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <label>
                    <h3>Name of collection:</h3>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                  <label>
                    <h3>Description:</h3>
                    <input
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </label>
                  <label>
                    <h3>Select pic:</h3>
                    <input
                      type="file"
                      accept="image/*"
                      name="collection_pic"
                      onChange={handleImageChange}
                    />
                    {collection_pic && (
                      <img
                        src={collection_pic.preview}
                        alt="selected img"
                        style={{ maxWidth: "100%", maxHeight: "200px" }}
                      />
                    )}
                  </label>
                  <button type="submit">Save Collection</button>
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
        </div>
      </div>
    </>
  );
}
