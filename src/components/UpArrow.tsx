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
    <Arrow href="#hero">
      <FontAwesomeIcon
        icon={faChevronUp}
        size="2x"
        className={mobileNavOpen ? "hidden" : ""}
      />
    </Arrow>
  );
};

export default UpArrow;
