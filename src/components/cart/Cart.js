import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Button from "../UI/Button";

const Cart = (props) => {
  const totalPrice = useSelector((state) => state.totalPrice);
  const items = useSelector((state) => state.items);

  if (items.length === 0) {
    props.onClose();
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
          <Button>Clear Cart</Button>
          <Button>Close</Button>
          <Button>Order</Button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
