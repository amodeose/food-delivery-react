import classes from "./CartItem.module.css";
import Button from "../UI/Button";
import { cartActions } from "../../store/index";
import { useDispatch, useSelector } from "react-redux/es/exports";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

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
      <Button onClick={addItem} className={classes.add}>+</Button>
      <h2>{props.amount}</h2>
      <Button onClick={removeItem} className={classes.remove}>-</Button>
    </div>
  );
};

export default CartItem;
