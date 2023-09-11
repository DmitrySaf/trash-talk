import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      white: string
      black: string
      gray: string
      green: string
      red: string
      yellow: string
      blue: string
    }
    fontSizes: {
      xs: string
      s: string
      m: string
      l: string
      xl: string
      xxl: string
      xxxl: string
    }
    lineHeights: {
      main: string
    }
    fontFamilies: {
      main: string
    }
    fontWeights: {
      light: string
      regular: string
      medium: string
      semiBold: string
      bold: string
    }
    transitionDurations: {
      main: string
    }
  }
}
