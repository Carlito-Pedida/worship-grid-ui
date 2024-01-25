import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AssetContext from "../contexts/AssetContext";
import { Button, Col, Container, Modal, Row, Stack } from "react-bootstrap";
import "../styles/AssetEdit.css";

const AssetEdit = () => {
  let params = useParams();
  let navigate = useNavigate();

  let [updateAsset, setUpdateAsset] = useState({
    asset_id: params.asset_id,
    message: "",
    imageLink: "",
    videoLink: ""
  });

  console.log(updateAsset);

  let { getOneUserAsset, updateUserAsset } = useContext(AssetContext);

  let { asset_id, message, imageLink, videoLink } = updateAsset;

  useEffect(() => {
    if (asset_id === undefined) return;
    async function fetchData() {
      await getOneUserAsset(asset_id).then((oneAsset) =>
        setUpdateAsset(oneAsset)
      );
    }
    fetchData();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdateAsset((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function updatePostFn() {
    return updateUserAsset(updateAsset);
  }

  function handleSubmit(event) {
    event.preventDefault();

    updatePostFn(updateAsset)
      .then(() => {
        if (!updateAsset.ok) {
          alert("Update Succesfull");
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

  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
      <div>
        <div
          className="header"
          style={{
            backgroundColor: "#2c5728",
            color: "gray"
          }}
          closeButton
        >
          <h2>Edit Post</h2>
        </div>
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
                    <input
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
                  </Stack>

                  <Button variant="primary">Save Changes</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer p-3"
          style={{ backgroundColor: "#2c5728", color: "white" }}
        ></div>
      </div>
    </>
  );
};

export default AssetEdit;
