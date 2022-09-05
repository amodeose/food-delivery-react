import classes from "./Header.module.css";

const Header = props => {
    return (
        <header className={classes.header}>
            <h1>React Kitchen</h1>
            <h3>Cart</h3>
        </header>
    )
};

export default Header;