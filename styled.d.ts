// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      midnight: string
      torchRed: string
      cream: string
      white: string
      black: string
      yogyaBlue: string
    }
  }
}
