import React, { useState } from "react";
import { Button, Card, CardBody, Modal } from "react-bootstrap";

const MerchCard = (props) => {
  const merch = props.merch;

  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card>
        <CardBody>
          <Card.Title>{merch.item_name}</Card.Title>
          <img
            alt="photo-here"
            onClick={() => {
              handleShow(true);
              setSelectedItem(merch);
            }}
            height={200}
            src={merch.item_img}
          />
          <Card.Text>{merch.description}</Card.Text>
          <Card.Text>{merch.price}</Card.Text>
          <Button type="submit">Add to Cart</Button>
        </CardBody>
      </Card>
      <>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem?.item_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center align-items-center">
            <img style={{ maxHeight: "230px" }} src={selectedItem?.item_img} />
            <div className="p-3">
              <p>{selectedItem?.description}</p>
              <h4>$ {selectedItem?.price}</h4>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Add to Cart</Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};

export default MerchCard;
