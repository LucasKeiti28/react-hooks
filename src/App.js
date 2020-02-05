import React, { useState, createContext } from "react";

// import { Container } from './styles';

import Footer from "./components/footer";
import Body from "./components/body";
import Header from "./components/header";

export default function Hooks() {
  const [user] = useState({ name: "Lucas" });
  const UserContext = createContext();

  return (
    <UserContext.Provider value={user}>
      <Header />
      <Body />
      <Footer />
    </UserContext.Provider>
  );
}
