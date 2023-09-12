import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primary: '#0465C6',
    white: '#FFFFFF',
    black: '#000000',
    grayLight: '#E9E9E9',
    grayDark: '#646464'
  },
  fontSizes: {
    xs: '10px',
    s: '12px',
    m: '16px',
    l: '20px',
    xl: '24px',
    xxl: '32px',
    xxxl: '40px'
  },
  lineHeights: {
    main: '130%'
  },
  fontFamilies: {
    main: '"SF Pro Text", sans-serif'
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
