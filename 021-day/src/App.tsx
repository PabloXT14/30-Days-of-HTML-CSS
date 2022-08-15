import { ThemeProvider } from "styled-components";
import { Menu } from "./components/Menu";
import { GlobalStyles } from "./style/global";
import { defaultTheme } from "./style/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Menu /> 
    </ThemeProvider>
  )
}
