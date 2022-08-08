import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.text_primary};
  }

  *::-webkit-scrollbar {
    width: 6px;
    height: 8px;
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.text_primary};
    border-radius: 3px;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: ${(props) => props.theme.bg_primary};
  }
`
