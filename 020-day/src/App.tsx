import { ThemeProvider } from 'styled-components'
import { SearchBar } from './components/SearchBox'
import { GlobalStyles } from './style/global'
import { defaultTheme } from './style/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <SearchBar />
    </ThemeProvider>
  )
}
