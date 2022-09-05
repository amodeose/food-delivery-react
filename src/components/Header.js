import classes from "./Header.module.css";
import coverPhoto from "../assets/wallpaper.jpg";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <h1>React Kitchen</h1>
        <h3>Cart</h3>
      </div>
      <img src={coverPhoto} alt="table with food and drinks" />
    </header>
  );
};

export default Header;
