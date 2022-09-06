import classes from "./Header.module.css";
import coverPhoto from "../assets/wallpaper.jpg";
import Button from "./UI/Button";
import CartIcon from "./UI/CartIcon";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <h1>React Kitchen</h1>
        <Button onClick={props.onOpen}>Cart <CartIcon /> </Button>
      </div>
      <img src={coverPhoto} alt="table with food and drinks" />
    </header>
  );
};

export default Header;
