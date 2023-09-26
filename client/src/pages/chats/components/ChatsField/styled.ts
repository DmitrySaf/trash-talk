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

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex-grow: 1;
  justify-content: center;
`

export const EmptyText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: ${({ theme }) => theme.lineHeights.main};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`

export const EmptyButton = styled.button`
  ${backgroundBlur}

  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: ${({ theme }) => theme.lineHeights.main};
  color: ${({ theme }) => theme.colors.white};
  padding: 14px 64px;
  border: none;
  border-radius: 16px;
  cursor: pointer;

  &:hover,
  &:focus {
    &::before {
      outline: 1px solid ${({ theme }) => theme.colors.white};
    }
  }
`
