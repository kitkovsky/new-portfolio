import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Header = styled.header`
  display: flex;
  max-height: 10rem;
  margin: 0rem 5rem;
  position: sticky;
  top: 0;
  backdrop-filter: blur(20px);
  z-index: 2;
`;

const Logo = styled.a`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 0rem;

  img {
    height: 80%;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex-grow: 3;
  align-items: center;
  justify-content: space-evenly;

  li {
    list-style: none;
  }

  a {
    font-size: 2rem;
  }

  @media screen and (max-width: 950px) {
    flex-grow: 20;
  }

  @media screen and (max-width: 750px) {
    background: red;
  }
`;

const Nav: React.FC = () => {
  return (
    <Header>
      <Logo href="#hero">
        <img src={logo} alt="logo" />
      </Logo>
      <Ul>
        <li><a href="#hero">Strona Główna</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#tools">Umiejętności</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </Ul>
    </Header>
  );
};

export default Nav;
