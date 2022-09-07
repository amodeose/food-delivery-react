import classes from "./Header.module.css";
import coverPhoto from "../assets/wallpaper.jpg";
import Button from "./UI/Button";
import CartIcon from "../assets/CartIcon";
import { useSelector } from "react-redux/es/exports";

const Header = (props) => {

  const totalItems = useSelector(state => state.totalItems);

  return (
    <header className={classes.header}>
      <div>
        <h1>React Kitchen</h1>
        <Button onClick={props.onOpen}>({totalItems}) Cart <CartIcon /> </Button>
      </div>
      <img src={coverPhoto} alt="table with food and drinks" />
    </header>
  );
};

export default Header;
