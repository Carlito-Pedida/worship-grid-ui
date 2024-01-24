import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AssetContext from "../contexts/AssetContext";
import { Button, Col, Container, Modal, Row, Stack } from "react-bootstrap";
import "../styles/AssetEdit.css";

const AssetEdit = ({ showEditAsset, handleClose, handleShow }) => {
  let params = useParams();
  let navigate = useNavigate();

  let [assetUpdate, setAssetUpdate] = useState({
    asset_id: params.asset_id,
    message: "",
    imageLink: "",
    videoLink: ""
  });

  let { getOneUserAsset, updateUserAsset } = useContext(AssetContext);

  let { asset_id, message, imageLink, videoLink } = assetUpdate;

  useEffect(() => {
    if (asset_id === undefined) return;
    async function fetchData() {
      await getOneUserAsset(asset_id).then((oneAsset) =>
        setAssetUpdate(oneAsset)
      );
    }
    fetchData();
  }, []);

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
                      onChange={""}
                      placeholder="Message Edit"
                    />
                    <p>Edit Image URL</p>
                    <input
                      className="mb-3"
                      type="textarea"
                      name="message"
                      value={message}
                      onChange={""}
                      placeholder="Image URL"
                    />
                    <p>Edit Video Link</p>
                    <input
                      className="mb-3"
                      type="textarea"
                      name="message"
                      value={message}
                      onChange={""}
                      placeholder="Video URL"
                    />
                  </Stack>
                </form>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer
            className="p-3"
            style={{ backgroundColor: "#2c5728", color: "white" }}
          >
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default AssetEdit;
