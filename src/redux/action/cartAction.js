import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
} from "../constants";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};
export const increaseQuantity = (itemId) => {
  return {
    type: INCREASE_QUANTITY,
    payload: itemId,
  };
};
export const decreaseQuantity = (itemId) => {
  return {
    type: DECREASE_QUANTITY,
    payload: itemId,
  };
};

export const removeItem = (itemId) => {
  return {
    type: REMOVE_ITEM,
    payload: itemId,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
    payload: null,
  };
};
