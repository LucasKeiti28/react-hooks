import React, { useState, useEffect } from "react";

// import { Container } from './styles';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("mousemove", event => {
      const { pageX, pageY } = event;
      setMousePosition({ x: pageX, y: pageY });
    });

    return () => {
      window.removeEventListener("mousemove", event => {
        const { pageX, pageY } = event;
        setMousePosition({ x: pageX, y: pageY });
      });
    };
  }, []);
  return (
    <div>
      <h1>The current mouse position is:</h1>
      <p>
        X: {mousePosition.x}, Y: {mousePosition.y}
      </p>
    </div>
  );
}

export default App;
