import searchIcon from './assets/search-icon.svg'

import * as Styled from './styled'

export function Search() {
  return (
    <Styled.Search>
      <Styled.SearchIcon src={searchIcon} alt="Search" />
      <Styled.SearchInput placeholder="Search" />
    </Styled.Search>
  )
}
