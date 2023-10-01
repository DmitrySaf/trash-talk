import { Chat as ChatModel } from "../models/chat"
import UserService from "./user-service";
import UserDto from "../dtos/user-dto";
import ChatDto from "../dtos/chat-dto";
import MessageService from "./message-service";
import ApiError from "../exceptions/api-error";

export default class ChatService {
  public static async create(friendUsername: string, myUsername: string) {
    const friend = await UserService.getUserByUsername(friendUsername)
    const me = await UserService.getUserByUsername(myUsername)

    if (friend === null || me === null) {
      throw ApiError.BadRequest('Provided usernames are invalid')
    }

    const friendDto = new UserDto(friend)
    const myDto = new UserDto(me)

    const myChat = await ChatModel.create({
      friendId: friendDto.id
    })
    const friendChat = await ChatModel.create({
      friendId: myDto.id
    })

    const friendChatDto = new ChatDto(friendChat)
    const myChatDto = new ChatDto(myChat)

    await UserService.updateUserChats(friend, friendChatDto.id)
    await UserService.updateUserChats(me, myChatDto.id)

    return {
      chat: ChatDto
    }
  }

  public static async getChatById(id: ObjectId) {
    const chat = await ChatModel.findById(id);

    return chat;
  }

  public static async getChatsByIds(ids: ObjectId[]) {
    const chats = await ChatModel.find({ '_id': { $in: ids } });

    return chats;
  }

  public static async getChatMessagesById(id: ObjectId) {
    const { messagesIds } = await this.getChatById(id)
    const messages = await MessageService.getAllMessagesByIds(messagesIds);

    return messages
  }

  public static async addMessage(chat: any, messageId: ObjectId) {
    await chat.messagesIds.push(messageId)
    await chat.save()
  }
}