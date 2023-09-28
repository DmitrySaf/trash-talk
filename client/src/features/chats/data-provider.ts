import { usersApi } from '@/api/modules/users'
import { chatsApi } from '@/api/modules/chats'
import { type GetChatsParams, type Chat, type CreateChatRequest } from '@/api/data-contracts'

const userApi = usersApi()

export const loadChats = async (params: GetChatsParams): Promise<Chat[]> => {
  const chats = await userApi.getChats(params)

  return chats
}

const chatApi = chatsApi()

export const createChat = async (data: CreateChatRequest): Promise<void> => {
  await chatApi.createChat(data)
}
