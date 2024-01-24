import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AssetContext from "../contexts/AssetContext";
import { Button, Modal } from "react-bootstrap";

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
          <Modal.Header closeButton>
            <Modal.Title>Edit Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
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
