import { createGlobalStyle } from 'styled-components'

import SFProTextBold from './SFProText-Bold.ttf'
import SFProTextMedium from './SFProText-Medium.ttf'
import SFProTextRgular from './SFProText-Regular.ttf'

export const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'SF Pro Text';
  src: url(${SFProTextRgular}) format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'SF Pro Text';
  src: url(${SFProTextMedium}) format('truetype');
  font-weight: 500;
}

@font-face {
  font-family: 'SF Pro Text';
  src: url(${SFProTextBold}) format('truetype');
  font-weight: 700;
}
`
