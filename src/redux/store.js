import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import todosReducer from "./reducers/todosReducer";
import dataReducer from "./reducers/dataReducer";
import cartReducer from "./reducers/cartReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    datas: dataReducer,
    cart: cartReducer,
  },
});

export default store;
