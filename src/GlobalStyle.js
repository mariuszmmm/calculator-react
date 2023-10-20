import { createGlobalStyle } from "styled-components";
import background from "./background.jpg"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background-image: url("${background}");
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Roboto Flex', sans-serif;
  }
`;

export default GlobalStyle;