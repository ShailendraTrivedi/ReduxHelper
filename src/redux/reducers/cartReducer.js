import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
  CLEAR_CART,
} from "../constants";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const alreadyExist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (alreadyExist) {
        // If the item already exists in the cart, show alert and return the state
        window.alert("Item already present");
        return state;
      } else {
        // If the item doesn't exist in the cart, add it with a quantity of 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: Math.min(item.quantity + 1, 10), // Increase the quantity up to a maximum of 10
              }
            : item
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === action.payload
              ? {
                  ...item,
                  quantity: Math.max(item.quantity - 1, 0), // Decrease the quantity with a minimum of 1
                }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case CLEAR_CART: {
      return {
        cartItems: [],
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
