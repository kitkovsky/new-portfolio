import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { PrimaryColours } from "../styles/GlobalStyles";

const Arrow = styled.a`
  position: fixed;
  bottom: 0rem;
  right: 0rem;
  background: ${PrimaryColours.bgGrey};
  margin: 7rem;
  z-index: 2;

  svg {
    padding: 2rem;
  }
`;

const UpArrow: React.FC = () => {
  return (
    <Arrow href="#hero">
      <FontAwesomeIcon icon={faChevronUp} size="2x" />
    </Arrow>
  );
};

export default UpArrow;
