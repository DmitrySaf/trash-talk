import styled from 'styled-components'

export const Sidebar = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 0fr) 1fr repeat(2, 0fr);
  row-gap: 16px;
  overflow: hidden;
`

export const SectionDivider = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: #646464;
`
