import styled from 'styled-components'
import { backgroundBlur } from '@/assets/styles/mixins/background-blur'

export const ChatsField = styled.div`
  ${backgroundBlur}

  padding: 8px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.main};
  color: ${({ theme }) => theme.colors.white};
`

export const Chat = styled.div`
  ${backgroundBlur}

  padding: 8px;
  width: 100%;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 0fr 1fr;
  column-gap: 8px;
`

export const ChatContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 0fr;
  gap: 4px;
`

export const ChatTime = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.grey};
`

export const ChatName = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

export const ChatMessage = styled.div`
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ChatUnread = styled.div`
  justify-self: flex-end;
  padding: 0 7px;
  background-color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  height: 20px;
  min-width: 20px;
  width: fit-content;
  border-radius: 60px;
`
