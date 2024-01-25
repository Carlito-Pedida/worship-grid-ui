import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AssetContext from "../contexts/AssetContext";
import { Button, Col, Container, Modal, Row, Stack } from "react-bootstrap";
import "../styles/AssetEdit.css";

const AssetEdit = ({ showEditAsset, handleClose, selectedAsset }) => {
  let params = useParams();
  let navigate = useNavigate();

  let [updateAsset, setUpdateAsset] = useState({
    asset_id: params.asset_id,
    message: selectedAsset.message,
    imageLink: selectedAsset.imageLink,
    videoLink: selectedAsset.videoLink
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

  function updatePostFn() {
    return updateUserAsset(updateAsset);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdateAsset((prevValue) => ({ ...prevValue, [name]: value }));
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
    <div>
      <>
        <Modal centered show={showEditAsset} onHide={handleClose}>
          <Modal.Header
            style={{
              backgroundColor: "#2c5728",
              color: "gray"
            }}
            closeButton
          >
            <Modal.Title>Edit Post</Modal.Title>
          </Modal.Header>
          <Modal.Body
            className="p-4"
            style={{
              backgroundColor: "grey",
              color: "white"
            }}
          >
            <Container className="grid-example">
              <Row>
                <Col xs={6} md={4}></Col>
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
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                  </Button>
                </form>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer
            className="p-3"
            style={{ backgroundColor: "#2c5728", color: "white" }}
          ></Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default AssetEdit;
