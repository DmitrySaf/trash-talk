export interface CreateUserRequest {
  username: string
}

export interface GetChatsParams {
  username: string
}

export interface Chat {
  // avatar: string
  friendUsername: string
  messages: any[]
}

export interface CreateChatRequest {
  friendUsername: string
  myUsername: string
}
