import { Search } from '@/components/Search'
import { AddButton } from '@/components/buttons/AddButton'
import { Avatar } from '@/components/Avatar'
import { WidgetsGroup } from '@/components/WidgetsGroup'
import { ChatsField } from '../ChatsField'

import * as Styled from './styled'

export function Sidebar() {
  return (
    <Styled.Sidebar>
      <Styled.SidebarTop>
        <Avatar />
        <Search />
        <AddButton />
      </Styled.SidebarTop>
      <Styled.SidebarAside>
        <WidgetsGroup name="Boards" items={[]} />
        <WidgetsGroup name="Folders" items={[]} />
      </Styled.SidebarAside>
      <ChatsField items={[]} />
    </Styled.Sidebar>
  )
}
