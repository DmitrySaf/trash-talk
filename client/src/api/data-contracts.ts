export interface CreateUserRequest {
  username: string
}

export interface GetChatsParams {
  userId: string
}

export interface Chat {
  avatar: string
  name: string
  messages: any[]
}
