import { Button, Col, Row } from "react-bootstrap";
import CartContext from "../contexts/CartContext";
import { getProductData } from "../components/MerchList";
import { useContext } from "react";
import { Form } from "react-router-dom";

function CartItems(props) {
  const { merch_id, qty } = props;
  const itemData = getProductData(merch_id);
  const { deleteItemFromCart } = useContext(CartContext);

  return (
    <>
      <div className="d-flex align-items-center">
        <img className="pe-3" src={itemData.item_img} height={45} />
        <h5>{itemData.item_name}</h5>
      </div>
      <p>Qty: {qty}</p>

      <h5>price: ${(qty * itemData.price).toFixed(2)}</h5>

      <Button size="sm" onClick={() => deleteItemFromCart(merch_id)}>
        Remove
      </Button>
      <hr></hr>
    </>
  );
}

export default CartItems;
