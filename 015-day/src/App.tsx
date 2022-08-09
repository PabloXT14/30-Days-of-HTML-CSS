import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './style/global'
import { defaultTheme } from './style/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <div className="App">Hello world!</div>
    </ThemeProvider>
  )
}
