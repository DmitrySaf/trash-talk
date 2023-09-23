import { css } from 'styled-components'

export const backgroundBlur = css`
  position: relative;
  background: none;

  & > * {
    position: relative;
    z-index: 100;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(8px);
    overflow: hidden;
    border-radius: inherit;
    z-index: 99;
  }
`
