import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";
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
          className="text-white mx-2"
          to={openCartModal}
          onClick={openCartModal}
        >
          <FontAwesomeIcon icon={faCartShopping} size="xl" />
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
