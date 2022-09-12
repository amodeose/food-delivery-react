import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import OrderForm from "./OrderForm";
import { cartActions } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import CartItems from "./CartItems";

const Cart = (props) => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = () => {
    setShowForm(true);
  };

  const handleClear = () => {
    dispatch(cartActions.clear());
  };

  const handleClose = () => {
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cartContent}>
        <CartItems onClose={props.onClose} />
        {showForm && <OrderForm />}
        <div className={classes.cartControls}>
          <Button onClick={handleClear}>Clear Cart</Button>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleOrder}>Order</Button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
