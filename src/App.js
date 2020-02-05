import React, { useState, useCallback, useEffect } from "react";

// import { Container } from './styles';

export default function Hooks() {
  const [time, setTime] = useState();
  const [count, setCount] = useState(0);

  const inc = useCallback(
    function handleIncrementCoung() {
      setCount(prevCount => prevCount + 1);
    },
    [setCount]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentTime = JSON.stringify(new Date(Date.now()));
      setTime(currentTime);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [time]);

  return (
    <div>
      <p>Hooks!</p>
      <p>The current time is: {time}</p>
      <p>Count: {count}</p>
      <button onClick={inc}>+</button>
    </div>
  );
}
