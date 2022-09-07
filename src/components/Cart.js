import classes from "./Cart.module.css";
import Modal from "./UI/Modal";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const totalPrice = useSelector((state) => state.totalPrice);

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cartContent}>
        <h1>Total Price: {totalPrice}</h1>
      </div>
    </Modal>
  );
};

export default Cart;
