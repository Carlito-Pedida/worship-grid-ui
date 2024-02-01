import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MerchCart = ({ show, handleClose }) => {
  let navigate = useNavigate();
  const handleCart = () => {};

  const handleCancel = () => {
    window.alert("Are you sure you want to cancel?");
    navigate("/merchandise");
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
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
              <Form onSubmit={handleCart}>
                {/* <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="d-flex justify-content-center mb-4">
                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    checked={""}
                    onChange={""}
                  />
                </div> */}

                <Button className="mb-3 w-100" variant="success" type="submit">
                  Complete Checkout
                </Button>
              </Form>
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
