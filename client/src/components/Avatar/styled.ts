import styled from 'styled-components'

interface AvatarProps {
  size: string
}

export const Avatar = styled.div<AvatarProps>`
  width: ${({ size }) => (size === 's' ? '40px' : '46px')};
  height: ${({ size }) => (size === 's' ? '40px' : '46px')};
  border-radius: 50%;
  overflow: hidden;
  background-color: black;
  display: grid;
  place-items: center;
`

// export const AvatarImage = styled.img`

// `

// export const AvatarText = styled.span`
//   font-size
// `
