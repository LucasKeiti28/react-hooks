import React, { useState, useRef } from "react";

// import { Container } from './styles';

export default function App() {
  const [query, setQuery] = useState("");
  const searchInput = useRef("");

  function handleClearSearch() {
    searchInput.current.value = "Digite Aqui";
    searchInput.current.focus();
  }

  return (
    <form action="onSubmit">
      <input
        type="text"
        onChange={event => setQuery(event.target.value)}
        ref={searchInput}
      />
      <button type="submit">Search</button>
      <button type="button" onClick={handleClearSearch}>
        Clear
      </button>
      <p>{query}</p>
    </form>
  );
}
