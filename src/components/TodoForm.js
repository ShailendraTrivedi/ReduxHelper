// components/TodoForm.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action/todosAction";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  //  for TODOS
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>

      {/* Dispaly the TODOS LIST */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoForm;
