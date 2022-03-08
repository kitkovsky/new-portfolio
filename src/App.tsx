import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Hero />
      <Portfolio />
      <Tools />
      <Contact />
    </div>
  );
}

export default App;
