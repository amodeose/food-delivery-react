import classes from "./OrderForm.module.css";
import Button from "../UI/Button";

const OrderForm = (props) => {
  return (
    <form className={classes.orderForm}>
      <h1>Details</h1>
      <label>First Name</label>
      <input />
      <label>Last Name</label>
      <input />
      <label>Address</label>
      <input />
      <label>Postal Code</label>
      <input />
      <div className={classes.formControls}>
        <Button onClick={props.handleCancel}>Cancel</Button>
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default OrderForm;
