import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
  }
  body, html{
    min-width: 100vw;
    height: 100%;
  }
  img {
    max-width: 100%;
  }
`;
