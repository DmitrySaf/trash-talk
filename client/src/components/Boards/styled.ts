import styled from 'styled-components'

export const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 8px;
`

export const Board = styled.div`
  border-radius: 20px;
  width: 100%;
  aspect-ratio: 1 / 1;
  display: grid;
  place-items: center;
  background-color: #d3d3d3;
`
