import styled from 'styled-components'

export const SearchInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 14px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  background-color: transparent;
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`
