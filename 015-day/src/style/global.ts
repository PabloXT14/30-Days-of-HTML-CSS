import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.primary};
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.secondary};
    border-radius: 3px;
  }

  body {
    font-family: 'Roboto', sans-serif;
    letter-spacing: -0.2px;
    background: ${(props) => props.theme.primary};
  }
  
  div, p {
    color: ${(props) => props.theme.secondary};
    text-shadow: 1px 1px 1px ${(props) => props.theme.tertiary};
  }
`
