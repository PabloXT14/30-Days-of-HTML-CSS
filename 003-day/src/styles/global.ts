import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.main_color};
  }

  *::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.tag_color_text_four};
    border-radius: 3px;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;

    width: 100%;
    height: 100vh;
    padding: 1.25rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.75rem;
    -webkit-font-smoothing: antialiased;

    background-image: 
    linear-gradient(
      21deg,
      rgba(64, 83, 206, 0.3697003234675773) 68%,
      rgba(255, 206, 196, 0.5) 163%
    ),
    linear-gradient(
      163deg,
      rgba(49, 146, 170, 0.07944489965716128) 86%,
      rgba(239, 112, 138, 0.5) 40%
    ),
    linear-gradient(
      30deg, 
      rgba(76, 79, 173, 0.6173675716587805) 22%, 
      rgba(237, 106, 134, 0.5) 169%
    ),
    linear-gradient(
      48deg, 
      rgba(31, 85, 147, 0.7323890641868473) 64%, 
      rgba(247, 126, 132, 0.5) 43%
    );

    background-blend-mode: overlay, multiply, color, normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .App {
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 100%;
    max-width: 75rem;
    height: 90vh;
    max-height: 56.25rem;

    background: ${(props) => props.theme.bg_color_1};
    border-radius: 4px;
    box-shadow: 
      0 0.3px 2.2px rgba(0, 0, 0, 0.011), 
      0 0.7px 5.3px rgba(0, 0, 0, 0.016),
      0 1.3px 10px rgba(0, 0, 0, 0.02), 
      0 2.2px 17.9px rgba(0, 0, 0, 0.024),
      0 4.2px 33.4px rgba(0, 0, 0, 0.029), 
      0 10px 80px rgba(0, 0, 0, 0.04);

    overflow: hidden;;
  }
`;