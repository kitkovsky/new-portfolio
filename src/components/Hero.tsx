import React from "react";
import styled from "styled-components";
import heroImage from "../assets/hero-img.svg";
import { PrimaryColours } from "../styles/GlobalStyles";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Section = styled.section`
  margin: 7rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    margin: 5rem 3rem;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    margin: 3rem 2rem;
  }
`;

const HeroText = styled(motion.div)`
  flex: 1 1 20rem;
  margin-right: 2rem;

  .hero-colour {
    color: ${PrimaryColours.blue};
    font-size: 3rem;
  }

  p {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 750px) {
    margin-right: 0rem;
  }
`;

const HeroMainText = styled.h1`
  font-weight: bold;
`;

const ScrollDown = styled.div`
  cursor: pointer;

  svg {
    color: ${PrimaryColours.blue};
    height: 2rem;
  }

  a {
    padding: 1rem;
    color: ${PrimaryColours.blue};
    font-size: 1.8rem;
  }
`;

const HeroImg = styled(motion.div)`
  flex: 1 1 20rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    max-width: 90%;
  }

  @media screen and (max-width: 750px) {
    justify-content: center;
  }
`;

const Hero: React.FC = () => {
  return (
    <Section id="hero">
      <HeroText>
        <p className="hero-colour">Oliwer Kitkowski</p>
        <HeroMainText>Nowoczesne strony internetowe</HeroMainText>
        <p>
          Tworzę nowoczesne, wysokowydajne i responsywne strony internetowe z
          wykorzystaniem najnowszych technologii.
        </p>
        <ScrollDown>
          <FontAwesomeIcon icon={faChevronDown} />
          <a href="#portfolio">Zobacz portfolio</a>
        </ScrollDown>
      </HeroText>
      <HeroImg>
        <img src={heroImage} alt="hero code" />
      </HeroImg>
    </Section>
  );
};

export default Hero;
