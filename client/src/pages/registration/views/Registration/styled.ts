import styled from 'styled-components'

export const Registration = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const Background = styled.img`
  width: 100%;
  height: 100%;
`

export const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  z-index: 1;
`
