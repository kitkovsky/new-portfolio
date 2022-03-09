import React from "react";
import styled from "styled-components";
import { PrimaryColours } from "../styles/GlobalStyles";

const StyledFooter = styled.footer`
  margin: 5rem;

  p {
    font-size: 1.8rem;
    padding: 0rem;
    color: ${PrimaryColours.textGrey};
  }

  @media screen and (max-width: 900px) {
    margin: 3rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>&copy; 2022 Oliwer Kitkowski</p>
    </StyledFooter>
  );
};

export default Footer;
