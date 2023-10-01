import { type Chat } from '../models/chat'

export default class ChatDto {
  friendId;
  messagesIds;
  id;

  constructor(model: Chat) {
    this.friendId = model.friendId;
    this.messagesIds = model.messagesIds;
    this.id = model._id;
  }
}