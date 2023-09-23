import styled from 'styled-components'
import { backgroundBlur } from '@/assets/styles/mixins/background-blur'

interface AddButtonProps {
  width: string
  height: string
}

export const AddButton = styled.button<AddButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-radius: 14px;
  display: grid;
  place-items: center;

  ${backgroundBlur}
`

export const Icon = styled.img`
  color: ${({ theme }) => theme.colors.white};
`
