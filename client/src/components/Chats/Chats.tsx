import { SidebarSection } from '@/components/SidebarSection'

import * as Styled from './styled'

export function Chats() {
  function handleAddFolder() {
    console.log('add folder')
  }
  return (
    <SidebarSection title="Chats" onAdd={handleAddFolder} scrollable>
      <Styled.Chats>
        <Styled.Chat>
          <Styled.Avatar>
            {false ? <Styled.AvatarImage /> : <Styled.AvatarDefaultText />}
          </Styled.Avatar>
          <Styled.Wrapper>
            <span>Name</span>
            <Styled.MessageShortcut>This is test message for you</Styled.MessageShortcut>
          </Styled.Wrapper>
        </Styled.Chat>
        <Styled.Chat>
          <Styled.Avatar>
            {false ? <Styled.AvatarImage /> : <Styled.AvatarDefaultText />}
          </Styled.Avatar>
          <Styled.Wrapper>
            <span>Name</span>
            <Styled.MessageShortcut>This is test message for you</Styled.MessageShortcut>
          </Styled.Wrapper>
        </Styled.Chat>
        <Styled.Chat>
          <Styled.Avatar>
            {false ? <Styled.AvatarImage /> : <Styled.AvatarDefaultText />}
          </Styled.Avatar>
          <Styled.Wrapper>
            <span>Name</span>
            <Styled.MessageShortcut>This is test message for you</Styled.MessageShortcut>
          </Styled.Wrapper>
        </Styled.Chat>
        <Styled.Chat>
          <Styled.Avatar>
            {false ? <Styled.AvatarImage /> : <Styled.AvatarDefaultText />}
          </Styled.Avatar>
          <Styled.Wrapper>
            <span>Name</span>
            <Styled.MessageShortcut>This is test message for you</Styled.MessageShortcut>
          </Styled.Wrapper>
        </Styled.Chat>
        <Styled.Chat>
          <Styled.Avatar>
            {false ? <Styled.AvatarImage /> : <Styled.AvatarDefaultText />}
          </Styled.Avatar>
          <Styled.Wrapper>
            <span>Name</span>
            <Styled.MessageShortcut>This is test message for you</Styled.MessageShortcut>
          </Styled.Wrapper>
        </Styled.Chat>
        <Styled.Chat>
          <Styled.Avatar>
            {false ? <Styled.AvatarImage /> : <Styled.AvatarDefaultText />}
          </Styled.Avatar>
          <Styled.Wrapper>
            <span>Name</span>
            <Styled.MessageShortcut>This is test message for you</Styled.MessageShortcut>
          </Styled.Wrapper>
        </Styled.Chat>
      </Styled.Chats>
    </SidebarSection>
  )
}
