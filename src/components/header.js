import React, { useContext } from "react";

// import { Container } from './styles';

const theme = useContext(UserContext);

export default function header({ user }) {
  return (
    <UserContext.Consumer>
      <div>{theme => <p>Welcome, {theme.name}</p>}</div>
    </UserContext.Consumer>
  );
}
