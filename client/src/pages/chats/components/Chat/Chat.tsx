import { Avatar } from '@/components/Avatar'

import * as Styled from './styled'

interface Props {
  avatar: string
  name: string
  time: string
  message: string
  unreadMessages: number
}

export function Chat({ avatar, name, time, message, unreadMessages }: Props) {
  return (
    <Styled.Chat>
      <Avatar size="m" image={avatar} />
      <Styled.Content>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Time>{time}</Styled.Time>
        <Styled.Message>{message}</Styled.Message>
        <Styled.Unread>{unreadMessages}</Styled.Unread>
      </Styled.Content>
    </Styled.Chat>
  )
}
