import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faReact,
  faFigma,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { PrimaryColours } from "../styles/GlobalStyles";
import styled from "styled-components";
import typescript from "../assets/typescript.svg";
import vscode from "../assets/vscode.svg";
import neovim from "../assets/neovim.svg";
import styledComponents from "../assets/styled-components.svg";
import webpack from "../assets/webpack.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideLeft, slideBottom } from "../animations/animations";

const Section = styled.section`
  margin: 25rem 5rem;
  display: flex;

  @media screen and (max-width: 900px) {
    margin: 20rem 3rem;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    margin: 8rem 3rem;
  }

  @media screen and (max-width: 500px) {
    margin: 8rem 2rem;
  }
`;

const Text = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex: 1 1 20rem;
  margin-right: 7rem;

  h2 {
    font-weight: bold;
  }

  @media screen and (max-width: 750px) {
    margin-right: 0rem;
  }
`;

const ColourP = styled.p`
  display: flex;
  align-items: center;
  color: ${PrimaryColours.blue};
  font-size: 1.8rem;

  span {
    display: inline-block;
    width: 4rem;
    height: 0.3rem;
    margin-right: 2rem;
    background: ${PrimaryColours.blue};
  }
`;

const GreyP = styled.p`
  color: ${PrimaryColours.textGrey};
  font-size: 1.8rem;
`;

const Tech = styled(motion.div)`
  flex: 1 1 20rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 750px ) {
    margin: 8rem 0rem;
  }
`;

const TechTitle = styled.h3`
  margin-bottom: 4rem;
`;

const TechGrid = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const TechDiv = styled.div`
  display: flex;
  flex-basis: 10rem;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;
  height: 14.1rem;

  p {
    color: ${PrimaryColours.textGrey};
    font-size: 1.4rem;
  }

  @media screen and (max-width: 750px) {
    height: 12rem;
  }
`;

const GreyIcon = styled(FontAwesomeIcon)`
  color: ${PrimaryColours.textGrey};
`;

interface Props {
  toolsRef: (node?: Element | null | undefined) => void;
}

const Tools: React.FC<Props> = ({ toolsRef }) => {
  const controls = useAnimation();
  const [textRef, textInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [imgRef, imgInView] = useInView({ threshold: 0.1, triggerOnce: true });

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
    <Section id="tools" ref={toolsRef}>
      <Text
        ref={textRef}
        initial="hidden"
        animate={controls}
        variants={slideLeft}
      >
        <ColourP>
          <span></span>Umiejętności i narzędzia
        </ColourP>
        <h2>Technologie, których używam do tworzenia stron</h2>
        <GreyP>
          Przy projektowaniu i programowniu stron internetowych korzystam z
          najnowszych narzędzi i technologii. Dzięki nim, moje strony są
          zaprojektowanie zgodnie z najnowszymi trendami i zaprogramowane tak
          aby były szybkie i wydajne.
        </GreyP>
      </Text>
      <Tech
        ref={imgRef}
        initial="hidden"
        animate={controls}
        variants={slideBottom}
      >
        <TechTitle>Programowanie</TechTitle>
        <TechGrid>
          <TechDiv>
            <GreyIcon icon={faHtml5} size="6x" />
            <p>HTML5</p>
          </TechDiv>
          <TechDiv>
            <GreyIcon icon={faCss3Alt} size="6x" />
            <p>CSS3</p>
          </TechDiv>
          <TechDiv>
            <img src={typescript} alt="typescript" />
            <p>TypeScript</p>
          </TechDiv>
          <TechDiv>
            <GreyIcon icon={faSass} size="6x" />
            <p>Sass</p>
          </TechDiv>
          <TechDiv>
            <GreyIcon icon={faReact} size="6x" />
            <p>React</p>
          </TechDiv>
          <TechDiv>
            <img
              src={styledComponents}
              alt="styled components"
              style={{ height: "5rem" }}
            />
            <p>
              Styled
              <br />
              Components
            </p>
          </TechDiv>
        </TechGrid>
        <TechTitle>Narzędzia</TechTitle>
        <TechGrid>
          <TechDiv>
            <img src={vscode} alt="vscode" />
            <p>VSCode</p>
          </TechDiv>
          <TechDiv>
            <GreyIcon icon={faFigma} size="6x" />
            <p>Figma</p>
          </TechDiv>
          <TechDiv>
            <img src={neovim} alt="neovim" />
            <p>Neovim</p>
          </TechDiv>
          <TechDiv>
            <GreyIcon icon={faGitAlt} size="6x" />
            <p>Git</p>
          </TechDiv>
          <TechDiv>
            <img src={webpack} alt="webpack" />
            <p>Webpack</p>
          </TechDiv>
        </TechGrid>
      </Tech>
    </Section>
  );
};

export default Tools;
