import React, { useEffect } from "react";
import styled from "styled-components";
import heroImage from "../assets/hero-img.svg";
import { PrimaryColours } from "../styles/GlobalStyles";
import chevronDown from "../assets/chevron.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideLeft, slideBottom } from "../animations/animations";

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

const Arrow = styled(motion.img)`
  height: 1.5rem;
`;

const Hero: React.FC = () => {
  const controls = useAnimation();
  const [textRef, textInView] = useInView({ triggerOnce: true });
  const [imgRef, imgInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (textInView) {
      controls.start("visible");
    }
  }, [controls, textInView]);

  useEffect(() => {
    if (imgInView) {
      controls.start("visible");
    }
  }, [controls, imgInView]);

  return (
    <Section id="hero">
      <HeroText
        ref={textRef}
        initial="hidden"
        animate={controls}
        variants={slideLeft}
      >
        <p className="hero-colour">Oliwer Kitkowski</p>
        <HeroMainText>Nowoczesne strony internetowe</HeroMainText>
        <p>
          Tworzę nowoczesne, wysokowydajne i responsywne strony internetowe z
          wykorzystaniem najnowszych technologii.
        </p>
        <ScrollDown>
          <Arrow
            src={chevronDown}
            initial={{ opacity: 1, y: "-0.2rem" }}
            animate={{ opacity: 0, y: "0.7rem" }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          ></Arrow>
          <a href="#portfolio">Zobacz portfolio</a>
        </ScrollDown>
      </HeroText>
      <HeroImg
        ref={imgRef}
        initial="hidden"
        animate={controls}
        variants={slideBottom}
      >
        <img src={heroImage} alt="hero code" />
      </HeroImg>
    </Section>
  );
};

export default Hero;
