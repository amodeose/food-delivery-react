import classes from "./CartItem.module.css";
import Button from "../UI/Button";

const CartItem = (props) => {

  const currentItem = {
    title: props.title,
    price: props.price,
  };

  const addItem = () => {
    dispatch(cartActions.add(currentItem));
  };

  const removeItem = () => {
    dispatch(cartActions.remove(currentItem));
  };
  
  return (
    <div className={classes.cartItem}>
      <h3>{props.title}</h3>
      <Button className={classes.add}>+</Button>
      <h2>{props.amount}</h2>
      <Button className={classes.remove}>-</Button>
    </div>
  );
};

export default CartItem;
