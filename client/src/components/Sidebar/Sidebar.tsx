import { Search } from '@/components/Search'
import { Boards } from '@/components/Boards'
import { Folders } from '@/components/Folders'
import { Chats } from '@/components/Chats'
import { SettingsButton } from '@/components/buttons/SettingsButton'

import * as Styled from './styled'

export function Sidebar() {
  return (
    <Styled.Sidebar>
      <Search />
      <Boards />
      <Folders />
      <Styled.SectionDivider />
      <Chats />
      <Styled.SectionDivider />
      <div>
        <SettingsButton />
      </div>
    </Styled.Sidebar>
  )
}
