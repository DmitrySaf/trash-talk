import { useState, type KeyboardEvent } from 'react'
import { useParams } from 'react-router-dom'
import { Chat as ChatComponent } from '../Chat'
import { type Chat } from '@/api/data-contracts'
import { useChatsActions } from '@/features/chats/actions-state'

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
      name={item.friendUsername}
      message={item.messages.at(-1)}
      time="12:12"
      unreadMessages={item.messages.length}
    />
  ))
}

export function ChatsField({ items }: Props) {
  const { username } = useParams()
  const [name, setName] = useState('')
  const { createChat } = useChatsActions()

  function addChat(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      createChat({ friendUsername: name, myUsername: username ?? '' })
    }
  }

  return (
    <Styled.ChatsField>
      <Styled.Title>Chats</Styled.Title>
      {items.length > 0 ? (
        renderItems(items)
      ) : (
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          onKeyUp={addChat}
        />
        // <Styled.Empty>
        //   <Styled.EmptyText>
        //     It&apos;s empty... <br />
        //     but not for long!
        //   </Styled.EmptyText>
        //   <Styled.EmptyButton>
        //     <span>Add chat</span>
        //   </Styled.EmptyButton>
        // </Styled.Empty>
      )}
    </Styled.ChatsField>
  )
}
