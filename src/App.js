import React, { useState } from "react";

// import { Container } from './styles';

import useAPI from "./Hooks/todos";

export default function Hooks() {
  const todos = useAPI("https://todos-dsequjaojf.now.sh/todos");

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
