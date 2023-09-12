import { SidebarSection } from '@/components/SidebarSection'

import * as Styled from './styled'

type Props = {}

export function Boards() {
  function handleAddBoard() {
    console.log('add board')
  }

  return (
    <SidebarSection title="Boards" onAdd={handleAddBoard}>
      <Styled.Boards>
        <Styled.Board>
          <span>YU</span>
        </Styled.Board>
        <Styled.Board>
          <span>RM</span>
        </Styled.Board>
      </Styled.Boards>
    </SidebarSection>
  )
}
