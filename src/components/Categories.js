import classes from "./Categories.module.css";

const Categories = (props) => {
  return (
    <nav className={classes.categories}>
      <h1>Choose a Category:</h1>
      <h3>Pasta</h3>
      <h3>Sandwiches</h3>
      <h3>Burgers</h3>
      <h3>Coffee</h3>
    </nav>
  );
};

export default Categories;
