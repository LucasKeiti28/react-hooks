import React, { useState, useEffect } from "react";

// import { Container } from './styles';

const endpoint = "https://api.github.com/users/codeartistryio";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  });

  async function getUser() {
    const response = await fetch(endpoint);
    const data = await response.json();
    setUser(data);
  }

  return <p>user</p>;
}
