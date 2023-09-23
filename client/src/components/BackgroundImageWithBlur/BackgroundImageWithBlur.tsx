import * as Styled from './styled'

interface Props {
  image: string
}

export function BackgroundImageWithBlur({ image }: Props) {
  return (
    <>
      <Styled.Background src={image} />
      <Styled.BackgroundBlur />
    </>
  )
}
