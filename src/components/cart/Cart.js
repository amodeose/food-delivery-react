import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import { cartActions } from "../../store";

const Cart = (props) => {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.totalPrice);
  const items = useSelector((state) => state.items);

  const handleClose = () => {
    props.onClose();
  }

  const handleClear = () => {
    dispatch(cartActions.clear());
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
    <Modal onClose={props.onClose}>
      <div className={classes.cartContent}>
        <h1>Cart</h1>
        <div className={classes.cartItems}>{cartItems}</div>
        <h1>Total Price: ${totalPrice.toFixed(2)}</h1>
        <div className={classes.cartControls}>
          <Button onClick={handleClear}>Clear Cart</Button>
          <Button onClick={handleClose}>Close</Button>
          <Button>Order</Button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
