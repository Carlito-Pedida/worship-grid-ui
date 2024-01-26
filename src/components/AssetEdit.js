import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AssetContext from "../contexts/AssetContext";
import { Button, Stack } from "react-bootstrap";
import "../styles/AssetEdit.css";

const AssetEdit = ({ asset_id, message, imageLink, videoLink }) => {
  let navigate = useNavigate();

  const [updatedAsset_id, setUpdatedAssetId] = useState(asset_id);
  const [updateMessage, setUpdateMessage] = useState(message);
  const [updateImageLink, setUpdateImageLink] = useState(imageLink);
  const [updatVideoLink, setUpdateVideoLink] = useState(videoLink);

  console.log(updateMessage, updateImageLink, updatVideoLink);

  let { updateUserAsset } = useContext(AssetContext);

  let updatedAsset = {
    updatedAsset_id,
    updateMessage,
    updateImageLink,
    updatVideoLink
  };

  // useEffect(() => {
  //   if (asset_id === undefined) return;
  //   async function fetch() {
  //     await getOneUserAsset(asset_id).then((oneAsset) =>
  //       setUpdateAsset(oneAsset)
  //     );
  //   }
  //   fetch();

  function handleSubmit(event) {
    event.preventDefault();

    updateUserAsset(updatedAsset)
      .then(() => {
        if (!updatedAsset.ok) {
          alert("Your QAK has been updated!");
        }
        navigate("/assets");
        window.location.reload();
      })
      .catch((error) => {
        console.error("There was an error!", error);
        alert("You are not authorized to perform this action!");
        navigate("/assets");
      });
  }
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   updateUserAsset(updatedAsset);
  // };

  return (
    <>
      <div>
        <div
          className="header"
          style={{
            backgroundColor: "#2c5728",
            color: "gray"
          }}
        ></div>
        <div
          className="body p-4"
          style={{
            backgroundColor: "grey",
            color: "white"
          }}
        >
          <div className="container grid-example">
            <div className="row">
              <div className="col" xs={6} md={4}>
                <form
                  onSubmit={handleSubmit}
                  className="edit-form p-5"
                  style={{
                    backgroundColor: "rgb(100, 100, 100)",
                    borderRadius: "8px"
                  }}
                >
                  <Stack>
                    <p>Edit Message</p>
                    <textarea
                      className="mb-3"
                      name="message"
                      value={updateMessage}
                      onChange={(e) => setUpdateMessage(e.target.value)}
                      placeholder="Message Edit"
                    />
                    <p>Edit Image URL</p>
                    <input
                      className="mb-3"
                      type="text"
                      name="imageLink"
                      value={updateImageLink}
                      onChange={(e) => setUpdateImageLink(e.target.value)}
                      placeholder="Image URL"
                    />
                    <p>Edit Video Link</p>
                    <input
                      className="mb-3"
                      type="text"
                      name="videoLink"
                      value={updatVideoLink}
                      onChange={(e) => setUpdateVideoLink(e.target.value)}
                      placeholder="Video URL"
                    />

                    <Button type="submit" className="mb-3" variant="success">
                      Save Changes
                    </Button>
                  </Stack>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className="footer p-3"
          style={{ backgroundColor: "#2c5728", color: "white" }}
        ></div> */}
      </div>
    </>
  );
};

export default AssetEdit;
