import { createSlice, configureStore } from "@reduxjs/toolkit";

const defaultCartState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCartState,
  reducers: {
    add(state, action) {
      state.totalPrice += action.payload.price;
      state.totalItems++;

      const index = state.items.findIndex(
        (item) => item.title === action.payload.title
      );
      const existingItem = state.items[index];

      if (existingItem) {
        state.items[index].amount++;
      } else {
        state.items.push({
          title: action.payload.title,
          price: action.payload.price,
          amount: 1,
        });
      }
    },

    remove(state, action) {
      const index = state.items.findIndex(
        (item) => item.title === action.payload.title
      );
      const existingItem = state.items[index];

      if (!existingItem) {
        return
      };

      state.totalPrice -= action.payload.price;
      state.totalItems--;

      if (state.items[index].amount === 1) {
        state.items = state.items.filter(item => item.title !== action.payload.title);
      } else {
        state.items[index].amount--;
      };

    },

    clear(state) {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    }
  }
});



const store = configureStore({
    reducer: cartSlice.reducer
});

export const cartActions = cartSlice.actions;

export default store;


