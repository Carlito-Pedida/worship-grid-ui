import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import "../styles/AssetEdit.css";

const AssetEdit = ({ asset, handleClose, handleSubmit, onAssetUpdate }) => {
  let [updatedAsset, setUpdatedAsset] = useState({
    asset_id: asset.asset_id,
    message: asset.message,
    imageLink: asset.imageLink,
    videoLink: asset.videoLink
  });

  let { asset_id, message, imageLink, videoLink } = updatedAsset;

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdatedAsset((prevValue) => ({ ...prevValue, [name]: value }));
    onAssetUpdate({ ...updatedAsset, [name]: value });
  }

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
                  key={asset_id}
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
                      value={message}
                      onChange={handleChange}
                      placeholder="Message Edit"
                    />
                    <p>Edit Image URL</p>
                    <input
                      className="mb-3"
                      type="text"
                      name="imageLink"
                      value={imageLink}
                      onChange={handleChange}
                      placeholder="Image URL"
                    />
                    <p>Edit Video Link</p>
                    <input
                      className="mb-3"
                      type="text"
                      name="videoLink"
                      value={videoLink}
                      onChange={handleChange}
                      placeholder="Video URL"
                    />

                    <Button
                      onClick={handleClose}
                      type="submit"
                      className="mb-3"
                      variant="success"
                    >
                      Save Changes
                    </Button>
                  </Stack>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetEdit;
