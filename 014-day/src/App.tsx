import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './style/global'
import { defaultTheme } from './style/themes/default'

import * as S from './AppStyles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <S.MainDial>
        <S.Screen />
        <S.Hands />
        <S.HandHolder />
        <S.StrapHolderUp1 />
        <S.CircleHide11 />
        <S.LineHide11 />
        <S.StrapHolderUp2 />
        <S.CircleHide12 />
        <S.LineHide12 />
        <S.StrapHolderDown1 />
        <S.CircleHide21 />
        <S.LineHide21 />
        <S.StrapHolderDown2 />
        <S.CircleHide22 />
        <S.LineHide22 />
        <S.Strap1 />
        <S.Strap2 />
        <S.BackStrap />
        <S.Button1 />
        <S.ButtonHide />
        <S.Button2 />
      </S.MainDial>
    </ThemeProvider>
  )
}
