import { createGlobalStyle } from "styled-components";

export const PrimaryColours = {
  bgBlack: "rgb(20, 20, 20)",
  darkBlue: "rgb(42, 136, 164)",
  blue: "rgb(50, 162, 196)",
  lightBlue: "rgb(70, 179, 207)",
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${PrimaryColours.bgBlack};
    font-family: "Inter", sans-serif;
  }

  h2 {
    font-weight: lighter;
    font-size: 6rem;
  }

  h3 {
    font-size: 2.3rem;
  }

  h4 {
    font-weight: bold;
  }

  a {
    font-size: 2.3rem;
  }

  p {
    padding: 3rem 0rem;
    font-size: 2.3rem;
    line-height: 150%;
  }

  h1, h2, h3, h4, a, p {
    color: white;
  }

  @media screen and (max-width: 1400px) {
    html {
      font-size: 50%;
    }
  }
`;
