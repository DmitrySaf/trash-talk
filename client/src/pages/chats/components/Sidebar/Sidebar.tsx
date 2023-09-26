import { Search } from '@/components/Search'
import { AddButton } from '@/components/buttons/AddButton'
import { Avatar } from '@/components/Avatar'
import { WidgetsGroup } from '@/components/WidgetsGroup'
import { ChatsField } from '../ChatsField'
import { type Chat } from '@/api/data-contracts'

import * as Styled from './styled'

interface Props {
  chats: Chat[]
}

export function Sidebar({ chats }: Props) {
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
      <ChatsField items={chats} />
    </Styled.Sidebar>
  )
}
