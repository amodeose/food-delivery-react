import classes from "./OrderForm.module.css";
import Button from "../UI/Button";
import { useRef, useState } from "react";

const OrderForm = (props) => {
  const [submitted, setSubmitted] = useState(false);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const postalCodeRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const firstName = firstNameRef.current.value.trim()
    const lastName = lastNameRef.current.value.trim()
    const address = addressRef.current.value.trim()
    const postalCode = postalCodeRef.current.value.trim()
    if (firstName && lastName && address && postalCode) {
      setSubmitted(true);
    };

    if (!firstName) {
      firstNameRef.current.className = classes.invalid;
    };
    if (!lastName) {
      lastNameRef.current.className = classes.invalid;
    };
    if (!address) {
      addressRef.current.className = classes.invalid;
    };
    if (!postalCode) {
      postalCodeRef.current.className = classes.invalid;
    };
  };

  const changeHandler = event => {
    event.target.className = "";
  }

  if (submitted) {
    return (
      <div>
        <h1>Order Submitted</h1>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler} className={classes.orderForm}>
      <h1>Details</h1>
      <label>First Name</label>
      <input onChange={changeHandler} ref={firstNameRef} />
      <label>Last Name</label>
      <input onChange={changeHandler} ref={lastNameRef} />
      <label>Address</label>
      <input onChange={changeHandler} ref={addressRef} />
      <label>Postal Code</label>
      <input onChange={changeHandler} ref={postalCodeRef} />
      <div className={classes.formControls}>
        <Button onClick={props.handleCancel}>Cancel</Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default OrderForm;
