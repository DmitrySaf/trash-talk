import { useState } from 'react'
import { createChat as createChatReq } from './data-provider'
import { type CreateChatRequest } from '@/api/data-contracts'

interface UseChatsActions {
  creatingChat: boolean
  createChat: (data: CreateChatRequest) => void
}

export const useChatsActions = (): UseChatsActions => {
  const [creatingChat, setCreatingChat] = useState(false)

  const createChat = async (data: CreateChatRequest): Promise<void> => {
    setCreatingChat(true)
    await createChatReq(data)
    setCreatingChat(false)
  }

  return {
    creatingChat,
    createChat
  }
}
