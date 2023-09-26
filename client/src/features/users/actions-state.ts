import { useState } from 'react'
import { createUser as createUserReq } from './data-provider'
import { type CreateUserRequest } from '@/api/data-contracts'

interface UseUsersActions {
  creatingUser: boolean
  createUser: (data: CreateUserRequest) => void
}

export const useUsersActions = (): UseUsersActions => {
  const [creatingUser, setCreatingUser] = useState(false)

  const createUser = async (data: CreateUserRequest): Promise<void> => {
    setCreatingUser(true)
    await createUserReq(data)
    setCreatingUser(false)
  }

  return {
    creatingUser,
    createUser
  }
}
