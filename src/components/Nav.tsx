import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import noise from "../assets/noise.png";
import { PrimaryColours } from "../styles/GlobalStyles";
import { SectionState, SectionNames } from "../App";

const Header = styled.header`
  display: flex;
  align-items: center;
  max-height: 10rem;
  position: sticky;
  top: 0;
  backdrop-filter: blur(20px);
  z-index: 2;
  padding: 0rem 5rem;

  .active {
    transform: translateX(0);
  }

  .active span:nth-child(1) {
    top: 0.8rem;
    width: 0;
    left: 50%;
  }

  .active span:nth-child(2) {
    top: 0.8rem;
    transform: rotate(45deg);
  }

  .active span:nth-child(3) {
    top: 0.8rem;
    transform: rotate(-45deg);
  }

  .active span:nth-child(4) {
    top: 0.8rem;
    width: 0;
    left: 50%;
  }

  @media screen and (max-width: 900px) {
    padding: 0rem 3rem;
  }

  @media screen and (max-width: 750px) {
    max-height: 7rem;
  }

  @media screen and (max-width: 500px) {
    padding: 0rem 2rem;
  }
`;

const Logo = styled.a`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 0rem;
  z-index: 2;

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
    color: ${PrimaryColours.textGrey};
    transition: all 0.7s;
  }

  .activeSection {
    a {
      color: ${PrimaryColours.white};
      text-decoration: underline;
      text-decoration-thickness: 0.15rem;
    }
  }

  @media screen and (max-width: 950px) {
    flex-grow: 20;
  }

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const UlMobileWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(100vw);
  background: ${PrimaryColours.bgBlack};
  background-image: url(${noise});
  transition: transform 0.5s ease-in-out;
`;

const UlMobile = styled.ul`
  list-style: none;
  margin-left: 1rem;
  margin-top: 20vh;

  li {
    padding: 1rem;
  }

  a {
    font-size: 4rem;
    color: ${PrimaryColours.textGrey};
    transition: all 0.7s;
  }

  .activeSection {
    color: ${PrimaryColours.white};
    text-decoration: underline;
    text-decoration-thickness: 0.15rem;
    text-underline-offset: 0.5rem;
  }
`;

const Burger = styled.div`
  cursor: pointer;
  height: 1.5rem;
  width: 3.2rem;
  transform: rotate(0deg);
  transition: all 0.5s ease-in-out;
  display: none;

  span {
    display: block;
    position: absolute;
    height: 1px;
    background: ${PrimaryColours.white};
    transition: all 0.25s ease-in-out;
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

  @media screen and (max-width: 750px) {
    display: block;
  }
`;

interface Props {
  mobileNavOpen: boolean;
  setMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sectionStates: SectionState[];
}

const Nav: React.FC<Props> = ({
  mobileNavOpen,
  setMobileNavOpen,
  sectionStates,
}) => {
  const handleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <Header>
      <Logo href="#hero">
        <img src={logo} alt="logo" />
      </Logo>
      <Ul>
        <li
          className={
            sectionStates[SectionNames.Hero].state ? "activeSection" : ""
          }
        >
          <a href="#hero">Strona g????wna</a>
        </li>
        <li
          className={
            sectionStates[SectionNames.Portfolio].state ? "activeSection" : ""
          }
        >
          <a href="#portfolio">Portfolio</a>
        </li>
        <li
          className={
            sectionStates[SectionNames.Tools].state ? "activeSection" : ""
          }
        >
          <a href="#tools">Umiej??tno??ci</a>
        </li>
        <li
          className={
            sectionStates[SectionNames.Contact].state ? "activeSection" : ""
          }
        >
          <a href="#contact">Kontakt</a>
        </li>
      </Ul>
      <UlMobileWrapper className={mobileNavOpen ? "active" : ""}>
        <UlMobile>
          <li>
            <a
              href="#hero"
              onClick={handleMobileNav}
              className={
                sectionStates[SectionNames.Hero].state ? "activeSection" : ""
              }
            >
              Strona g????wna
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={handleMobileNav}
              className={
                sectionStates[SectionNames.Portfolio].state
                  ? "activeSection"
                  : ""
              }
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#tools"
              onClick={handleMobileNav}
              className={
                sectionStates[SectionNames.Tools].state ? "activeSection" : ""
              }
            >
              Umiej??tno??ci
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleMobileNav}
              className={
                sectionStates[SectionNames.Contact].state ? "activeSection" : ""
              }
            >
              Kontakt
            </a>
          </li>
        </UlMobile>
      </UlMobileWrapper>
      <Burger
        onClick={handleMobileNav}
        className={mobileNavOpen ? "active" : ""}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Burger>
    </Header>
  );
};

export default Nav;
