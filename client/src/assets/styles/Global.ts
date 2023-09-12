import { createGlobalStyle } from 'styled-components'
import { theme } from './themes'

export const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
#root {
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
  height: 100%;
  font-family: ${theme.fontFamilies.main};
  font-weight: bold;
  font-size: ${theme.fontSizes.m};
  line-height: ${theme.lineHeights.main};
}

a {
  text-decoration: none;
  color: ${theme.colors.blue};
  cursor: pointer;
}
`
