import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: ${(props) => props.theme.bg_body};
    color: ${(props) => props.theme.white};
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
  }
`;