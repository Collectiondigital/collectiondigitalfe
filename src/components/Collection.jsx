import { Link } from "react-router-dom";
import "./CSS/Collection.css";
import { useContext, useState } from "react";
import { CollectionsContext } from "../context/collectionsContext";
import { AuthContext } from "../context/authContext";
import { useJwt } from "react-jwt";
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
  height: 400px;
  cursor: pointer;
  background: #3c3c3c;
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
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
  width: "400px",
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

export default function Collection() {
  const { collections, setFlag, flag } = useContext(CollectionsContext);
  const { token } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [collection_pic, setCollection_pic] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoading, setIsLoading] = useState(false);
  const deployedAPI = "https://collectiondigitalbe.onrender.com/collections";
  const localAPI = "http://localhost:7070/collections";

  const resetFields = () => {
    setName("");
    setDescription("");
    setCollection_pic("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      /////////////////////// Step 1: Send request for image upload///////////////////////////////
      const formData = new FormData();
      formData.append("image", collection_pic.file);

      const imageResponse = await fetch(
        "https://collectiondigitalbe.onrender.com/api/upload",
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const imageData = await imageResponse.json();

      if (!imageResponse.ok) {
        errorNotification(imageData.error);
        setIsLoading(false);
        return;
      }

      if (imageResponse.ok) {
        errorNotification(imageData.error);
        setIsLoading(false);
      }
      // Set the Cloudinary URL
      const cloudinaryUrl = imageData.cloudinaryUrl;
      /////////////////////// END OF STEP 1 ///////////////////////////////

      /////////////////////// Step 2: Send request for collection details ////////////////////////
      try {
        const collectionResponse = await fetch(deployedAPI, {
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
          setIsLoading(false);
          return;
        }

        /////////////////////// END OF STEP 2 ////////////////////////
        setIsLoading(false);
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
    await fetch(`https://collectiondigitalbe.onrender.com/collections/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setFlag(!flag);
  };

  const { decodedToken } = useJwt(token);

  return (
    <>
      <div className="collection_header">
        <div className="heading">
          <div className="greeting_container">
            {token !== null && (
              <>
                <h1 className="hello">Hello, {decodedToken?.name}!</h1>
              </>
            )}
          </div>
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

                    <button
                      className="button-delete"
                      onClick={(e) => {
                        e.preventDefault();
                        deleteCollection(collection._id);
                      }}
                    >
                      Delete Collection
                    </button>
                  </Card>
                </Link>
              ))
            ) : (
              <h2 style={{ color: "white" }}>
                Click on the button to create a new collection!
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
                <LoadingOverlay active={isLoading} spinner text="Uploading...">
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
                    <button className="button-1" type="submit">
                      Save Collection
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
        </div>
      </div>
    </>
  );
}
