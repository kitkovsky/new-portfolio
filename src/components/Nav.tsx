import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Header = styled.header`
  display: flex;
  align-items: center;
  max-height: 10rem;
  position: sticky;
  top: 0;
  backdrop-filter: blur(20px);
  z-index: 2;
  padding: 0rem 5rem;

  @media screen and (max-width: 900px) {
    padding: 0rem 3rem;
  }

  @media screen and (max-width: 750px) {
    max-height: 7rem;
  }
`;

const Logo = styled.a`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 0rem;

  img {
    height: 3rem;
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

const Burger = styled.div`
  cursor: pointer;
  height: 1.5rem;
  width: 3.2rem;
  transform: rotate(0deg);
  transition: all 0.5 ease-in-out;

  span {
    display: block;
    position: absolute;
    height: 1px;
    background: white;
  }

  span:nth-child(1) {
    top: 0rem;
    left: 0.8rem;
    width: 2.4rem;
  }

  span:nth-child(2),
  span:nth-child(3) {
    width: 100%;
    top: 0.8rem;
  }

  span:nth-child(4) {
    top: 1.6rem;
    left: 1.2rem;
    width: 2rem;
  }
`;

const Nav: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <Header>
      <Logo href="#hero">
        <img src={logo} alt="logo" />
      </Logo>
      <Ul>
        <li>
          <a href="#hero">Strona Główna</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#tools">Umiejętności</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </Ul>
      <UlMobileWrapper mobileNavOpen={mobileNavOpen}>
        <UlMobile>
          <li>
            <a href="#hero">Strona Główna</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#tools">Umiejętności</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </UlMobile>
      </UlMobileWrapper>
      <Burger onClick={handleMobileNav}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Burger>
    </Header>
  );
};

export default Nav;
