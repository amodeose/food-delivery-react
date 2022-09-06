import classes from "./Item.module.css";
import Card from "./UI/Card";

const Item = props => {
    return <Card className={classes.item}>
        <img src={props.img}/>
        <p>{props.title}</p>
        <p>{props.price}</p>
    </Card>
};

export default Item;