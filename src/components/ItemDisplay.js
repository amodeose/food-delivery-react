import classes from "./ItemDisplay.module.css";
import items from "../assets/items";
import Item from "./Item";

const ItemDisplay = (props) => {
  const itemCards = items[props.category].map((item) => (
    <Item title={item.title} img={item.img} price={item.price} />
  ));

  return <div className={classes.display}>
    {itemCards}
  </div>;
};

export default ItemDisplay;
