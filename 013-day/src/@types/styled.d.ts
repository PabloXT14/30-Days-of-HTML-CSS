import 'styled-components'
import { lightTheme } from '../style/themes/light'

type ThemeType = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
