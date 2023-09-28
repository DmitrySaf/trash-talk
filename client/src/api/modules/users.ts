import { request } from '../http-client'
import { type CreateUserRequest, type GetChatsParams } from '@/api/data-contracts'

export const usersApi = () => {
  const createUser = (data: CreateUserRequest) =>
    request({
      method: 'POST',
      url: '/users',
      data
    })

  const getChats = (params: GetChatsParams) =>
    request({
      method: 'GET',
      url: `/users/${params.username}/chats`
    })

  return {
    createUser,
    getChats
  }
}
