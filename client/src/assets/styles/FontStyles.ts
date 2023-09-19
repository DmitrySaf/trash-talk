import { createGlobalStyle } from 'styled-components'
import {
  SFProTextBold,
  SFProTextSemiBold,
  SFProTextMedium,
  SFProTextRegular,
  SFProTextLight
} from '../fonts'

export const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'SF Pro Text';
  src: url(${SFProTextLight}) format('truetype');
  font-weight: 300;
}

@font-face {
  font-family: 'SF Pro Text';
  src: url(${SFProTextRegular}) format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'SF Pro Text';
  src: url(${SFProTextMedium}) format('truetype');
  font-weight: 500;
}

@font-face {
  font-family: 'SF Pro Text';
  src: url(${SFProTextSemiBold}) format('truetype');
  font-weight: 600;
}

@font-face {
  font-family: 'SF Pro Text';
  src: url(${SFProTextBold}) format('truetype');
  font-weight: 700;
}
`
