import { useState } from 'react'
import { loadChats as loadChatsReq } from './data-provider'
import { type Chat } from '@/api/data-contracts'

interface UseUsersActions {
  chats: Chat[]
  loadingChats: boolean
  loadChats: () => void
}

interface UseUsersActionsOptions {
  username: string | undefined
}

export const useChats = ({ username }: UseUsersActionsOptions): UseUsersActions => {
  const [chats, setChats] = useState<Chat[]>([])
  const [loadingChats, setLoadingChats] = useState(false)

  const loadChats = async (): Promise<void> => {
    setLoadingChats(true)
    if (username === undefined) {
      throw new Error('username is undefined')
    }

    const recievedChats = await loadChatsReq({ username })

    setChats(recievedChats)
    setLoadingChats(false)
  }

  return {
    chats,
    loadingChats,
    loadChats
  }
}
