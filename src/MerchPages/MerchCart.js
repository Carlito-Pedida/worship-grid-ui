import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import CartContext from "../contexts/CartContext";
import CartItems from "../props/CartItems";

const MerchCart = (props) => {
  const { show, handleClose } = props;

  let navigate = useNavigate();

  let { cartItems, calculateTotal, deleteItemFromCart, clearCart } =
    useContext(CartContext);

  const cartItemCounter = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const handleCheckout = async () => {
    await fetch("http://localhost:5000/server/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ items: cartItems })
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  const handleCancel = () => {
    window.alert(`You will lose all items in your cart!`);
    clearCart();
    navigate("/paycanceled");
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
                  <h4>Items in your cart: </h4>
                  <hr></hr>
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
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
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
          {cartItemCounter > 0 ? (
            <>
              <Button
                type="submit"
                className="m-2"
                variant="secondary"
                onClick={() => {
                  handleClose();
                }}
              >
                Edit Items
              </Button>
              <Button
                type="submit"
                className="m-2"
                variant="secondary"
                onClick={() => {
                  handleClose();
                  handleCancel();
                  deleteItemFromCart();
                }}
              >
                Empty Cart
              </Button>
            </>
          ) : (
            <>
              <Button
                type="submit"
                className="m-2"
                variant="secondary"
                onClick={() => {
                  handleClose();
                }}
              >
                Close
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MerchCart;
