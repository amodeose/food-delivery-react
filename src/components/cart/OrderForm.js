import classes from "./OrderForm.module.css";

const OrderForm = (props) => {
  return (
    <form className={classes.orderForm}>
      <label>First Name</label>
      <input />
      <label>Last Name</label>
      <input />
      <label>Address</label>
      <input />
      <label>Postal Code</label>
      <input />
    </form>
  );
};

export default OrderForm;
