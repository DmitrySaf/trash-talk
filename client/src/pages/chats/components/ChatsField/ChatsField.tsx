import { Chat as ChatComponent } from '../Chat'
import { type Chat } from '@/api/data-contracts'

import * as Styled from './styled'

// export interface ChatItem {

// }

interface Props {
  items: Chat[]
}

const renderItems = (items: Chat[]) => {
  return items.map((item, i) => (
    <ChatComponent
      key={i}
      avatar="/"
      name={item.name}
      message={item.messages.at(-1)}
      time="12:12"
      unreadMessages={3}
    />
  ))
}

export function ChatsField({ items }: Props) {
  return (
    <Styled.ChatsField>
      <Styled.Title>Chats</Styled.Title>
      {items.length > 0 ? (
        renderItems(items)
      ) : (
        <Styled.Empty>
          <Styled.EmptyText>
            It&apos;s empty... <br />
            but not for long!
          </Styled.EmptyText>
          <Styled.EmptyButton>
            <span>Add chat</span>
          </Styled.EmptyButton>
        </Styled.Empty>
      )}
    </Styled.ChatsField>
  )
}
