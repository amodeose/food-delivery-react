import { Fragment } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const openCart = () => {
    setCartIsShown(true);
  };

  const closeCart = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      { cartIsShown && <Cart onClose={closeCart}/>}
      <Header onOpen={openCart}/>
      <Main />
    </Fragment>
  );
}

export default App;
