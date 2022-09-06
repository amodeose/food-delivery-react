import classes from "./Categories.module.css";
import Button from "./UI/Button";

const categories = ["Pasta", "Burgers"];

const Categories = (props) => {

  const categoryButtons = categories.map((category) => (
    <Button onClick={() => {props.chooseCategory(category)}}>{category}</Button>
  ));

  return (
    <nav className={classes.categories}>
      <h1>Choose a Category:</h1>
      {categoryButtons}
    </nav>
  );
};

export default Categories;
