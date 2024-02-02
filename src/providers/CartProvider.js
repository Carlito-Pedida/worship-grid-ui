import axios from "axios";
import CartContext from "../contexts/CartContext";
import { useState } from "react";
import { getProductData } from "../components/MerchList";

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]); // [{merch_id:}]

  function getItemQty(merch_id) {
    const qty = cartItems.find((item) => item.merch_id === merch_id)?.qty;

    if (qty === undefined) {
      return 0;
    }
    return qty;
  }

  function addItemToCart(merch_id) {
    const qty = getItemQty(merch_id);

    if (qty === 0) {
      setCartItems([
        ...cartItems,
        {
          merch_id: merch_id,

          qty: 1
        }
      ]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.merch_id === merch_id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    }
  }

  function removeItemFromCart(merch_id) {
    const qty = getItemQty(merch_id);

    if (qty == 1) {
      deleteItemFromCart(merch_id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.merch_id === merch_id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  }

  function deleteItemFromCart(merch_id) {
    setCartItems((cartItems) =>
      cartItems.filter((currentItem) => {
        return currentItem.merch_id != merch_id;
      })
    );
  }

  function calculateTotal() {
    let totalCost = 0;
    cartItems.map((cartItem) => {
      const merchItemData = getProductData(cartItem.merch_id);
      totalCost += merchItemData.price * cartItem.qty;
    });
    return totalCost;
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        getItemQty,
        addItemToCart,
        removeItemFromCart,
        deleteItemFromCart,
        calculateTotal
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
