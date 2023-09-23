import React from 'react'
import { Avatar } from '@/components/Avatar'

import * as Styled from './styled'

// export interface ChatItem {

// }

interface Props {
  items: any[]
}

export function ChatsField({ items }: Props) {
  // const renderItems = () => {
  //   return items.map((item, i) => (
  //     <Styled.Chat key={i}>

  //     </Styled.Chat>
  //   ))
  // }

  return (
    <Styled.ChatsField>
      <Styled.Title>Chats</Styled.Title>
      <Styled.Chat>
        <Avatar size="m" />
        <Styled.ChatContent>
          <Styled.ChatName>Tsumi Kumi</Styled.ChatName>
          <Styled.ChatTime>12:12</Styled.ChatTime>
          <Styled.ChatMessage>Hello! I like eat pasta, and u?asdasdas</Styled.ChatMessage>
          <Styled.ChatUnread>12</Styled.ChatUnread>
        </Styled.ChatContent>
      </Styled.Chat>
    </Styled.ChatsField>
  )
}
