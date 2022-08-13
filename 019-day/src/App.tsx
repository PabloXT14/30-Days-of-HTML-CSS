import { ThemeProvider } from "styled-components";
import { SearchBar } from "./components/SearchBar";
import { GlobalStyles } from "./style/global";
import { defaultTheme } from "./style/themes/default";
import * as S from './components/SearchBar/styles'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <SearchBar />
      <S.Note>Click the button or hit enter</S.Note>
    </ThemeProvider>
  )
}
