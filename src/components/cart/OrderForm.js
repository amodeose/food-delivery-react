import classes from "./OrderForm.module.css";
import Button from "../UI/Button";
import { useRef, useState } from "react";

const OrderForm = (props) => {
  const [submitted, setSubmitted] = useState(false);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const postalCodeRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

  }

  return (
    <form onSubmit={submitHandler} className={classes.orderForm}>
      <h1>Details</h1>
      <label>First Name</label>
      <input ref={firstNameRef}/>
      <label>Last Name</label>
      <input ref={lastNameRef}/>
      <label>Address</label>
      <input ref={addressRef}/>
      <label>Postal Code</label>
      <input ref={postalCodeRef}/>
      <div className={classes.formControls}>
        <Button onClick={props.handleCancel}>Cancel</Button>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  );
};

export default OrderForm;
