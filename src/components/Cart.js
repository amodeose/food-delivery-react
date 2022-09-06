import classes from "./Cart.module.css";
import Modal from "./UI/Modal";

const Cart = props => {
    return <Modal onClose={props.onClose}>Cart</Modal>
};

export default Cart;