import React from 'react'

import editIcon from './assets/edit.svg'
import moreIcon from './assets/more-horizontal.svg'
import searchIcon from './assets/search.svg'
import sendIcon from './assets/send.svg'

import * as Styled from './styled'

export function Window() {
  return (
    <Styled.Window>
      <Styled.Header>
        <Styled.Left>
          <Styled.Circle />
          <Styled.Circle />
          <Styled.Circle />
        </Styled.Left>
        <Styled.Center>
          Tsumi Kumi
          <Styled.Status>online</Styled.Status>
        </Styled.Center>
        <Styled.Right>
          <img src={editIcon} />
          <img src={moreIcon} />
          <img src={searchIcon} />
        </Styled.Right>
      </Styled.Header>
      <div></div>
      <Styled.Footer>
        <Styled.Message
          role="textbox"
          contentEditable
          placeholder="Написать какой же он сын шалавы"
        />
        <Styled.SendButton src={sendIcon} />
      </Styled.Footer>
    </Styled.Window>
  )
}
