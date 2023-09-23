import styled from 'styled-components'

export const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -2;
`

export const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  z-index: -1;
`
