import React, { useContext, useState } from "react";
import CartContext from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import MerchCart from "../MerchPages/MerchCart";

const CartItemCounter = () => {
  const [showCartModal, setShowCartModal] = useState(false);

  let { cartItems } = useContext(CartContext);

  const cartItemCounter = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const openCartModal = () => {
    setShowCartModal(true);
  };

  const closeCartModal = () => {
    setShowCartModal(false);
  };

  return (
    <>
      {cartItemCounter > 0 ? (
        <Link
          className="search-tool-animation"
          to={openCartModal}
          onClick={openCartModal}
        >
          <FontAwesomeIcon
            className="search-tool-icon"
            icon={faCartShopping}
            size="xl"
          />
          <span style={{ color: "orange", fontSize: "15px" }}>
            {cartItemCounter}
          </span>
        </Link>
      ) : (
        <></>
      )}
      <MerchCart
        show={showCartModal}
        handleClose={closeCartModal}
        key={cartItems.merch_id}
      />
    </>
  );
};

export default CartItemCounter;
