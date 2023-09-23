import { Sidebar } from '../../components/Sidebar'
import { Windows } from '../../components/Windows'
import { BackgroundImageWithBlur } from '@/components/BackgroundImageWithBlur'
import backgroundImage from './assets/background.jpg'

import * as Styled from './styled'

export function Chats() {
  return (
    <>
      <BackgroundImageWithBlur image={backgroundImage} />
      <Styled.Chats>
        <Sidebar />
        <Windows />
      </Styled.Chats>
    </>
  )
}
