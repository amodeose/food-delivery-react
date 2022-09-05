import classes from "./Main.module.css";
import Categories from "./Categories";
import ItemDisplay from "./ItemDisplay";

const Main = (props) => {
  return (
    <main className={classes.main}>
      <Categories />
      <ItemDisplay />
    </main>
  );
};

export default Main;
