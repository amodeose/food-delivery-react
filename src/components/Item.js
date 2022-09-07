import classes from "./Item.module.css";
import Button from "./UI/Button";


const Item = (props) => {

  

  return (
    <div className={classes.item}>
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>${props.price}</p>
      <div className={classes.itemControls}>
        <Button>Add</Button>
        <Button>Remove</Button>
      </div>
    </div>
  );
};

export default Item;
