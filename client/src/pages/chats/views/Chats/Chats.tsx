import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { Windows } from '../../components/Windows'
import { BackgroundImageWithBlur } from '@/components/BackgroundImageWithBlur'
import { useChats } from '@/features/chats/list-state'
import backgroundImage from './assets/background.jpg'

import * as Styled from './styled'

export function Chats() {
  const { userId } = useParams()
  const { chats, loadingChats, loadChats } = useChats({ userId })

  useEffect(() => {
    loadChats()
  }, [])

  return (
    <>
      <BackgroundImageWithBlur image={backgroundImage} />
      <Styled.Chats>
        <Sidebar chats={chats} />
        <Windows />
      </Styled.Chats>
    </>
  )
}
