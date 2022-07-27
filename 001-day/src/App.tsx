import { ThemeProvider } from "styled-components"
import { Button } from "./components/Button"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <Button color="bg_button_1" text="Neon Button"/>
        <Button color="bg_button_2" text="Neon Button"/>
        <Button color="bg_button_3" text="Neon Button"/>
    </ThemeProvider>
  )
}
