import { createStore } from 'redux';

const defaultCartState = {
    items: [],
    totalPrice: 0,
    totalItems: 0
};

const cartReducer = (state = defaultCartState, action) => {
    if (action.type === 'add') {
        console.log('adding item');
        return {
            items: state.items.concat(action.payload),
            totalPrice: state.totalPrice,
            totalItems: state.totalItems + 1
        };
    }

    if (action.type === 'remove') {
        console.log('removing item');
        return {
            items: state.items,
            totalPrice: state.totalPrice,
            totalItems: state.totalItems - 1
        };
    }

    return state;
};

const store = createStore(cartReducer);

export default store;