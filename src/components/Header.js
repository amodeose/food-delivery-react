import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <h1>React Kitchen</h1>
        <h3>Cart</h3>
      </div>
      <img src={require("../assets/wallpaper.jpg")} alt="food wallpaper"/>
    </header>
  );
};

export default Header;
