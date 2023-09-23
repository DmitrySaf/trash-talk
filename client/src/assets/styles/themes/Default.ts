import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    white: '#FDFDFD',
    grey: '#808080',
    black: '#070707',
    error: '#FF4747',
    warning: '#FFFD61',
    success: '#47FF7B',
    blue: '#0077B6'
  },
  fontSizes: {
    xs: '10px',
    s: '12px',
    m: '16px',
    l: '20px',
    xl: '48px'
  },
  lineHeights: {
    main: '130%'
  },
  fontFamilies: {
    main: '"SF Pro Text", sans-serif'
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  },
  transitionDurations: {
    main: '300ms'
  }
}
