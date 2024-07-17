import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export const OffCanvasNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showSignInModal, setShowSignInModal] = useState(false);

  const openSignInModal = () => {
    setShowSignInModal(true);
  };

  const closeSignInModal = () => {
    setShowSignInModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link className="hover-underline-animation" to="/signup">
            GET ACCESS
          </Link>
          <Link
            className="hover-underline-animation"
            to={openSignInModal}
            onClick={openSignInModal}
          >
            MY ACCOUNT
          </Link>
          <Link className="hover-underline-animation" to={"/assets"}>
            MESSAGE BOARD
          </Link>
          <Link className="hover-underline-animation" to="/merchandise">
            MERCHANDISE
          </Link>
          <Link className="hover-underline-animation" to="/daily_devotionals">
            DEVO
          </Link>
          <Link className="hover-underline-animation" to="/academy">
            WORSHIP GRID ACADEMY
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
