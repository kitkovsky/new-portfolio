import { createGlobalStyle } from "styled-components";

export const PrimaryColours = {
  bgBlack: "rgb(20, 20, 20)",
  textGrey: "rgb(150, 150, 150)",
  bgGrey: "rgb(30, 30, 30)",
  blue: "rgb(50, 162, 196)",
  white: "rgb(252, 246, 244)",
};

export const GlobalStyle = createGlobalStyle`
  .hidden {
    display: none;
  }

  .no-scroll {
    overflow-y: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background: ${PrimaryColours.bgBlack};
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
  }

  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 5rem;
  }

  h3 {
    font-size: 2rem;
  }

  a {
    font-size: 2rem;
    text-decoration: none;
  }

  p {
    padding: 3rem 0rem;
    font-size: 2.3rem;
    line-height: 150%;
  }

  li {
    font-size: 2rem;
  }

  h1, h2, h3, h4, a, p, li {
    color: ${PrimaryColours.white};
    font-weight: normal;
  }

  @media screen and (min-width: 1920px) {
    body {
      max-width: 1920px;
      margin: auto;
    }
  }

  @media screen and (max-width: 750px) {
    html {
      font-size: 52.5%;
    }
  }
`;
