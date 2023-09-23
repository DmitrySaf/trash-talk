import styled from 'styled-components'
import { backgroundBlur } from '@/assets/styles/mixins/background-blur'

export const WidgetsGroup = styled.div`
  ${backgroundBlur}

  padding: 8px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`

export const Name = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.main};
  color: ${({ theme }) => theme.colors.white};
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2px;
`

export const ItemButton = styled.button`
  ${backgroundBlur}

  border: none;
`

export const ItemName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.main};
  color: ${({ theme }) => theme.colors.white};
`
