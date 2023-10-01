export interface CreateUserRequest {
  username: string
}

export interface GetChatsParams {
  username: string
}

export interface Chat {
  friend: {
    username: string
    status: string
  }
  messages: any[]
}

export interface CreateChatRequest {
  friendUsername: string
  myUsername: string
}
