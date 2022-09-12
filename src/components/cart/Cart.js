import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import OrderForm from "./OrderForm";
import { cartActions } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Cart = (props) => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.totalPrice);
  const items = useSelector((state) => state.items);

  const handleOrder = () => {
    setShowForm(true);
  }

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
        {showForm && <OrderForm />}
        <div className={classes.cartControls}>
          <Button onClick={handleClear}>Clear Cart</Button>
          <Button onClick={handleClose}>Close</Button>
          {!showForm && <Button onClick={handleOrder}>Order</Button>}
          {showForm && <Button>Submit</Button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
