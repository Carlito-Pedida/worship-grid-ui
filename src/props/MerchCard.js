import React, { useState, useContext } from "react";
import { Button, Card, CardBody, Col, Form, Modal, Row } from "react-bootstrap";
import CartContext from "../contexts/CartContext";

const MerchCard = (props) => {
  const merch = props.merch;

  const {
    cartItems,
    getItemQty,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    calculateTotal
  } = useContext(CartContext);

  const itemQty = getItemQty(merch.merch_id);
  console.log(cartItems);

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
          {itemQty > 0 ? (
            <>
              <Form as={Row}>
                <Form.Label column="true" sm="6">
                  Items in Cart: {itemQty}
                </Form.Label>
                <Col sm="6">
                  <Button
                    className="mx-2"
                    variant="success"
                    sm="6"
                    onClick={() => addItemToCart(merch.merch_id)}
                  >
                    +
                  </Button>
                  <Button
                    variant="secondary"
                    className="mx-2"
                    sm="6"
                    onClick={() => removeItemFromCart(merch.merch_id)}
                  >
                    -
                  </Button>
                </Col>
              </Form>
              <Button
                className="my-4"
                variant="danger"
                onClick={() => deleteItemFromCart(merch.merch_id)}
              >
                Remove Item Cart
              </Button>
            </>
          ) : (
            <Button
              variant="success"
              type="submit"
              onClick={() => addItemToCart(merch.merch_id)}
            >
              Add to Cart
            </Button>
          )}
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
