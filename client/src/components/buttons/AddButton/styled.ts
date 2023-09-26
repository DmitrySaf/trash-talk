import styled from 'styled-components'
import { backgroundBlur } from '@/assets/styles/mixins/background-blur'

interface AddButtonProps {
  width: string
  height: string
}

export const AddButton = styled.button<AddButtonProps>`
  ${backgroundBlur}

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-radius: 14px;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    &::before {
      outline: 1px solid ${({ theme }) => theme.colors.white};
    }
  }
`

export const Icon = styled.img`
  color: ${({ theme }) => theme.colors.white};
`
