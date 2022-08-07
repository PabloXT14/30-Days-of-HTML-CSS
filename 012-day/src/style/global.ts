import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${(props) => props.theme.primary_color};
  }

  body {
    background-color: ${(props) => props.theme.bg_body};
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    width: 80%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: scroll;

    a {
      text-decoration: none;
    }
  }

  *::-webkite-scrollbar {
    width: 6px;
    height: 8px;
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.primary_color};
    border-radius: 3px;
  }
`
