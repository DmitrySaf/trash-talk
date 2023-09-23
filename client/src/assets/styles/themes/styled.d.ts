import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      grey: string
      black: string
      error: string
      warning: string
      success: string
      blue: string
    }
    fontSizes: {
      xs: string
      s: string
      m: string
      l: string
      xl: string
    }
    lineHeights: {
      main: string
    }
    fontFamilies: {
      main: string
    }
    fontWeights: {
      light: number
      regular: number
      medium: number
      semiBold: number
      bold: number
    }
    transitionDurations: {
      main: string
    }
  }
}
