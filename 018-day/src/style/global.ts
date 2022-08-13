import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue_500};
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.gray_500};
    border-radius: 3px;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.white_500};
    background-image: url('/src/assets/background.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    display: grid;
    align-items: center;
    height: 100vh;
  }
`
