import React, { useRef, useEffect, useState } from "react";

// import { Container } from './styles';

// useRef permite acessar os elementos do DOM

export default function Hooks() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  // useEffect(() => {
  //   firstInputRef.current.focus();
  // });

  return (
    <div>
      <p>Hooks!</p>
      <button onClick={() => setFirstInput(firstInputRef.current.focus())}>
        First Input
      </button>
      <button onClick={() => setSecondInput(secondInputRef.current.focus())}>
        Second Input
      </button>
      <form action="submit">
        <input type="text" ref={firstInputRef} />
        <input type="text" ref={secondInputRef} />
      </form>
    </div>
  );
}
