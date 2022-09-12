import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import OrderForm from "./OrderForm";
import { useState } from "react";
import CartItems from "./CartItems";

const Cart = (props) => {
  const [showForm, setShowForm] = useState(false);

  const handleOrder = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cartContent}>
        {!showForm && <CartItems onClose={props.onClose} handleOrder={handleOrder}/>}
        {showForm && <OrderForm handleCancel={handleCancel}/>}
      </div>
    </Modal>
  );
};

export default Cart;
