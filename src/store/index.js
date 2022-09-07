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
        amount: 1,
      });
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
      totalItems: updatedTotalItems,
    };
  }

  if (action.type === "remove") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.title === action.payload.title
    );
    const existingCartItem = state.items[existingCartItemIndex];

    if (!existingCartItem) {
        return state
    }

    const updatedTotalPrice = state.totalPrice - action.payload.price;
    const updatedTotalItems = state.totalItems - 1;

    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter(item => item.title !== action.payload.title);
    } else {
      const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
        totalItems: updatedTotalItems,
      };

  }

  return state;
};

const store = createStore(cartReducer);

export default store;
