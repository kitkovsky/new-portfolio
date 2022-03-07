import React from "react";
import styled from "styled-components";
import heroImage from "../assets/hero-img.svg";
import { PrimaryColours } from "../styles/GlobalStyles";

const Section = styled.section`
  margin: 7rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const HeroText = styled.div`
  flex: 1 1 20rem;
  margin-right: 2rem;

  .hero-name {
    color: ${PrimaryColours.blue}
  }
`;

const HeroMainText = styled.h1`
  font-weight: bold;
`;

const HeroImg = styled.div`
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
        <p className="hero-name">Oliwer Kitkowski</p>
        <HeroMainText>Nowoczesne strony internetowe</HeroMainText>
        <p>
          Tworzę nowoczesne, wysokowydajne i responsywne strony internetowe z
          wykorzystaniem najnowszych technologii.
        </p>
      </HeroText>
      <HeroImg>
        <img src={heroImage} alt="hero code" />
      </HeroImg>
    </Section>
  );
};

export default Hero;
