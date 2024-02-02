import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import CartContext from "../contexts/CartContext";
import CartItems from "../props/CartItems";

const MerchCart = (props) => {
  const { show, handleClose } = props;

  let navigate = useNavigate();

  let { cartItems, calculateTotal } = useContext(CartContext);

  const cartItemCounter = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const handleCart = () => {};

  const handleCancel = () => {
    navigate("/merchandise");
  };
  console.log(cartItems);
  return (
    <div>
      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header
          style={{ backgroundColor: "#366532" }}
          className="divider d-flex align-items-center"
        >
          <Modal.Title
            style={{ color: "white" }}
            className=" m-2 text-center mx-3 "
          >
            WG Shopping Cart
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{
            backgroundColor: "#366532"
          }}
        >
          <div
            style={{
              backgroundColor: "grey",
              color: "white",
              padding: "35px"
            }}
          >
            <div
              style={{
                backgroundColor: "rgb(100, 100, 100)",
                borderRadius: "8px",
                padding: "35px"
              }}
            >
              {cartItemCounter > 0 ? (
                <>
                  <p>Items in your cart: </p>
                  {cartItems.map((currentItem, idx) => (
                    <>
                      <CartItems
                        key={idx}
                        merch_id={currentItem.merch_id}
                        qty={currentItem.qty}
                      />
                    </>
                  ))}

                  <h3>Grand Total: {calculateTotal().toFixed(2)}</h3>
                  <br />

                  <Button
                    className="mb-3 w-100"
                    variant="success"
                    type="submit"
                  >
                    Complete Checkout
                  </Button>
                </>
              ) : (
                <>
                  <h3>Your Cart is empty!</h3>
                </>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#366532" }}>
          <Button
            type="submit"
            className="m-2"
            variant="secondary"
            onClick={() => {
              handleClose();
              handleCancel();
            }}
          >
            Cancel Transaction
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MerchCart;
