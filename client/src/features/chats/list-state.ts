import { useState } from 'react'
import { loadChats as loadChatsReq } from './data-provider'
import { type Chat } from '@/api/data-contracts'

interface UseUsersActions {
  chats: Chat[]
  loadingChats: boolean
  loadChats: () => void
}

interface UseUsersActionsOptions {
  userId: string | undefined
}

export const useChats = ({ userId }: UseUsersActionsOptions): UseUsersActions => {
  const [chats, setChats] = useState<Chat[]>([])
  const [loadingChats, setLoadingChats] = useState(false)

  const loadChats = async (): Promise<void> => {
    setLoadingChats(true)
    if (userId === undefined) {
      return
    }

    const recievedChats = await loadChatsReq({ userId })
    setChats(recievedChats)
    setLoadingChats(false)
  }

  return {
    chats,
    loadingChats,
    loadChats
  }
}
