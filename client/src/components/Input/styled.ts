import styled from 'styled-components'

export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const InputLabel = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.light};
`

interface InputProps {
  $error: boolean
}

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 400;
  border: 1px solid ${({ theme, $error }) => ($error ? '#FF4747' : theme.colors.white)};
  border-radius: 16px;
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.l};
  }

  &:focus {
    outline: none;
  }
`

export const InputDescription = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: #ff4747;
`
