import classes from "./Item.module.css";
import Button from "./UI/Button";
import { useDispatch, useSelector } from "react-redux/es/exports";

const Item = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const existingItemIndex = items.findIndex(
    (item) => item.title === props.title
  );
  const existingItem = items[existingItemIndex];

  const currentAmount = existingItem ? existingItem.amount : 0;

  const currentItem = {
    title: props.title,
    price: props.price,
  };

  const addItem = () => {
    dispatch({ type: "add", payload: currentItem });
  };

  const removeItem = () => {
    dispatch({ type: "remove", payload: currentItem });
  };

  return (
    <div className={classes.item}>
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>${props.price}</p>
      <p className={classes.currentAmount}>Quantity: {currentAmount}</p>
      <div className={classes.itemControls}>
        <Button onClick={addItem}>Add</Button>
        <Button onClick={removeItem}>Remove</Button>
      </div>
    </div>
  );
};

export default Item;
