import styled from 'styled-components'

export const Search = styled.label`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  height: 50px;
  gap: 8px;
`

export const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
`

export const SearchInput = styled.input`
  border: none;
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSizes.m};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }
`
