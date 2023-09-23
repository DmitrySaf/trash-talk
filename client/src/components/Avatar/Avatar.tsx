import React from 'react'

import * as Styled from './styled'

interface Props {
  image?: string
  size?: string
}

export function Avatar({ size = 's' }: Props) {
  return (
    <Styled.Avatar size={size}>
      <span>&#129313;</span>
    </Styled.Avatar>
  )
}
