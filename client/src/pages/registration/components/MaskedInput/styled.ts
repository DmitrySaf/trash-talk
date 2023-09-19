import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const InputLabel = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.light};
`

interface InputType {
  error: boolean
}

export const InputGrid = styled.div<InputType>`
  display: grid;
  grid-template-columns: 0fr 1fr;
  border: 1px solid ${({ theme, error }) => (error ? '#FF4747' : theme.colors.white)};
  border-radius: 16px;
  margin: 4px 0;
`

export const InputCountryNumber = styled.div<InputType>`
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 400;
  border-right: 1px solid ${({ theme, error }) => (error ? '#FF4747' : theme.colors.white)};
`

export const Input = styled(InputMask)`
  padding: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 400;
  border: none;
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
