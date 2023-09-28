import { request } from '../http-client'
import { type CreateChatRequest } from '@/api/data-contracts'

export const chatsApi = () => {
  const createChat = (data: CreateChatRequest) =>
    request({
      method: 'POST',
      url: `/chats`,
      data
    })

  return {
    createChat
  }
}
