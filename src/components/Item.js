import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={classes.item}>
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>${props.price}</p>
    </div>
  );
};

export default Item;
