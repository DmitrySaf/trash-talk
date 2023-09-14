import { Sidebar } from '@/components/Sidebar'
import { Windows } from '@/components/Windows'

import * as Styled from './styled'

type Props = {}

export function App() {
  return (
    <Styled.AppContainer>
      <Sidebar />
      <Windows />
    </Styled.AppContainer>
  )
}
