import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.grayLight};
  display: grid;
  grid-template-columns: 240px 1fr;
  column-gap: 16px;
`
