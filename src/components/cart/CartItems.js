import classes from "./CartItems.module.css";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import { cartActions } from "../../store";
import { useSelector, useDispatch } from "react-redux";

const CartItems = (props) => {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.totalPrice);
  const items = useSelector((state) => state.items);

  const handleClose = () => {
    props.onClose();
  };

  const handleClear = () => {
    dispatch(cartActions.clear());
  }

  const handleOrder = () => {
    props.handleOrder();
  }

  if (items.length === 0) {
    handleClose();
  }

  const cartItems = items.map((item) => (
    <CartItem
      key={item.title}
      price={item.price}
      title={item.title}
      amount={item.amount}
    />
  ));

  return (
    <div>
      <h1>Cart</h1>
      <div className={classes.cartItems}>{cartItems}</div>
      <h1>Total Price: ${totalPrice.toFixed(2)}</h1>
      <div className={classes.cartControls}>
        <Button onClick={handleClear}>Clear Cart</Button>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleOrder}>Order</Button>
      </div>
    </div>
  );
};

export default CartItems;
