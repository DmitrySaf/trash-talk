import { type ReactNode } from 'react'

import plusIcon from './assets/plus.svg'

import * as Styled from './styled'

type Props = {
  title: string
  scrollable?: boolean
  onAdd: () => void
  children: ReactNode
}

export function SidebarSection({ title, onAdd, scrollable, children }: Props) {
  return (
    <Styled.SidebarSection scrollable={scrollable}>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
        <Styled.AddIcon src={plusIcon} alt="add" onClick={onAdd} />
      </Styled.Header>
      {children}
    </Styled.SidebarSection>
  )
}
