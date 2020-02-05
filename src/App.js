import React, { useState, useEffect } from "react";

// import { Container } from './styles';

function App() {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["blue", "green", "red", "orange"];

  // O DOM eh uma api do browser.
  useEffect(() => {
    document.body.style.backgroundColor = colors[colorIndex];
  });

  function handleChangeIndex() {
    // Quando chegar no final do Array, volta pro index === 0
    const next = colorIndex + 1 === colors.length ? 0 : colorIndex + 1;
    // const next = colorIndex + 1;
    setColorIndex(next);
  }

  return (
    <button
      onClick={() => {
        handleChangeIndex();
      }}
    >
      Change Color
    </button>
  );
}

export default App;
