import styled from 'styled-components'
import ContentEditable from 'react-contenteditable'
import { backgroundBlur } from '@/assets/styles/mixins/background-blur'

export const Window = styled.div`
  ${backgroundBlur}

  display: grid;
  grid-template-rows: 0fr 1fr 0fr;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
`

export const Header = styled.div`
  ${backgroundBlur}

  height: 36px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0 12px;
`

export const Left = styled.div`
  display: flex;
  gap: 8px;
`

export const Circle = styled.div`
  background-color: #ed6a5e;
  width: 12px;
  height: 12px;
  border-radius: 50%;

  &:nth-child(2) {
    background-color: #f6be4f;
  }

  &:nth-child(3) {
    background-color: #62c654;
  }
`

export const Status = styled.span`
  color: ${({ theme }) => theme.colors.success};
  margin-left: 4px;
  display: inline-flex;
  align-items: center;

  &::before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.success};
    margin-right: 4px;
  }
`

export const Center = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

export const Right = styled.div`
  display: flex;
  gap: 12px;
  justify-self: flex-end;
`

export const Footer = styled.div`
  ${backgroundBlur}

  display: grid;
  grid-template-columns: 1fr 0fr;
  align-items: center;
  padding: 8px;
`

export const MessagesWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  padding: 8px;
`

type Props = {
  $self: boolean
}

export const MessageItem = styled.div<Props>`
  padding: 4px 8px;
  background-color: white;
  width: max-content;
  max-width: 75%;
  border-radius: 16px;
  color: black;

  ${({ $self }) => ($self ? 'align-self: flex-end;' : 'align-self: flex-start;')}
`

export const Message = styled(ContentEditable)`
  display: block;
  overflow: hidden;
  max-width: 100%;
  border: none;
  resize: none;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-family: ${({ theme }) => theme.fontFamilies.main};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`

export const SendButton = styled.img``
