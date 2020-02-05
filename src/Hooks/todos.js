import { useState, useEffect } from "react";

// import { Container } from './styles';

export default function useAPI(endpoint) {
  const [value, setValue] = useState([]);

  useEffect(() => {
    getData();
  }, [getData]);

  async function getData() {
    const response = await fetch(endpoint);
    const data = await response.json();
    setValue(data);
  }

  return value;
}
