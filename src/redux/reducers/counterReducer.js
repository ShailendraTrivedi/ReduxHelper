
import { INCREMENT, DECREMENT } from '../constants';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state < 10 ? state + 1 : state;
    case DECREMENT:
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
};

export default counterReducer;
