import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import logo from "./assets/logo.svg";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>well hello there</h1>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default App;
