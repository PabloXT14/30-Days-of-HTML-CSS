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
    border-radius: 3px;
    background: ${(props) => props.theme.gray_500};
  }

  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    padding: 1rem;
    flex: 1;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.bg_body};
    overflow: none;
  }
`
