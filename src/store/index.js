import { createStore } from 'redux';

const defaultCartState = {
    items: [],
    totalPrice: 0
};

const cartReducer = (state = defaultCartState, action) => {
    if (action.type === 'add') {
        console.log('adding item');
        return state;
    }

    if (action.type === 'remove') {
        console.log('removing item');
        return state;
    }

    return state;
};

const store = createStore(cartReducer);

export default store;