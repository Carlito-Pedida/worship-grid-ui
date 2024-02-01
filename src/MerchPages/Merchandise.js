import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { MerchList } from "../components/MerchList";

const Merchandise = () => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(51, 51, 51)",
          overflow: "hidden",
          color: "white",
          padding: "45px"
        }}
      >
        <h1 className="mb-5">Worship Grid Store</h1>
        <Row xs={1} md={3} className="g-4">
          {MerchList.map((item, idx) => (
            <Col align="center" key={idx}>
              <h2>{item.item_name}</h2>
              <Container
                style={{
                  padding: "45px"
                }}
              >
                <img
                  src={item.item_img}
                  alt="photo-here"
                  onClick={() => {
                    handleShow(true);
                    setSelectedItem(item);
                  }}
                  height={200}
                />
              </Container>

              <p>{item.description}</p>
              <h4>{item.price}</h4>
              <Button type="submit">Add to Cart</Button>
            </Col>
          ))}
        </Row>
        <>
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>{selectedItem?.item_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center align-items-center">
              <img
                style={{ maxHeight: "230px" }}
                src={selectedItem?.item_img}
              />
              <p className="p-3">{selectedItem?.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={""}>
                Add to Cart
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    </>
  );
};

export default Merchandise;
