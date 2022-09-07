import classes from "./Main.module.css";
import Categories from "./Categories";
import ItemDisplay from "./ItemDisplay";
import { useState } from "react";

const Main = (props) => {

  const [category, setCategory] = useState('Pasta');

  const chooseCategory = userChoice => {
    setCategory(userChoice);
  }

  return (
    <main className={classes.main}>
      <Categories chooseCategory={chooseCategory}/>
      <ItemDisplay category={category}/>
    </main>
  );
};

export default Main;
