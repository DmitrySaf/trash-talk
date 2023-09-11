import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primary: '#0465C6',
    white: '#FCFCFC',
    black: '#0E0E0E',
    gray: '#A0A0A0',
    green: '#12B76A',
    red: '#A62E2E',
    yellow: '#FFDD32',
    blue: '#69B2FC'
  },
  fontSizes: {
    xs: '10px',
    s: '12px',
    m: '14px',
    l: '20px',
    xl: '24px',
    xxl: '32px',
    xxxl: '40px'
  },
  lineHeights: {
    main: '130%'
  },
  fontFamilies: {
    main: '"Inter", sans-serif'
  },
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700'
  },
  transitionDurations: {
    main: '300ms'
  }
}
