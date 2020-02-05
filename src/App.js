import React, { useState, useMemo } from "react";

// import { Container } from './styles';

export default function Hooks() {
  const [wordIndex, setWordIndex] = useState(0);
  const [counter, setCounter] = useState(0);

  const words = ["i", "am", "learning", "react"];
  const word = words[wordIndex];

  function getLetterCount() {
    let i = 0;
    while (i < 10) i++;
    return word.length;
  }

  const letterCount = useMemo(() => getLetterCount(word), [
    getLetterCount,
    word
  ]);

  function handleIndexOf() {
    const next = wordIndex + 1 === word.length ? 0 : wordIndex + 1;
    setWordIndex(next);
  }

  return (
    <div>
      <p>Hooks!</p>
      <p>
        {word} has {letterCount} letters.
      </p>
      <button onClick={handleIndexOf}>Next word</button>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}
