import { createStore } from "redux";

const defaultCartState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

const cartReducer = (state = defaultCartState, action) => {
  if (action.type === "add") {
    //total price and items can be updated without checking anything
    const updatedTotalPrice = state.totalPrice + action.payload.price;
    const updatedTotalItems = state.totalItems + 1;

    //look for existing item in cart and assign it to existingCartItem
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.title === action.payload.title
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat({
        title: action.payload.title,
        price: action.payload.price,
        amount: 1
      });
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
      totalItems: updatedTotalItems,
    };
  }

  if (action.type === "remove") {
    return {
      items: state.items,
      totalPrice: state.totalPrice,
      totalItems: state.totalItems - 1,
    };
  }

  return state;
};

const store = createStore(cartReducer);

export default store;
