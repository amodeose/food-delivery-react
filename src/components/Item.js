import classes from "./Item.module.css";
import Button from "./UI/Button";
import { useDispatch } from "react-redux/es/exports";

const Item = (props) => {
  const dispatch = useDispatch();

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
      <div className={classes.itemControls}>
        <Button onClick={addItem}>Add</Button>
        <Button onClick={removeItem}>Remove</Button>
      </div>
    </div>
  );
};

export default Item;
