import { usersApi } from '@/api/modules/users'
import { type GetChatsParams, type Chat } from '@/api/data-contracts'

const api = usersApi()

export const loadChats = async (params: GetChatsParams): Promise<Chat[]> => {
  const chats = await api.getChats(params)

  return chats
}
