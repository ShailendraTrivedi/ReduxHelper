import { ADD_TODO } from "../constants";

const initialState = [];
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todosReducer;
