import { ThemeProvider } from "styled-components";
import { LeftBar } from "./components/LeftBar";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div className="App">
        <LeftBar />
      </div>
    </ThemeProvider>
  )
}