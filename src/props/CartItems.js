import { Button } from "react-bootstrap";
import CartContext from "../contexts/CartContext";
import { getProductData } from "../components/MerchList";
import { useContext } from "react";

function CartItems(props) {
  const { deleteItemFromCart } = useContext(CartContext);
  const merch_id = props.merch_id;
  const qty = props.qty;
  const itemData = getProductData(props.merch_id);

  return (
    <>
      <img src={itemData.item_img} height={45} />
      <h4>{itemData.item_name}</h4>

      <p>{qty} Total</p>
      <p>${(qty * itemData.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => deleteItemFromCart(merch_id)}>
        Remove
      </Button>
      <hr></hr>
    </>
  );
}

export default CartItems;
