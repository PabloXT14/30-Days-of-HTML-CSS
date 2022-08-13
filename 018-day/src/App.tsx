import { ThemeProvider } from 'styled-components'
import { Form } from './components/Form'
import { GlobalStyles } from './style/global'
import { defaultTheme } from './style/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Form />
    </ThemeProvider>
  )
}
