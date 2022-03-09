import React, { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import UpArrow from "./components/UpArrow";
import "swiper/css/bundle";

const App: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen} />
      <Hero />
      <Portfolio />
      <Tools />
      <Contact />
      <Footer />
      <UpArrow mobileNavOpen={mobileNavOpen} />
    </div>
  );
};

export default App;
