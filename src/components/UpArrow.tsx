import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { PrimaryColours } from "../styles/GlobalStyles";
import { motion } from "framer-motion";

const Arrow = styled(motion.a)`
  position: fixed;
  bottom: 0rem;
  right: 0rem;
  background: rgba(30, 30, 30, 0.5);
  margin: 5rem;
  z-index: 2;

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
}

const UpArrow: React.FC<Props> = ({ mobileNavOpen }) => {
  return (
    <Arrow href="#hero" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <FontAwesomeIcon
        icon={faChevronUp}
        size="2x"
        className={mobileNavOpen ? "hidden" : ""}
      />
    </Arrow>
  );
};

export default UpArrow;
