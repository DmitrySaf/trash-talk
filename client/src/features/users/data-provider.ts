import { usersApi } from '@/api/modules/users'
import { type CreateUserRequest } from '@/api/data-contracts'

const api = usersApi()

export const createUser = async (data: CreateUserRequest) => {
  await api.createUser(data)
}
