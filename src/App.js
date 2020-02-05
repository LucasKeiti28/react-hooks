import React, { useEffect, useState } from "react";

// import Users from "./API/users.json";
// import { Container } from './styles';

export default function Hooks() {
  const [count, setCounter] = useState(0);

  // useEffect(() => {
  //   fetch(Users)
  //     .then(res => res.json())
  //     .then(data => setUser(data));
  // }, []);

  // function eventHandler() {
  //   return window.alert("TESTE");
  // }

  useEffect(() => {
    if (count === 10) {
      return window.alert("Chegou em 10!");
    }
  });

  return (
    <div>
      {/* <ul>
        {names.map(name => (
          <li key={name.id}>{name.name}</li>
        ))}
      </ul> */}
      <p>Teste</p>
      <button onClick={() => setCounter(count + 1)}>Incrementar</button>
      <p>{count}</p>
    </div>
  );
}
