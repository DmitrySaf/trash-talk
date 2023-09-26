import styled from 'styled-components'
import { backgroundBlur } from '@/assets/styles/mixins/background-blur'

export const Chat = styled.div`
  ${backgroundBlur}

  padding: 8px;
  width: 100%;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 0fr 1fr;
  column-gap: 8px;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 0fr;
  gap: 4px;
`

export const Time = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.grey};
`

export const Name = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

export const Message = styled.div`
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Unread = styled.div`
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
