import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Background, InputCheckbox, S, Switch } from './AppStyles'
import { GlobalStyles } from './style/global'
import { darkTheme } from './style/themes/dark'

import { lightTheme } from './style/themes/light'

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const storageTheme = JSON.parse(localStorage.getItem('@theme')!)

    if (storageTheme && storageTheme === 'dark') {
      return 'dark'
    } else {
      return 'light'
    }
  })

  const isDarkTheme = theme === 'dark'

  function handleToggleTheme() {
    const updatedTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(updatedTheme)
  }

  useEffect(() => {
    localStorage.setItem(
      '@theme',
      JSON.stringify(theme === 'light' ? 'light' : 'dark'),
    )
  }, [theme])

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <InputCheckbox id="switch" defaultChecked={isDarkTheme} />
      <Switch htmlFor="switch" onClick={handleToggleTheme} />
      <S className="s" />
      <Background />
    </ThemeProvider>
  )
}
