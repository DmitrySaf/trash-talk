import { AddButton } from '@/components/buttons/AddButton'

import * as Styled from './styled'

export interface WidgetItem {
  smileCode?: string
  name: string
}

interface Props {
  name: string
  items: WidgetItem[]
}

export function WidgetsGroup({ name, items }: Props) {
  const renderItems = () => {
    return items.map((item, i) => (
      <Styled.Item key={i}>
        <Styled.ItemButton>{item.smileCode}</Styled.ItemButton>
        <Styled.ItemName>{item.name}</Styled.ItemName>
      </Styled.Item>
    ))
  }

  return (
    <Styled.WidgetsGroup>
      <Styled.Name>{name}</Styled.Name>
      {renderItems()}
      <AddButton width="64px" height="64px" />
    </Styled.WidgetsGroup>
  )
}
