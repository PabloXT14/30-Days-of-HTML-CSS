import { ThemeProvider } from "styled-components";
import { Main } from "./components/Main";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
     <GlobalStyle />
     <Main />
    </ThemeProvider>
  )
}
