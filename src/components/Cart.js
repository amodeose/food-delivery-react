import classes from "./Cart.module.css";
import Modal from "./UI/Modal";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const totalPrice = useSelector((state) => state.totalPrice);
  const items = useSelector((state) => state.items);

  const cartItems = items.map((item) => (
    <p>
      {item.title}: {item.amount}
    </p>
  ));

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cartContent}>
        {cartItems}
        <h1>Total Price: ${totalPrice.toFixed(2)}</h1>
      </div>
    </Modal>
  );
};

export default Cart;
