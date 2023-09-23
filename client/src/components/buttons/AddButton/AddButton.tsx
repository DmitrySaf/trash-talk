import addIcon from './assets/plus.svg'
import * as Styled from './styled'

interface Props {
  width?: string
  height?: string
}

export function AddButton({ width = '40px', height = '40px' }: Props) {
  return (
    <Styled.AddButton width={width} height={height}>
      <Styled.Icon src={addIcon} />
    </Styled.AddButton>
  )
}
