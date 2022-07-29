import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${(props) => props.theme.focus_color};
  }

  body {
    width: 100%;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme.secondary_color};
    color: ${(props) => props.theme.primary_color};
    font-family: 'Poppins', sans-serif;

    a {
      text-decoration: none;
    }
  }

`;