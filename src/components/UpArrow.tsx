import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { PrimaryColours } from "../styles/GlobalStyles";
import { motion } from "framer-motion";

interface StyleProps {
  // react complains if this variable is named heroState and it's a boolean
  // that's why it's a string and named in lowercase, don't ask me how this works
  herostate: string;
}

const Arrow = styled(motion.a)<StyleProps>`
  position: fixed;
  // not the best way to do it, i know, i just can't animate display: none to block
  opacity: ${(p) => (p.herostate === "true" ? "0" : "1")};
  bottom: 0rem;
  right: 0rem;
  background: rgba(30, 30, 30, 0.5);
  margin: 5rem;
  z-index: 2;
  transition: opacity 0.5s;

  svg {
    padding: 1.5rem;
    color: ${PrimaryColours.white};
  }

  @media screen and (max-width: 900px) {
    margin: 3rem;
    svg {
      padding: 1rem;
    }
  }

  @media screen and (max-width: 500px) {
    margin: 2rem;
  }
`;

interface Props {
  mobileNavOpen: boolean;
  heroState: boolean;
}

const UpArrow: React.FC<Props> = ({ mobileNavOpen, heroState }) => {
  return (
    <Arrow
      href="#hero"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      herostate={heroState.toString()}
    >
      <FontAwesomeIcon
        icon={faChevronUp}
        size="2x"
        className={mobileNavOpen ? "hidden" : ""}
      />
    </Arrow>
  );
};

export default UpArrow;
