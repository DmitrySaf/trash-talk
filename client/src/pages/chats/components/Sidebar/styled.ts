import styled from 'styled-components'

export const Sidebar = styled.div`
  display: grid;
  grid-template: 0fr 1fr / 0fr 1fr;
  gap: 8px;

  & > *:first-child {
    grid-column: 1 / 3;
  }
`

export const SidebarTop = styled.div`
  display: grid;
  grid-template-columns: 0fr 1fr 0fr;
  column-gap: 8px;
`

export const SidebarAside = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`
