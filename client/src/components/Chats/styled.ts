import styled from 'styled-components'

export const Chats = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

export const Chat = styled.div`
  display: grid;
  grid-template-columns: 54px 1fr;
  align-items: center;
  padding: 8px;
  gap: 4px;
`

export const Avatar = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #d3d3d3;
`

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
`

export const AvatarDefaultText = styled.p`
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const MessageShortcut = styled.span`
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
