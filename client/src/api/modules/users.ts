import { request } from '../http-client'
import { type CreateUserRequest } from '@/api/data-contracts'

export const usersApi = () => {
  const createUser = (data: CreateUserRequest) =>
    request({
      method: 'POST',
      url: '/registration',
      data
    })

  return {
    createUser
  }
}
