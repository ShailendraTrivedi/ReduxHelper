import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/action/counterActions";

const Counter = () => {
  const count = useSelector((state) => state.counter);

  console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
