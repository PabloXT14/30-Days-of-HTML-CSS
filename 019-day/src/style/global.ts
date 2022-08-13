import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    /* box-shadow: 0 0 0 2px ${(props) => props.theme.primary}; */
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${(props) => props.theme.gray_500};
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.875rem;
    -webkit-font-smoothing: antialiased;
    
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
  }
`