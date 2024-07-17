import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Nav, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import CartItemCounter from "./CartItemCounter";
import SignIn from "./SignIn";
import SearchModal from "./SearchModal";

const MenuNotLogged = () => {
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

  const [showSearchModal, setShowSearchModal] = useState(false);

  const openSearchModal = () => {
    setShowSearchModal(true);
  };

  const closeSearchModal = () => {
    setShowSearchModal(false);
  };

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        {" "}
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
        <Link className="search-tool-animation" onClick={openSearchModal}>
          <FontAwesomeIcon
            className="search-tool-icon"
            icon={faSearch}
            size="xl"
          />
        </Link>
        <CartItemCounter />
      </Stack>
      <SignIn
        show={showSignInModal}
        handleClose={closeSignInModal}
        handleSubmit={handleSubmit}
      />
      <SearchModal show={showSearchModal} handleClose={closeSearchModal} />
    </>
  );
};

export default MenuNotLogged;
